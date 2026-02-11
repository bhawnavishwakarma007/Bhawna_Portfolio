import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I am a passionate Cloud & DevOps Engineer with a strong
              foundation in designing, automating, and managing scalable cloud
              infrastructure on AWS. I specialize in Infrastructure as Code
              using Terraform and OpenTofu, building robust CI/CD pipelines, and
              deploying serverless architectures.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              My focus is on eliminating manual provisioning through automation,
              implementing security best practices with IAM roles and least-privilege
              access, and monitoring systems using Grafana and Prometheus. I enjoy
              building highly available, fault-tolerant systems that scale.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Currently pursuing my Bachelor of Technology in Computer Science at
              Eklavya University, I am constantly learning and exploring new
              technologies in cloud computing, serverless computing, and
              DevOps methodologies.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
                Quick Facts
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <GraduationCap
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      B.Tech in Computer Science
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Eklavya University | CGPA 8.0/10
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Hyderabad, Telangana
                    </p>
                    <p className="text-xs text-muted-foreground">India</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      2022 - 2026
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Expected Graduation
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ number, title }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{number}.</span>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

export { SectionHeading };
