import { ExternalLink, Layers } from "lucide-react";
import { SectionHeading } from "./about";

const projects = [
  {
    title: "Terraform-Based AWS Infrastructure & Application Deployment",
    description:
      "Automated AWS infrastructure using Terraform (VPC, EC2, ALB, Auto Scaling, RDS), eliminating manual provisioning. Deployed React frontend and Node.js backend on EC2 using Nginx reverse proxy with CI/CD via GitHub Actions.",
    highlights: [
      "Highly available architecture with public/private subnets and load balancers",
      "CI/CD pipelines with GitHub Actions for automated build & deploy",
      "Security best practices with IAM roles, security groups, and bastion host",
      "Monitoring with Grafana & Prometheus",
    ],
    tags: [
      "Terraform",
      "AWS EC2",
      "VPC",
      "ALB",
      "Auto Scaling",
      "RDS",
      "GitHub Actions",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    title: "Scalable AWS Cloud Infrastructure (OpenTofu)",
    description:
      "Provisioned scalable AWS infrastructure using OpenTofu to enable consistent, repeatable, and automated deployments. Designed a multi-tier architecture integrating EC2, RDS, and S3.",
    highlights: [
      "Multi-tier architecture with EC2, RDS, and S3 integration",
      "IAM roles for secure AWS service access without hardcoded credentials",
      "Application Load Balancer for traffic distribution",
      "VPC security groups enforcing least-privilege network access",
    ],
    tags: [
      "OpenTofu",
      "AWS EC2",
      "RDS",
      "S3",
      "IAM",
      "ALB",
      "VPC",
      "Linux",
    ],
  },
  {
    title: "Fully Managed Serverless Full-Stack Deployment",
    description:
      "Designed and deployed a fully serverless full-stack application using API Gateway, Lambda, and DynamoDB, eliminating server management overhead entirely.",
    highlights: [
      "REST APIs triggering Lambda for input validation and DynamoDB persistence",
      "IAM roles and Lambda proxy integration for secure communication",
      "Event-driven workflow with API Gateway handling HTTP requests",
      "Scalable event-driven processing architecture",
    ],
    tags: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "IAM",
      "Serverless",
      "Python",
      "REST APIs",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="03" title="Projects" />

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
            >
              <div className="mb-4 flex items-start gap-3">
                <Layers
                  size={20}
                  className="mt-1 shrink-0 text-primary"
                />
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
              </div>

              <p className="mb-5 leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mb-6 flex flex-col gap-2">
                {project.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
