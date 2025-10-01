import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }
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
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer relative"
            >
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-muted-foreground group-hover:scale-110 transition-transform duration-500">
                {num}
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-4xl md:text-6xl font-bold">
            DEVELOPER DESIGNER CREATOR/
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;
