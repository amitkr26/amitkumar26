"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const inputClass = "w-full p-3 bg-background border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600";

export default function Form() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully. I'll get back to you soon.", { id: toastId });
        reset();
      } else {
        toast.error(result.error || "Failed to send message.", { id: toastId });
      }
    } catch {
      toast.error("Network error. Please try again.", { id: toastId });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg w-full space-y-5"
      >
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Name</label>
          <motion.input
            variants={item}
            type="text"
            placeholder="Your name"
            {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name too short" } })}
            className={inputClass}
          />
          {errors.name && <span className="text-[11px] text-accent mt-1 block">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Email</label>
          <motion.input
            variants={item}
            type="email"
            placeholder="your@email.com"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className={inputClass}
          />
          {errors.email && <span className="text-[11px] text-accent mt-1 block">{errors.email.message}</span>}
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Message</label>
          <motion.textarea
            variants={item}
            rows="5"
            placeholder="Your message..."
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Message too short (min 10 chars)" },
              maxLength: { value: 2000, message: "Message too long (max 2000 chars)" },
            })}
            className={inputClass}
          />
          {errors.message && <span className="text-[11px] text-accent mt-1 block">{errors.message.message}</span>}
        </div>

        <motion.button
          variants={item}
          type="submit"
          disabled={submitting}
          className="w-full bg-accent text-background text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </>
  );
}
