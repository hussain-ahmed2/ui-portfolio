import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  useGSAP(
    () => {
      gsap.from(formRef.current, { opacity: 0, scale: 0, duration: 0.5, delay: 0.5, scrollTrigger: { trigger: formRef.current, start: "top 90%" } });
    },
    { scope: formRef },
  );

  return (
    <div ref={formRef}>
      {isSubmitted && (
        <div className="mb-4 text-green-500">
          <p>Your message has been sent successfully!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border bg-transparent p-3 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border bg-transparent p-3 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-2 w-full rounded-lg border bg-transparent p-3 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-800"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-teal-800 px-6 py-3 text-white transition duration-300 hover:bg-teal-950 focus:outline-none focus:ring-2 focus:ring-teal-950 active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
