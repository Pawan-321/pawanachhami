import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-2 font-mono text-sm text-primary text-glow">01.</h2>
        <h3 className="mb-8 text-3xl font-bold text-foreground">About Me</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a Computer Engineering graduate from Pokhara University, Nepal, with a
            passion for building scalable cloud infrastructure, analyzing data to drive
            decisions, and automating everything in between.
          </p>
          <p>
            My experience spans data analytics with Python and SQL, cloud architecture
            on AWS, and DevOps pipelines using Docker, Kubernetes, and Terraform. I love
            bridging the gap between development and operations to deliver reliable,
            efficient systems.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
