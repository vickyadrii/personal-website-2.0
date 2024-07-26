import ContactsForm from "./contacts-form";

import TitleSection from "@/components/common/title-section/title-section";

const Contacts = () => {
  return (
    <section id="projects" className="space-y-8 py-8">
      <TitleSection title="Contact Me" description="Let's go! Get in touch with me 👋" />

      <ContactsForm />
    </section>
  );
};

export default Contacts;
