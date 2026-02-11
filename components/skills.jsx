import {
  Cloud,
  GitBranch,
  Code,
  Database,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./about";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Terraform",
      "OpenTofu",
      "CI/CD",
      "CloudWatch",
      "CloudFront",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    title: "CI/CD & Automation",
    icon: GitBranch,
    skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins"],
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python (Boto3)", "Bash", "JavaScript", "Node.js"],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL", "Amazon RDS", "DynamoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Linux", "Nginx"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="02" title="Technical Skills" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <cat.icon
                  size={20}
                  className="text-primary"
                />
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
