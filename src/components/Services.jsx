import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Full-Stack Development",
    description:
      "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
    skills: [
      "React, Node.js, Express.js",
      "REST APIs, Firebase, Docker",
      "Git, GitHub, Postman",
    ],
  },
  {
    number: "02",
    title: "UI/UX & Frontend",
    description:
      "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
    skills: [
      "NextJs, TailwindCSS, GSAP",
      "Figma to Code",
      "HTML, CSS, JavaScript",
    ],
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
    skills: [
      "Data Structures & Algorithms",
      "DBMS, OOP, OS Fundamentals",
      "Data Pipelines, ETL, and Scalability",
    ],
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.children,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Cards animation with rotation and scale
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 100,
            rotateY: -15,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Services"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <h2 className="text-section font-bold mb-4">What I Do/</h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            (Services)
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-4xl">
            I specialize in building full-stack web applications that are fast,
            reliable, and user-friendly. With a solid foundation in both frontend
            and backend technologies, I help bring ideas to life whether it's for a
            business, a startup, or a product team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="border border-border rounded-lg p-8 hover:border-primary transition-colors duration-300"
            >
              <div className="text-muted-foreground text-sm mb-4">
                ({service.number})
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="mr-2 text-primary">0{idx + 1}</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
