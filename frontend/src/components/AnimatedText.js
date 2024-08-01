import React, { useRef, useEffect } from 'react';
import '../css/main.css'; // Make sure to import your CSS file

const AnimatedText = ({ text, type='paragraph', maxLength }) => {
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

    const truncateText = (text, maxLength=200) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const truncatedText = maxLength ? truncateText(text, maxLength) : text;

    return (
        <div className="animate-text" ref={textRef}>
            {type === 'header' ? <h1>{truncatedText}</h1> : <p>{truncatedText}</p>}
        </div>
    );
};

export default AnimatedText;
