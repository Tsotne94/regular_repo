import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionLabel } from "../ui/SectionLabel";
import { cn } from "../../lib/utils";

interface FormErrors {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
}

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
];

export function Reservation() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t.reservation.validation.nameRequired;
    if (!formData.phone.trim()) newErrors.phone = t.reservation.validation.phoneRequired;
    if (!formData.date) newErrors.date = t.reservation.validation.dateRequired;
    if (!formData.time) newErrors.time = t.reservation.validation.timeRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", phone: "", date: "", time: "", guests: "2", requests: "" });
    }, 4000);
  };

  const today = new Date().toISOString().split("T")[0];

  const inputClasses = (hasError: boolean) =>
    cn(
      "w-full bg-white border rounded-lg px-4 py-3 text-sm text-brand-text placeholder:text-brand-text-light outline-none transition-all duration-300",
      "focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30",
      hasError ? "border-red-500/60" : "border-brand-border"
    );

  return (
    <SectionWrapper id="reservation">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image + Info */}
          <div>
            <SectionLabel text={t.reservation.sectionLabel} />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-serif text-4xl sm:text-5xl lg:text-6xl text-brand-text mb-4"
            >
              {t.reservation.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-text-muted text-sm sm:text-base mb-10"
            >
              {t.reservation.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl hidden sm:block"
            >
              <img
                src="/images/balcony-detail.jpg"
                alt="Couple enjoying wine in the courtyard"
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-20 px-8 border border-brand-border rounded-2xl bg-brand-card"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                    <Check size={28} className="text-green-400" />
                  </div>
                  <p className="heading-serif text-2xl text-brand-text text-center mb-2">
                    {t.reservation.form.success}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 border border-brand-border rounded-2xl p-6 sm:p-8 bg-white"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="res-name" className="block text-xs text-brand-text-muted mb-2 tracking-wide">
                      {t.reservation.form.name}
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses(!!errors.name)}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="res-phone" className="block text-xs text-brand-text-muted mb-2 tracking-wide">
                      {t.reservation.form.phone}
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClasses(!!errors.phone)}
                      placeholder="+995 555 123 456"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="res-date" className="block text-xs text-brand-text-muted mb-2 tracking-wide">
                        {t.reservation.form.date}
                      </label>
                      <input
                        id="res-date"
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={inputClasses(!!errors.date)}
                      />
                      {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label htmlFor="res-time" className="block text-xs text-brand-text-muted mb-2 tracking-wide">
                        {t.reservation.form.time}
                      </label>
                      <select
                        id="res-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className={inputClasses(!!errors.time)}
                      >
                        <option value="">--:--</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.time && <p className="text-xs text-red-400 mt-1">{errors.time}</p>}
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="res-guests" className="block text-xs text-brand-text-muted mb-2 tracking-wide">
                      {t.reservation.form.guests}
                    </label>
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className={inputClasses(false)}
                    >
                      {t.reservation.form.guestOptions.map((opt, i) => (
                        <option key={i} value={String(i + 1)}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label htmlFor="res-requests" className="block text-xs text-brand-text-muted mb-2 tracking-wide">
                      {t.reservation.form.requests}
                    </label>
                    <textarea
                      id="res-requests"
                      rows={3}
                      value={formData.requests}
                      onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                      className={cn(inputClasses(false), "resize-none")}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-brand-blue text-white font-medium text-sm tracking-wider uppercase rounded-lg hover:bg-brand-blue-light transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed glow-blue flex items-center justify-center gap-2"
                  >
                    {isSubmitting && <Loader2 size={16} className="animate-spin" />}
                    {t.reservation.form.submit}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
