import { motion } from "framer-motion";
import { Github, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="hero"
    className="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 font-mono text-sm text-primary text-glow"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-4 text-5xl font-bold text-foreground md:text-7xl"
      >
        Pawan Achhami
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8 text-lg text-muted-foreground md:text-xl"
      >
        Data Analyst · DevOps Engineer · Cloud Enthusiast
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-6"
      >
        <a
          href="https://github.com/Pawan-321"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Github size={24} />
        </a>
        <a
          href="mailto:pawanachhami98@gmail.com"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail size={24} />
        </a>
        <a
          href="tel:9861348443"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Phone size={24} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16"
      >
        <a
          href="#about"
          className="inline-block rounded-md border border-primary px-8 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:box-glow"
        >
          Explore My Work
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
