import ContactForm from "./contact-form";

import TitleSection from "@/components/common/title-section/title-section";

const Contact = () => {
  return (
    <section id="contact" className="space-y-8 py-8">
      <TitleSection title="Contact Me" description="Let's go! Get in touch with me 👋" />

      <ContactForm />
    </section>
  );
};

export default Contact;
