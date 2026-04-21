import { Mail } from "lucide-react";

export default function GetInTouchSection() {
  return (
    <section
      id="getInTouchSection"
      className="flex flex-col justify-center items-center  min-h-[90dvh] px-4"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center pb-4">
        Get In Touch
      </h2>

      <div className="h-1 w-20 bg-linear-to-r from-gradient-start to-gradient-end rounded-full" />
      <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <p className="text-muted-foreground text-lg w-full max-w-150 text-center pt-4">
          I'm currently open to new opportunities and would love to hear from
          you. Whether you have a question, a project idea, or just want to say
          hi, feel free to reach out!
        </p>

        <button className="btn-gradient flex justify-around items-center w-full max-w-65 h-10 bg-blue-950 rounded-lg px-2 cursor-pointer hover:scale-105">
          <Mail size={20} />
          <span>poitoubenjamin@gmail.com</span>
        </button>
      </div>
    </section>
  );
}
