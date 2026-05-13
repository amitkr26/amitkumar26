import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Contact page background"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Get In Touch
          </h1>
          <p className="text-center text-sm text-slate-400 leading-relaxed max-w-xl">
            Open to discussions on semiconductor research, embedded systems engineering, RTL/VLSI opportunities, and technical collaboration. Use the form below or connect via GitHub/LinkedIn.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
