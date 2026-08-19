import React, { useState, useEffect, useRef } from 'react';
import './TypewriterText.css';

export default function TypewriterText({ text, speed = 32, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setIsTyping(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || isComplete) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedText(text.slice(0, currentIndex));

      if (currentIndex >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [hasStarted, text, speed, isComplete]);

  return (
    <p ref={elementRef} className={`typewriter-subheader ${className}`} aria-label={text}>
      {hasStarted ? displayedText : ''}
      {isTyping && <span className="typewriter-cursor" aria-hidden="true">|</span>}
    </p>
  );
}
