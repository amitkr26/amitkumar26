"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Transmitting message...");

    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      toast.success("Message recorded (demo mode). Connect via GitHub/LinkedIn for direct response.", { id: toastId });
      reset();
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY, limitRate: { throttle: 5000 } }
      )
      .then(
        () => {
          toast.success("Message transmitted successfully. Will respond within 48 hours.", { id: toastId });
          reset();
        },
        () => {
          toast.error("Transmission failed. Please try again or use email directly.", { id: toastId });
        }
      );
  };

  const onSubmit = (data) => {
    sendEmail({
      to_name: "Amit Kumar",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    });
  };

  return (
    <>
      <Toaster richColors={true} />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Name / Organization</label>
          <input
            type="text"
            placeholder="Your name or affiliation"
            {...register("name", { required: "Required field", minLength: { value: 2, message: "Minimum 2 characters" } })}
            className="w-full bg-background border border-slate-800 p-3 text-sm text-slate-200 focus:outline-none focus:border-accent transition-colors placeholder:text-slate-700"
          />
          {errors.name && <span className="inline-block text-[10px] text-accent mt-1">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Email</label>
          <input
            type="email"
            placeholder="email@organization.com"
            {...register("email", { required: "Required field", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
            className="w-full bg-background border border-slate-800 p-3 text-sm text-slate-200 focus:outline-none focus:border-accent transition-colors placeholder:text-slate-700"
          />
          {errors.email && <span className="inline-block text-[10px] text-accent mt-1">{errors.email.message}</span>}
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Message / Inquiry</label>
          <textarea
            rows="5"
            placeholder="Describe your project, research interest, or opportunity..."
            {...register("message", { required: "Required field", minLength: { value: 20, message: "Minimum 20 characters" }, maxLength: { value: 2000, message: "Maximum 2000 characters" } })}
            className="w-full bg-background border border-slate-800 p-3 text-sm text-slate-200 focus:outline-none focus:border-accent transition-colors placeholder:text-slate-700 resize-vertical"
          />
          {errors.message && <span className="inline-block text-[10px] text-accent mt-1">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-background text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors cursor-pointer"
        >
          Transmit Message
        </button>
      </form>
    </>
  );
}
