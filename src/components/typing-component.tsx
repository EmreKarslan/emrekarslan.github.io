"use client";

import React, { useState, useEffect } from "react";

interface TypingComponentProps {
  texts: string[];
  typeSpeed?: number;
  backSpeed?: number;
  waitTime?: number; // New prop for waiting time after typing a text
  loop?: boolean;
}

export const TypingComponent = ({
  texts,
  typeSpeed = 50, // Increased typing speed
  backSpeed = 25, // New prop for deleting speed
  waitTime = 2000, // Default wait time of 2 seconds
}: TypingComponentProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    const handleType = () => {
      if (wait) return;

      if (isDeleting) {
        setDisplayedText((prev) => {
          if (prev.length === 0) {
            setIsDeleting(false);
            return "";
          } else {
            return prev.slice(0, -1);
          }
        });
      } else {
        if (displayedText === texts[textIndex]) {
          setWait(true);
          setTimeout(() => {
            setIsDeleting(true);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setWait(false);
          }, waitTime);
        } else {
          setDisplayedText((prev) => prev + texts[textIndex][prev.length]);
        }
      }
    };

    const speed = isDeleting ? backSpeed : typeSpeed;
    const timer = setInterval(handleType, speed);

    return () => clearInterval(timer);
  }, [
    texts,
    displayedText,
    isDeleting,
    textIndex,
    typeSpeed,
    backSpeed,
    wait,
    waitTime,
  ]);

  return (
    <span className="relative">
      <span className="px-4 border-r-4 border-primary text-6xl lg:animate-typing md:block">
        {displayedText}
      </span>
    </span>
  );
};

export default TypingComponent;
