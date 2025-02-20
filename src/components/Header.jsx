import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const [acitveLinkId, setActiveLinkId] = useState("");

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from('.navbar', {
        opacity: 0,
        y: -100,
        scaleX: 0.5,
        duration: 1,
        ease: "back",
        delay: 0.5,
      }).from('.nav-link', {
        opacity: 0,
        y: (index) => index%2 === 0 ? -100 : 100,
        stagger: 0.1,
        ease: "back",
      });
      
    },
    { scope: headerRef },
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveLinkId(id);
          }
        });
      },
      {
        threshold: 0.25,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="fixed z-50 w-full top-0 left-0 right-0">
      <nav className="navbar mx-auto mt-2 flex gap-px w-fit justify-center overflow-hidden rounded-lg border bg-neutral-950 p-1">
        <a
          className={`nav-link rounded px-4 py-2 font-medium transition-colors duration-300 active:bg-neutral-800 md:hover:bg-neutral-800 ${acitveLinkId === "home" ? "bg-neutral-900" : ""}`}
          href="#"
        >
          Home
        </a>
        <a
          className={`nav-link rounded px-4 py-2 font-medium transition-colors duration-300 active:bg-neutral-800 md:hover:bg-neutral-800 ${acitveLinkId === "about" ? "bg-neutral-900" : ""}`}
          href="#about"
        >
          About
        </a>
        <a
          className={`nav-link rounded px-4 py-2 font-medium transition-colors duration-300 active:bg-neutral-800 md:hover:bg-neutral-800 ${acitveLinkId === "projects" ? "bg-neutral-900" : ""}`}
          href="#projects"
        >
          Projects
        </a>
        <a
          className={`nav-link rounded px-4 py-2 font-medium transition-colors duration-300 active:bg-neutral-800 md:hover:bg-neutral-800 ${acitveLinkId === "contact" ? "bg-neutral-900" : ""}`}
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
export default Header;
