"use client"
import React, { useEffect, useRef } from 'react';

const BackgroundCircles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const circles = [
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.1,
        radius: 50,
        gradientStartColor: '#FF6700',
        gradientEndColor: '	#FF2400',
      },
      {
        x: canvas.width * 0.1,
        y: canvas.height * 0.1,
        radius: 200,
        gradientStartColor: '#7bed9f',
        gradientEndColor: '#4d4dff',
      },
      {
        x: canvas.width * 1.0,
        y: canvas.height * 0.5,
        radius: 450,
        gradientStartColor: '#2b6cb0',
        gradientEndColor: '#5e60ce',
      },
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.9,
        radius: 150,
        gradientStartColor: '#ffa500',
        gradientEndColor: '#333333',
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.6,
        radius: 150,
        gradientStartColor: '#452c63',
        gradientEndColor: '#DDA0DD',
      },
    ];

    const drawCircles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach((circle) => {
        const gradient = ctx.createLinearGradient(
          circle.x - circle.radius,
          circle.y - circle.radius,
          circle.x + circle.radius,
          circle.y + circle.radius
        );
        gradient.addColorStop(0, circle.gradientStartColor);
        gradient.addColorStop(1, circle.gradientEndColor);
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();
      });
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawCircles();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
};

export default BackgroundCircles;