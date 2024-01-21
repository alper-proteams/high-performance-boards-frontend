import Image from "next/image";

import ContactForm from "../components/form/contactForm";

export const metadata = {
  title: "HPB - Contact",
  description: "High Performance Board",
};

export default function Contact() {
  return (
    <section className="mt-32 mb-16 xl:px-12">
      <div className="page-header text-center">Contact</div>
      <div className="full-container bg-white">
        <div className="card card flex flex-col xl:flex-row items-start p-4 xl:py-20 xl:px-36 gap-4 xl:gap-0">
          <Image
            src="/images/common/contact.jpg"
            width={500}
            height={300}
            priority
            alt="image"
            className="mr-16"
          />

          <div className="card-body">
            <div className="card-content">
              <p className="body-default-24">
                Thank you for your interest in the HPB Board Leadership
                Simulation. We're here to assist you with any inquiries or
                information you may need. Please fill out the form below, and
                we'll get back to you promptly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
