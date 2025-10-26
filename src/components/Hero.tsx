import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with split text effect
      if (textRef.current) {
        const spans = textRef.current.children;
        gsap.fromTo(
          spans,
          { 
            opacity: 0, 
            y: 100,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
          }
        );
      }

      // Description fade in
      if (descRef.current) {
        gsap.fromTo(
          descRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.5,
            ease: "power3.out",
          }
        );
      }

      // Image scale in
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 0.8,
            ease: "elastic.out(1, 0.5)",
          }
        );
      }

      // Parallax effect on scroll
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h1
          ref={textRef}
          className="text-hero font-bold leading-none tracking-tight mb-8"
        >
          <span className="block">ZUNED</span>
          <span className="block">AALIM</span>
        </h1>

        <div ref={descRef} className="max-w-3xl space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Open to job opportunities worldwide. Passionate about building polished,
            intuitive, and thoughtful digital experiences that leave a mark.
          </p>

          <Button
            onClick={scrollToContact}
            variant="outline"
            className="group"
            size="lg"
          >
            CONTACT
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <div className="mt-16 flex items-center gap-8">
          <div 
            ref={imageRef}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold">
              ZA
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-2">
              Available for work
            </div>
            <p className="text-muted-foreground">Jun '25</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
