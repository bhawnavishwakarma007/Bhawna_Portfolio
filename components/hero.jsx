import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-primary">
          Hello, I am
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Bhawna Vishwakarma
        </h1>
        <h2 className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
          Cloud & DevOps Engineer
        </h2>
        <p className="mx-auto mb-10 max-w-xl leading-relaxed text-muted-foreground text-pretty">
          I build scalable cloud infrastructure and automated deployment
          pipelines using AWS, Terraform, and CI/CD. Passionate about
          infrastructure as code and serverless architecture.
        </p>

        {/* Social links */}
        <div className="mb-12 flex items-center justify-center gap-6">
          <a
            href="https://github.com/bhawnavishwakarma007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub profile"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/bhawna-vishwakarma-1412472a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:bhawna.vishwakarma2004@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Send email"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
