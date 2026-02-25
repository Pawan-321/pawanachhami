import { motion } from "framer-motion";
import { Mail, Phone, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="mx-auto max-w-2xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 font-mono text-sm text-primary text-glow">05.</h2>
        <h3 className="mb-6 text-3xl font-bold text-foreground">Get In Touch</h3>
        <p className="mb-10 text-muted-foreground">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="mb-10 flex items-center justify-center gap-8">
          <a href="mailto:pawanachhami98@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Mail size={18} /> pawanachhami98@gmail.com
          </a>
          <a href="tel:9861348443" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Phone size={18} /> 9861348443
          </a>
        </div>

        <a
          href="mailto:pawanachhami98@gmail.com"
          className="inline-block rounded-md border border-primary px-8 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:box-glow"
        >
          Say Hello
        </a>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8 text-center">
    <a
      href="https://github.com/Pawan-321"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
    >
      <Github size={14} />
      Built by Pawan Achhami
    </a>
  </footer>
);

export { ContactSection, Footer };
