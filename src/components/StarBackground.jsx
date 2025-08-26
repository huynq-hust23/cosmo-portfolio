import { useEffect, useState } from "react"

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, duration


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerHeight * window.innerWidth / 10000);

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push(
                {
                    id: i,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2
                }
            )
        };
        setStars(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4;

        const newMetors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMetors.push(
                {
                    id: i,
                    size: Math.random() * 1.5 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 20,
                    delay: Math.random() * 15,
                    animationDuration: Math.random() * 3 + 3
                }
            )
        };

        setMeteors(newMetors);
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle position-absolute"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        translate: `${star.x}vw ${star.y}vh`,
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}></div>
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor position-absolute"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size + "px",
                        translate: `${meteor.x}vw ${meteor.y}vh`,
                        animationDelay: (-1 * meteor.delay) + "s",
                        animationDuration: meteor.animationDuration + "s",
                    }}></div>
            ))}
        </div>
    )
}