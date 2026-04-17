import { Mail } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center pb-4">
        Get In Touch
      </h2>
      <p className="text-muted-foreground text-lg w-full max-w-150 text-center">
        I'm currently open to new opportunities and would love to hear from you.
        Whether you have a question, a project idea, or just want to say hi,
        feel free to reach out!
      </p>

      <button className="flex justify-around items-center w-full max-w-60 h-10 bg-blue-950 rounded-lg">
        <Mail size={20} />
        <span>poitoubenjamin@gmail.com</span>
      </button>
    </section>
  );
}
