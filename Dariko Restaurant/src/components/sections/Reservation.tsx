import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useInView } from "../../hooks/useInView";
import { Container } from "../layout/Container";
import { Check, ArrowLeft } from "lucide-react";
import { cn } from "../../lib/utils";

const timeSlots = [
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export function Reservation() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const { ref: sectionRef, inView } = useInView<HTMLElement>({
    threshold: 0.05,
  });

  const [submitted, setSubmitted] = useState(false);
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fadeUp = (delay: number) =>
    reduced
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 30 },
          animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  const inputClasses =
    "w-full bg-transparent border border-stone/40 rounded-xl px-4 py-3.5 text-charcoal placeholder:text-stone-dark/60 focus:outline-none focus:border-amber/60 focus:ring-1 focus:ring-amber/20 transition-all duration-300 text-sm";

  // Minimum date is today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reserve"
      ref={sectionRef}
      className="relative bg-night py-28 sm:py-36 lg:py-44 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[300px] bg-amber/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-forest/5 rounded-full blur-[100px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Info */}
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-amber tracking-[0.25em] uppercase text-xs font-semibold mb-4"
            >
              {t("reserve.label")}
            </motion.p>
            <motion.h2
              {...fadeUp(0.1)}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-cream"
            >
              {t("reserve.headline")}
            </motion.h2>
            <motion.p
              {...fadeUp(0.2)}
              className="mt-5 text-stone-dark text-base sm:text-lg leading-relaxed max-w-md"
            >
              {t("reserve.subtitle")}
            </motion.p>

            {/* Atmospheric image */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-10 relative aspect-[4/3] overflow-hidden rounded-xl hidden lg:block"
            >
              <img
                src="/images/couple-dining.jpg"
                alt="Outdoor dining at Dariko"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div {...fadeUp(0.2)}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={reduced ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? {} : { opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-cream rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-night/50"
                >
                  {/* Name */}
                  <div className="mb-5">
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-semibold uppercase tracking-widest text-stone-dark mb-2"
                    >
                      {t("reserve.name")}
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      placeholder={t("reserve.name.placeholder")}
                      className={inputClasses}
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-5">
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-semibold uppercase tracking-widest text-stone-dark mb-2"
                    >
                      {t("reserve.phone")}
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder={t("reserve.phone.placeholder")}
                      className={inputClasses}
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label
                        htmlFor="res-date"
                        className="block text-xs font-semibold uppercase tracking-widest text-stone-dark mb-2"
                      >
                        {t("reserve.date")}
                      </label>
                      <input
                        id="res-date"
                        type="date"
                        required
                        min={today}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="res-time"
                        className="block text-xs font-semibold uppercase tracking-widest text-stone-dark mb-2"
                      >
                        {t("reserve.time")}
                      </label>
                      <select
                        id="res-time"
                        required
                        className={cn(inputClasses, "appearance-none cursor-pointer")}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --:--
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-stone-dark mb-3">
                      {t("reserve.guests")}:{" "}
                      <span className="text-charcoal font-bold text-sm normal-case">
                        {guests}{" "}
                        {guests === 1 ? t("reserve.guest") : t("reserve.guests_plural")}
                      </span>
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={12}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full h-1.5 bg-stone/30 rounded-full appearance-none cursor-pointer accent-amber-dark"
                    />
                    <div className="flex justify-between text-xs text-stone-dark mt-1">
                      <span>1</span>
                      <span>12</span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mb-8">
                    <label
                      htmlFor="res-notes"
                      className="block text-xs font-semibold uppercase tracking-widest text-stone-dark mb-2"
                    >
                      {t("reserve.notes")}
                    </label>
                    <textarea
                      id="res-notes"
                      rows={3}
                      placeholder={t("reserve.notes.placeholder")}
                      className={cn(inputClasses, "resize-none")}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-night text-cream font-semibold tracking-wide rounded-xl hover:bg-charcoal-light transition-all duration-300 active:scale-[0.98] text-sm sm:text-base"
                  >
                    {t("reserve.submit")}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-cream rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl shadow-night/50 text-center"
                >
                  <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-forest/10 flex items-center justify-center">
                    <Check className="h-8 w-8 text-forest" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-charcoal mb-3">
                    {t("reserve.success.title")}
                  </h3>
                  <p className="text-stone-dark text-base leading-relaxed max-w-sm mx-auto">
                    {t("reserve.success.message")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-charcoal border border-stone/40 rounded-xl hover:border-amber/60 transition-all duration-300"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t("reserve.success.back")}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
