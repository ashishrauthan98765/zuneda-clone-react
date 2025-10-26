import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);
  const bottomTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with clip path
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { 
            opacity: 0, 
            clipPath: "inset(0 100% 0 0)",
          },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Projects stagger animation
      projectsRef.current.forEach((project, index) => {
        gsap.fromTo(
          project,
          {
            opacity: 0,
            scale: 0.8,
            rotateZ: -5,
          },
          {
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 85%",
            },
          }
        );
      });

      // Bottom text scroll animation
      if (bottomTextRef.current) {
        gsap.fromTo(
          bottomTextRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomTextRef.current,
              start: "top 90%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Works"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 ref={titleRef} className="text-section font-bold mb-4">
            SELECTED WORKS/
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            (PROJECTS)
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-4xl">
            Thoughtfully crafted digital experiences that blend utility and
            aesthetics into something functional, memorable, and refined.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((num, index) => (
            <div
              key={num}
              ref={(el) => {
                if (el) projectsRef.current[index] = el;
              }}
              className="aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer relative"
            >
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-muted-foreground group-hover:scale-110 transition-transform duration-500">
                {num}
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div ref={bottomTextRef} className="mt-20 text-center overflow-hidden">
          <h3 className="text-4xl md:text-6xl font-bold">
            DEVELOPER DESIGNER CREATOR/
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
