import Image from "next/image";

export default function Contact() {
  return (
    <section className="mt-32 mb-16 px-12">
      <div className="page-header text-center">Contact</div>
      <div className="full-container bg-white">
        <div className="card flex items-start py-20 px-36">
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
              /%Contact Form%/
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
