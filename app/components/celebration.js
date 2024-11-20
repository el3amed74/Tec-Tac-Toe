
import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const Celebration = (props) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const myConfetti = confetti.create(canvasRef.current, { resize: true });

            myConfetti({
                particleCount: 200,
                spread: 120,
                shapes: ['circle'],
                scalar: 1.2, 
            });
        }
    }, []);
    return (
        <div className="celebrate-container">
                <span>Hoolla{props.wins} 🎉🎉</span>

            <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 1,width: "100%",height:"100vh"  }}/>
        </div>
    );
};

export default Celebration;
