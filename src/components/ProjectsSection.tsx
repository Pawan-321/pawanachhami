import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Predictive House Price Analysis",
    description: "Machine learning model to predict housing prices using feature engineering and regression algorithms.",
    tags: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Wine Quality Prediction",
    description: "Classification model to assess wine quality based on physicochemical properties.",
    tags: ["Python", "ML", "NumPy"],
  },
  {
    title: "Chatbot – DevOps Project",
    description: "End-to-end chatbot deployed with CI/CD pipelines and containerized infrastructure.",
    tags: ["Docker", "CI/CD", "Python"],
  },
  {
    title: "Microservices App",
    description: "Cloud-native microservices architecture with container orchestration and monitoring.",
    tags: ["Kubernetes", "Docker", "Prometheus"],
  },
  {
    title: "DevOps Mini-Project",
    description: "Infrastructure automation project using Terraform and Ansible for provisioning and config management.",
    tags: ["Terraform", "Ansible", "AWS"],
  },
  {
    title: "Flask Docker Demo",
    description: "Containerized Flask application showcasing Docker best practices and multi-stage builds.",
    tags: ["Flask", "Docker", "Python"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 font-mono text-sm text-primary text-glow">04.</h2>
        <h3 className="mb-12 text-3xl font-bold text-foreground">Projects</h3>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href="https://github.com/Pawan-321"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:-translate-y-1 hover:box-glow"
          >
            <div className="mb-4 flex items-center justify-between text-muted-foreground">
              <Github size={20} />
              <ExternalLink size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h4 className="mb-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {p.title}
            </h4>
            <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-xs text-primary/70">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
