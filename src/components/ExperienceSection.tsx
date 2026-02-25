import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analyst Intern",
    company: "Neuralrow",
    period: "Aug 2024 – Feb 2025",
    description:
      "Utilized Tableau, Python (Pandas, NumPy), and SQL to analyze datasets and generate actionable business insights.",
  },
  {
    role: "AWS Solutions Architect Associate (Apprentice)",
    company: "Adex International",
    period: "Jun 2025 – Aug 2025",
    description:
      "Gained hands-on experience with EC2, S3, Lambda, VPC, IAM, CloudFormation, and CloudWatch — designing resilient cloud architectures.",
  },
  {
    role: "DevOps Training Certified",
    company: "Mindrisers Technologies",
    period: "Completed",
    description:
      "Hands-on experience with Docker, Kubernetes, Nginx, Grafana, Prometheus, Ansible, Terraform, and Helm.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 font-mono text-sm text-primary text-glow">02.</h2>
        <h3 className="mb-12 text-3xl font-bold text-foreground">Experience</h3>
      </motion.div>

      <div className="relative border-l border-border pl-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative mb-12 last:mb-0"
          >
            {/* dot */}
            <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
            <p className="mb-1 font-mono text-xs text-primary">{exp.period}</p>
            <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
            <p className="mb-2 font-mono text-sm text-muted-foreground">@ {exp.company}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
