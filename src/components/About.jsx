import Skills from "./Skills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".title", {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: ".title",
          start: "top 90%",
        },
      });
      gsap.from(".description", {
        opacity: 0,
        y: 100,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".description",
          start: "top 90%",
        },
      });

      gsap.from(".image", {
        opacity: 0,
        scale: 0,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".image",
          start: "top 90%",
        },
      });

      gsap.from(".description-2", {
        opacity: 0,
        y: 100,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".description-2",
          start: "top 90%",
        },
      });

      gsap.from(".title-2", {
        opacity: 0,
        y: 100,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".title-2",
          start: "top 90%",
        },
      });

      gsap.from(".skills", {
        opacity: 0,
        scale: 0,
        delay: 0.25,
        scrollTrigger: {
          trigger: ".skills",
          start: "top 90%",
        },
      });

      gsap.from('.btn', {
        opacity: 0,
        x: 150,
        delay: 0.25,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".btn",
          start: "top 95%",
        },
      });
      
    },
    { scope: aboutRef },
  );

  return (
    <section
      ref={aboutRef}
      className="mx-auto min-h-screen max-w-7xl py-8"
      id="about"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-10 text-center">
          <h2 className="title text-4xl font-bold">About Me</h2>
          <p className="description mt-4 text-lg">
            A front-end web developer passionate about crafting modern,
            responsive, and user-friendly web applications.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/about-me.svg"
              alt="Your Profile"
              className="image mx-auto object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <p className="description-2 mb-6 text-justify leading-7 md:text-lg">
              Hi, I{"'"}m <span className="font-bold">Hussain Ahmed</span>. With
              a strong foundation in programming and web development, I
              specialize in building interactive, responsive, and scalable web
              solutions.
            </p>
            <h3 className="title-2 mb-4 text-2xl font-semibold">Skills</h3>
            <div className="relative h-[6.5rem] overflow-hidden skills">
              <Skills />
            </div>

            <div className="mt-10 flex w-full flex-wrap gap-4">
              <div className="flex items-center justify-center btn">
                <a
                  href="#projects"
                  className="rounded-md bg-neutral-950 px-6 py-3 font-semibold text-white shadow ring-neutral-950 transition duration-300 hover:bg-neutral-800 hover:ring-2 md:text-lg"
                >
                  View My Projects
                </a>
              </div>
              <div className="flex items-center justify-center btn">
                <a
                  href="#contact"
                  className="rounded-md bg-teal-950 px-6 py-3 font-semibold text-white shadow ring-teal-950 transition duration-300 hover:bg-teal-800 hover:ring-2 md:text-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
