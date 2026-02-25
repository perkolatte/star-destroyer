import React, { useCallback, useEffect } from "react";
import "../styles/Space.css";
import Star, { type StarProps } from "./Star";

const Space = () => {
    const [starList, setStarList] = React.useState<StarProps[]>([]);

    const createStar = () => {
        const newStar = {
            id: `star-${Date.now()}`,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 5 + 5,
            brightness: 0.5 + Math.random() * 0.5,
        };
        setStarList((prevStars) => [...prevStars, newStar]);
    };

    const removeStar = useCallback((id: string) => {
        setStarList((starList) => starList.filter((star) => star.id !== id));
    }, []);

    useEffect(() => {
        const interval = setInterval(createStar, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="space"
            style={{ position: "absolute", width: "100%", height: "100%" }}
        >
            {starList.map((star) => (
                <Star
                    key={star.id}
                    {...star}
                    onClick={() => removeStar(star.id)}
                />
            ))}
        </div>
    );
};

export default Space;
