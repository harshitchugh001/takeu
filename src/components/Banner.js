import React, { useState, useEffect } from 'react';


export default function Banner({ description, link, timer, isVisible }) {
    const [timeLeft, setTimeLeft] = useState(timer);

    useEffect(() => {
        
        setTimeLeft(timer);
    }, [timer, isVisible]);

    useEffect(() => {
        
        if (!isVisible || timeLeft <= 0) {
            return;
        }

        
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        
        return () => clearInterval(intervalId);
    }, [timeLeft, isVisible]);


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return isVisible && timeLeft > 0 ? (
        <div className="banner bg-blue-500 text-white p-4 mb-4 rounded-md shadow-md">
            <p className="text-lg font-semibold">{description}</p>
            <p className="mt-2">Time left: <span className="font-mono">{formatTime(timeLeft)}</span></p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-yellow-300 hover:underline"
                >
                    Learn more
                </a>
            )}
        </div>
    ) : null;
}
