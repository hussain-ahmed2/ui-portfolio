import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { skills } from "../data/skills";

const Skills = () => {
  const listRef = useRef(null);

  useGSAP(() => {
    gsap.to(listRef.current, { right: 0, duration: 10, ease: "none", repeat: -1, yoyo: true, repeatDelay: 0.5 });
  }, {scope: listRef});

  return (
    <ul ref={listRef} className="inline-flex absolute top-0 items-center gap-4">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="flex basis-20 w-20 items-center flex-col gap-1 p-1 rounded border bg-stone-800 text-[0.65rem]"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="aspect-square w-full"
          />
          {skill.name}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
