import React, { useRef, useEffect } from 'react';
import '../css/main.css'; // Make sure to import your CSS file

const AnimatedText = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Unobserve after it becomes visible
                    }
                });
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <div className="animate-text" ref={textRef}>
            {text}
        </div>
    );
};

export default AnimatedText;
