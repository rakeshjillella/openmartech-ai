"use client";

import ContactHero from "./ContactHero";
import ContactAvailability from "./ContactAvailability";
import ContactServices from "./ContactServices";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import ContactFAQ from "./ContactFAQ";

import EnterpriseCTA from "@/components/cta/EnterpriseCTA";

export default function ContactExplorer() {
  return (
    <>
      {/* Hero */}
      <ContactHero />

      {/* Availability */}
      <ContactAvailability />

      {/* Services */}
      <ContactServices />

      {/* Contact Options */}
      <ContactCards />

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ */}
      <ContactFAQ />

      {/* Global CTA */}
      <EnterpriseCTA
        title="Let's Build Something Intelligent Together"
        description="Whether you're exploring Enterprise AI, modern Data Engineering, Responsible AI or scalable analytics platforms, I'd love to discuss your ideas and opportunities."
      />
    </>
  );
}