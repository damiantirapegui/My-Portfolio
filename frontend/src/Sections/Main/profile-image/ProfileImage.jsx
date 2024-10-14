import { useEffect, useRef, useState } from "react"; // Lägg till useState
import "./ProfileImage.css";
import "../../../index.css";

export function ProfileImage() {
  const containerRef = useRef(null);
  const [showImage, setShowImage] = useState(false); // Hantera bildens synlighet

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const headline = entry.target.querySelector(".question-headline");
            headline.classList.add("animate");

            // Efter att animationen är klar, visa bilden
            setTimeout(() => {
              setShowImage(true); // Visa bilden efter att textanimationen är klar
            }, 1000); // Justera tiden om nödvändigt (1 sek = 1000 ms)
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <aside ref={containerRef} id="about">
      <h3 className="question-headline">Who Am I?</h3>
      <div className={`img-container ${showImage ? "show" : ""}`}>
        <img className="img" src="/assets/profile-picture.jpg" alt="" />
      </div>
    </aside>
  );
}
