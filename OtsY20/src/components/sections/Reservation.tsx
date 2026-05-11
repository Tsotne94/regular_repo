"use client";

import { useState, useCallback, useRef, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";
import { Check, Minus, Plus, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const TIME_SLOTS = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];

interface FormData {
  date: string;
  time: string;
  guests: number;
  name: string;
  phone: string;
}

const inputBaseClasses =
  "w-full bg-transparent border border-walnut/30 px-4 py-3.5 text-linen font-sans text-sm placeholder:text-sage-light/40 transition-all duration-300 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_0_1px_rgba(196,162,101,0.15)] rounded-none appearance-none";

export function Reservation() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useI18n();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    guests: 2,
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const updateField = useCallback(
    <K extends keyof FormData>(field: K, value: FormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    []
  );

  const validate = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.date) newErrors.date = t.reservation.required;
    if (!formData.time) newErrors.time = t.reservation.required;
    if (!formData.name.trim()) newErrors.name = t.reservation.required;
    if (!formData.phone.trim()) newErrors.phone = t.reservation.required;
    if (formData.phone.trim() && formData.phone.replace(/\D/g, "").length < 9)
      newErrors.phone = t.reservation.invalidNumber;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, t]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (validate()) {
        setIsSubmitted(true);
      }
    },
    [validate]
  );

  const incrementGuests = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.min(prev.guests + 1, 12),
    }));
  }, []);

  const decrementGuests = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(prev.guests - 1, 1),
    }));
  }, []);

  // Close time dropdown when clicking outside
  const timeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isTimeOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (timeRef.current && !timeRef.current.contains(e.target as Node)) {
        setIsTimeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTimeOpen]);

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <SectionWrapper id="reserve" className="relative">
      {/* Subtle gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(139,139,106,0.05) 0%, transparent 60%)",
        }}
      />

      <Container>
        <div className="max-w-xl mx-auto">
          {/* Section header */}
          <div className="mb-14 text-center">
            <FadeIn>
              <span className="inline-block font-sans text-[10px] uppercase tracking-[0.4em] text-gold/70 mb-6">
                {t.reservation.label}
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-linen">
                {t.reservation.heading}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-sm text-sage-light/60 font-light">
                {t.reservation.hours}
              </p>
            </FadeIn>
          </div>

          {/* Form / Confirmation */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -20 }
                }
                transition={{ duration: 0.5 }}
                noValidate
              >
                {/* Date and Time Row */}
                <FadeIn delay={0.2}>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Date */}
                    <div>
                      <label
                        htmlFor="reservation-date"
                        className="block text-[11px] uppercase tracking-[0.2em] text-sage-light/50 mb-2 font-sans"
                      >
                        {t.reservation.date}
                      </label>
                      <input
                        id="reservation-date"
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={(e) => updateField("date", e.target.value)}
                        className={cn(
                          inputBaseClasses,
                          errors.date && "border-red-400/50"
                        )}
                        aria-invalid={!!errors.date}
                        aria-describedby={errors.date ? "date-error" : undefined}
                      />
                      {errors.date && (
                        <p
                          id="date-error"
                          className="mt-1.5 text-[11px] text-red-400/70"
                        >
                          {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Time - Custom Select */}
                    <div className="relative" ref={timeRef}>
                      <label
                        htmlFor="reservation-time"
                        className="block text-[11px] uppercase tracking-[0.2em] text-sage-light/50 mb-2 font-sans"
                      >
                        {t.reservation.time}
                      </label>
                      <button
                        id="reservation-time"
                        type="button"
                        onClick={() => setIsTimeOpen(!isTimeOpen)}
                        className={cn(
                          inputBaseClasses,
                          "text-left flex items-center justify-between cursor-pointer",
                          !formData.time && "text-sage-light/40",
                          errors.time && "border-red-400/50"
                        )}
                        aria-expanded={isTimeOpen}
                        aria-haspopup="listbox"
                        aria-invalid={!!errors.time}
                      >
                        <span>{formData.time || t.reservation.selectTime}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 text-sage-light/40 transition-transform duration-200",
                            isTimeOpen && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {isTimeOpen && (
                          <motion.ul
                            role="listbox"
                            className="absolute z-20 top-full left-0 right-0 mt-1 bg-charcoal-light border border-walnut/30 max-h-48 overflow-y-auto shadow-xl"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                          >
                            {TIME_SLOTS.map((slot) => (
                              <li key={slot}>
                                <button
                                  type="button"
                                  role="option"
                                  aria-selected={formData.time === slot}
                                  className={cn(
                                    "w-full text-left px-4 py-2.5 text-sm font-sans transition-colors duration-150 cursor-pointer",
                                    formData.time === slot
                                      ? "text-gold bg-walnut/20"
                                      : "text-linen/70 hover:bg-walnut/10 hover:text-linen"
                                  )}
                                  onClick={() => {
                                    updateField("time", slot);
                                    setIsTimeOpen(false);
                                  }}
                                >
                                  {slot}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>

                      {errors.time && (
                        <p className="mt-1.5 text-[11px] text-red-400/70">
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>

                {/* Guests Counter */}
                <FadeIn delay={0.25}>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-sage-light/50 mb-2 font-sans">
                      {t.reservation.guests}
                    </label>
                    <div className="flex items-center border border-walnut/30 transition-all duration-300 focus-within:border-gold/50 focus-within:shadow-[0_0_0_1px_rgba(196,162,101,0.15)]">
                      <button
                        type="button"
                        onClick={decrementGuests}
                        disabled={formData.guests <= 1}
                        className="px-4 py-3.5 text-sage-light/50 hover:text-linen disabled:opacity-30 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
                        aria-label="Decrease guests"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span
                        className="flex-1 text-center text-sm font-sans text-linen tabular-nums"
                        aria-live="polite"
                        aria-label={`${formData.guests} guests`}
                      >
                        {formData.guests}
                      </span>
                      <button
                        type="button"
                        onClick={incrementGuests}
                        disabled={formData.guests >= 12}
                        className="px-4 py-3.5 text-sage-light/50 hover:text-linen disabled:opacity-30 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
                        aria-label="Increase guests"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </FadeIn>

                {/* Name */}
                <FadeIn delay={0.3}>
                  <div>
                    <label
                      htmlFor="reservation-name"
                      className="block text-[11px] uppercase tracking-[0.2em] text-sage-light/50 mb-2 font-sans"
                    >
                      {t.reservation.name}
                    </label>
                    <input
                      id="reservation-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder={t.reservation.namePlaceholder}
                      className={cn(
                        inputBaseClasses,
                        errors.name && "border-red-400/50"
                      )}
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[11px] text-red-400/70">
                        {errors.name}
                      </p>
                    )}
                  </div>
                </FadeIn>

                {/* Phone */}
                <FadeIn delay={0.35}>
                  <div>
                    <label
                      htmlFor="reservation-phone"
                      className="block text-[11px] uppercase tracking-[0.2em] text-sage-light/50 mb-2 font-sans"
                    >
                      {t.reservation.phone}
                    </label>
                    <div
                      className={cn(
                        "flex items-center border border-walnut/30 transition-all duration-300 focus-within:border-gold/50 focus-within:shadow-[0_0_0_1px_rgba(196,162,101,0.15)]",
                        errors.phone && "border-red-400/50"
                      )}
                    >
                      <span className="pl-4 pr-2 text-sm text-sage-light/50 font-sans select-none">
                        +995
                      </span>
                      <div className="w-px h-5 bg-walnut/30" />
                      <input
                        id="reservation-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder={t.reservation.phonePlaceholder}
                        className="flex-1 bg-transparent px-3 py-3.5 text-linen font-sans text-sm placeholder:text-sage-light/40 focus:outline-none appearance-none"
                        aria-invalid={!!errors.phone}
                        autoComplete="tel-national"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-[11px] text-red-400/70">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </FadeIn>

                {/* Submit */}
                <FadeIn delay={0.4}>
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      className="w-full py-4 bg-gold/90 text-charcoal font-sans text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-gold cursor-pointer"
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    >
                      {t.reservation.submit}
                    </motion.button>
                  </div>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <p className="text-center text-[11px] text-sage-light/40 font-light mt-2">
                    {t.reservation.confirmNote}
                  </p>
                </FadeIn>
              </motion.form>
            ) : (
              <motion.div
                key="confirmation"
                className="flex flex-col items-center py-16 text-center"
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Animated checkmark */}
                <motion.div
                  className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-8"
                  initial={shouldReduceMotion ? {} : { scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <motion.div
                    initial={shouldReduceMotion ? {} : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Check className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="font-serif text-2xl md:text-3xl text-linen mb-3"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {t.reservation.confirmTitle}
                </motion.h3>

                <motion.div
                  className="space-y-1.5 mb-8"
                  initial={shouldReduceMotion ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm text-sage-light/60 font-light">
                    {formData.date} at {formData.time} for {formData.guests}{" "}
                    {formData.guests === 1 ? t.reservation.confirmGuest : t.reservation.confirmGuests}
                  </p>
                  <p className="text-[13px] text-sage-light/40 font-light">
                    {t.reservation.confirmMessage}
                  </p>
                </motion.div>

                {/* Thin divider */}
                <motion.div
                  className="w-12 h-px bg-walnut/30 mb-8"
                  initial={shouldReduceMotion ? {} : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />

                <motion.button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      date: "",
                      time: "",
                      guests: 2,
                      name: "",
                      phone: "",
                    });
                  }}
                  className="text-[12px] uppercase tracking-[0.2em] text-sage-light/40 hover:text-gold/60 transition-colors duration-300 cursor-pointer"
                  initial={shouldReduceMotion ? {} : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {t.reservation.confirmAnother}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </SectionWrapper>
  );
}
