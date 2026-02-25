import React from "react";
import "../styles/Star.css";

export interface StarProps {
    id: string;
    x: number;
    y: number;
    size: number;
    brightness: number;
    onClick?: () => void;
}

const Star: React.FC<StarProps> = ({
    id,
    x,
    y,
    size = 10,
    brightness = 1,
    onClick,
}) => {
    const style: React.CSSProperties = {
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `rgba(255, 255, 255, ${brightness})`,
    };

    return <div className="star" style={style} onClick={onClick} id={id}></div>;
};

export default Star;
