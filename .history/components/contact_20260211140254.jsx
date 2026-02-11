import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { SectionHeading } from "./about";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "bhawna.vishwakarma2004@gmail.com",
    href: "mailto:bhawna.vishwakarma2004@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-887154XXXX",
    href: "tel:+91887154XXXX",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Bhawna Vishwakarma",
    href: "https://linkedin.com/in/bhawna-vishwakarma-1412472a6/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "bhawnavishwakarma007",
    href: "https://github.com/bhawnavishwakarma007",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading number="04" title="Get In Touch" />

        <p className="mx-auto mb-10 max-w-lg leading-relaxed text-muted-foreground">
          I am currently looking for new opportunities in Cloud & DevOps
          engineering. Whether you have a question, a project idea, or just want
          to say hi, feel free to reach out.
        </p>

        <div className="mx-auto grid max-w-md gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-primary/40"
            >
              <link.icon size={18} className="shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">
                  {link.label}
                </p>
                <p className="truncate text-sm text-foreground">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="mailto:bhawna.vishwakarma2004@gmail.com"
          className="mt-10 inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
