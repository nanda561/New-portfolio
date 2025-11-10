import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px,${mouseY}px)`;
    };

    document.addEventListener("mousemove", moveMouse);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px,${ringY}px)`;
      requestAnimationFrame(animate);
    };
    animate();

    return () => document.removeEventListener("mousemove", moveMouse);
  }, []);

  return createPortal(
    <>
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>
    </>,
    document.body
  );
}
