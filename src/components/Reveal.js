'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, baseClass = 'reveal', animationClass = 'reveal-up' }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const current = domRef.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${baseClass} ${animationClass} ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
}
