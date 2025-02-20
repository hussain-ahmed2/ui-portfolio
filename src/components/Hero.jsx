import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Spotlight from "./Spotlight";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .from(".hero-image", {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "back",
          delay: 0.5,
        })
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 100,
            duration: 0.5,
            ease: "power1.out",
            stagger: 0.2,
          },
          "<0.5",
        )
        .from(".hero-button", {
          x: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.2,
        });
    },
    { scope: heroRef },
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center overflow-hidden pb-8 pt-16 md:flex-row"
    >
      <div className="fixed w-full h-full z-0">
        <Spotlight />
      </div>
      <div className="md:w-1/2">
        <img
          className="hero-image mx-auto w-full max-w-72 rounded-full bg-stone-800 md:max-w-96"
          src="profile-pic.svg"
          alt="profile-picture"
        />
      </div>
      <div className="flex flex-col px-6 pt-8 max-md:text-center md:w-1/2 md:py-20">
        <h1 className="hero-text mb-4 text-3xl font-bold md:text-5xl">
          Hi, I{"'"}m <span className="text-teal-900">Hussain</span> Ahmed
        </h1>
        <p className="hero-text mb-6 me-auto max-w-2xl text-justify md:mb-8 md:text-lg">
          A <span className="text-teal-900">Front-End Web Developer</span>{" "}
          creating seamless digital experiences.
        </p>
        <div className="flex flex-wrap gap-4 max-md:justify-center">
          <div className="hero-button">
            <a
              href="/resume.pdf"
              download="Hussain_Ahmed_CV.pdf"
              className="rounded-md bg-teal-950 px-6 py-3 text-white shadow-md transition duration-300 hover:bg-teal-800 hover:ring-2 hover:ring-teal-950"
            >
              Download CV
            </a>
          </div>
          <div className="hero-button">
            <a
              href="#contact"
              className="rounded-md bg-neutral-950 px-6 py-3 text-white shadow-md transition duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-950"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
