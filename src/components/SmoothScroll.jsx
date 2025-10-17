import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Smooth scroll configuration
    gsap.config({
      force3D: true,
    });

    // Add custom cursor follow effect
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: hsl(var(--primary));
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.2s ease;
    `;
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 5,
        y: e.clientY - 5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
