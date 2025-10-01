import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages & Tools",
    items: [
      "Python",
      "SQL",
      "C++",
      "Java",
      "TypeScript",
      "JavaScript",
      "Git",
      "Postman",
      "Docker",
      "Firebase",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js",
      "Express.js",
      "Flask",
      "Bootstrap",
      "jQuery",
      "TailwindCSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Core CS Concepts",
    items: [
      "DSA",
      "DBMS",
      "OOP",
      "Operating Systems",
      "System Design",
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    skillsRef.current.forEach((skill) => {
      gsap.fromTo(
        skill,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: skill,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-section font-bold mb-16">Skills</h2>

        {skillCategories.map((category, catIndex) => (
          <div key={category.title} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.items.map((skill, index) => {
                const globalIndex = catIndex * 20 + index;
                return (
                  <div
                    key={skill}
                    ref={(el) => {
                      if (el) skillsRef.current[globalIndex] = el;
                    }}
                    className="px-6 py-3 bg-secondary rounded-full text-sm font-medium hover:bg-accent transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
