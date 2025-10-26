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
  const categoryRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Category titles animation
      categoryRefs.current.forEach((category) => {
        gsap.fromTo(
          category,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: category,
              start: "top 85%",
            },
          }
        );
      });

      // Skills stagger with wave effect
      skillsRef.current.forEach((skill, index) => {
        gsap.fromTo(
          skill,
          { 
            opacity: 0, 
            scale: 0.5,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skill,
              start: "top 92%",
            },
          }
        );

        // Floating animation on hover
        skill.addEventListener("mouseenter", () => {
          gsap.to(skill, {
            y: -5,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        skill.addEventListener("mouseleave", () => {
          gsap.to(skill, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-section font-bold mb-16">Skills</h2>

        {skillCategories.map((category, catIndex) => (
          <div key={category.title} className="mb-16">
            <h3 
              ref={(el) => {
                if (el) categoryRefs.current[catIndex] = el;
              }}
              className="text-2xl font-bold mb-8 text-muted-foreground"
            >
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
