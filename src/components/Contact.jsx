import ContactForm from "./ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useGSAP(() => {
    gsap.from('.text', {
        opacity: 0, 
        y: 100,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.text',
            start: "top 90%"
        }
    })
  }, {scope: contactRef})

  return (
    <section
      ref={contactRef}
      id="contact"
      className="container mx-auto flex min-h-screen flex-col items-center px-6 py-10"
    >
      <div className="w-full max-w-5xl rounded-2xl px-5">
        <h2 className="text mb-8 text-center text-4xl font-semibold">
          Get in Touch
        </h2>
        <p className="text mb-10 text-center text-lg text-gray-400">
          Whether you{"'"}re looking for collaboration or just want to say hi,
          feel free to reach out!
        </p>

        <div className="text grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="text-gray-300">
            <h3 className="text mb-6 text-2xl font-semibold">
              My Contact Information
            </h3>
            <ul className="text-lg">
              <li className="text mb-4 flex gap-1">
                <strong>Address:</strong>{" "}
                <address>Meherpur, Khulna, Bangladesh.</address>
              </li>
              <li className="text mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:hussainahmed.vu@gamil.com"
                  className="text-teal-600 hover:underline"
                >
                  hussainahmed.vu@gmail.com
                </a>
              </li>
              <li className="text mb-4">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+8801874117418"
                  className="text-teal-600 hover:underline"
                >
                  +880 1874-117418
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text">Send Me a Message</h3>
            <p className="mb-8 text-lg text-gray-400 text">
              Fill out the form below, and I{"'"}ll get back to you as soon as
              possible!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
