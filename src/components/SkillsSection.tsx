import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Git", "Bash", "Scripting"],
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Tableau"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Nginx", "Grafana", "Prometheus", "Ansible", "Terraform", "Helm"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "CloudFormation", "Linux"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 font-mono text-sm text-primary text-glow">03.</h2>
        <h3 className="mb-12 text-3xl font-bold text-foreground">Skills</h3>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:box-glow"
          >
            <h4 className="mb-4 font-mono text-sm font-semibold text-primary">{cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
