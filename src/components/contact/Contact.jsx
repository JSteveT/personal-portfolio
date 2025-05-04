"use client";
import { motion } from "framer-motion";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactStatus from "./ContactStatus";
import useContactForm from "./useContactForm";

export default function Contact() {
  const { sent, error, formRef, handleSubmit } = useContactForm();

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center px-6 py-20 text-white"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <ContactHeader />

        {sent || error ? (
          <ContactStatus sent={sent} error={error} />
        ) : (
          <ContactForm formRef={formRef} onSubmit={handleSubmit} />
        )}
      </motion.div>
    </section>
  );
}
