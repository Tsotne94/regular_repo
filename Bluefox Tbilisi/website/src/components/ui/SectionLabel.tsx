import { motion } from "framer-motion";

interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-6 flex items-center gap-3"
    >
      <span className="h-px w-8 bg-brand-amber" />
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-amber">
        {text}
      </span>
    </motion.div>
  );
}
