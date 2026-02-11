import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/bhawnavishwakarma007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/bhawna-vishwakarma-1412472a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:bhawna.vishwakarma2004@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Bhawna Vishwakarma
        </p>
      </div>
    </footer>
  );
}
