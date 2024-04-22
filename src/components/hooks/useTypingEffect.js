"use client";
import { useEffect, useState } from "react";

const useTypingEffect = (texts, speed) => {
  const [displayText, setDisplayText] = useState('');
  let charIndex = 0;
  let textIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const type = () => {
      const currentText = isDeleting
        ? texts[textIndex].substring(0, charIndex - 1)
        : texts[textIndex].substring(0, charIndex + 1);

      setDisplayText(currentText);

      if (!isDeleting && charIndex === texts[textIndex].length) {
        setTimeout(() => {
          isDeleting = true;
        }, 500); // delay before deleting
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Move to the next text
      }

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      const typingSpeed = isDeleting ? speed / 2 : speed;
      setTimeout(type, typingSpeed);
    };

    setTimeout(type, speed);
  }, []);

  return displayText;
};

export default useTypingEffect;
