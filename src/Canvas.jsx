import React, { useRef, useEffect, useState } from 'react';
import './Home.css';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    let startX, startY;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.strokeStyle = '#000';
        context.lineWidth = 2;
    }, []);

    const startDrawing = (event) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        startX = event.clientX - rect.left;
        startY = event.clientY - rect.top;
    }

    const stopDrawing = () => {
        setIsDrawing(false);
    }

    const draw = (event) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(x, y);
        context.stroke();

        startX = x;
        startY = y;
    }

    return (
        <canvas
            ref={canvasRef}
            className="canvas"
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
        />
    );
}

export default Canvas;