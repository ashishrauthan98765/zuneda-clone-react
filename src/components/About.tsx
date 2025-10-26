import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slide and rotate
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { 
            opacity: 0, 
            x: -100,
            rotateY: -25,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 75%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      }

      // Text reveal with stagger
      if (textRef.current) {
        const children = textRef.current.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="About"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="order-2 lg:order-1">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-muted-foreground">
                ZA
              </div>
            </div>
          </div>

          <div ref={textRef} className="order-1 lg:order-2 space-y-6">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              I'm a software engineer driven by a passion for turning ideas into
              clean, intuitive digital experiences.
            </p>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">
              (About Me)
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate Software Engineer with a knack for building
              full-stack web applications using modern technologies like Next.js
              and TailwindCSS. My journey into tech began with a curiosity for
              solving real-world problems through innovative solutions, which
              evolved into a love for crafting user-centric digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I thrive in collaborative environments and enjoy
              tackling challenging problems with creative solutions. I aim to
              contribute to impactful projects that make a difference in users'
              lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
