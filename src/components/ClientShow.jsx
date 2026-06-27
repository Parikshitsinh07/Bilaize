import { cn } from "../lib/utils";
import { LogoCloud } from "./ui/logo-cloud-3";

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

export function ClientShow() {
  return (
    <div className="w-full bg-[#f7f5f5] pt-16 pb-48 overflow-hidden relative">
      {/* Blurred radial background element for depth */}
      <div
        aria-hidden="true"
        className={cn(
          "-z-10 -top-1/2 pointer-events-none absolute left-1/2 -translate-x-1/2 h-[120vmin] w-[120vmin] rounded-b-full opacity-5",
          "bg-[radial-gradient(ellipse_at_center,var(--primary-color),transparent_60%)]",
          "blur-[40px]"
        )}
      />

      {/* <section className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-xl md:text-3xl font-medium tracking-tight text-zinc-800">
          <span className="text-zinc-500 font-normal">Trusted by experts.</span>
          <br />
          <span className="font-semibold text-zinc-800">Used by the leaders.</span>
        </h2>
      </section> */}

      {/* Logo Cloud Slider - Spans full width of screen */}
      <div className="w-full my-8">
        <LogoCloud logos={logos} />
      </div>
    </div>
  );
}

export default ClientShow;
