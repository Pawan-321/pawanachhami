import { motion } from "framer-motion";
import trainingCert from "@/assets/training.jpeg";
import internCert from "@/assets/intern.jpeg";

const certifications = [
  {
    title: "DevOps Training Certificate",
    issuer: "Mindrisers Institute of Technology",
    date: "Feb 2026",
    duration: "3 months",
    image: trainingCert,
  },
  {
    title: "Data Analyst Internship Certificate",
    issuer: "NeuralRow",
    date: "Mar 2025",
    duration: "Dec 2024 – Mar 2025",
    image: internCert,
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 font-mono text-sm text-primary text-glow">04.</h2>
        <h3 className="mb-12 text-3xl font-bold text-foreground">Certifications</h3>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:box-glow"
          >
            <div className="overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h4 className="text-lg font-semibold text-foreground">{cert.title}</h4>
              <p className="mt-1 font-mono text-sm text-muted-foreground">@ {cert.issuer}</p>
              <p className="mt-1 font-mono text-xs text-primary">{cert.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
