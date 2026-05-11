import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionLabelProps {
  text: string;
  center?: boolean;
}

export function SectionLabel({ text, center = false }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-6 flex items-center gap-3", center && "justify-center")}
    >
      <span className="h-px w-8 bg-brand-blue" />
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-blue-light">
        {text}
      </span>
      {center && <span className="h-px w-8 bg-brand-blue" />}
    </motion.div>
  );
}
