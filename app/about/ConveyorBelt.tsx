'use client'
import React, { useEffect, useRef } from 'react';

const ConveyorAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const conveyorImage = new Image();
    const burgerImage = new Image();

    conveyorImage.src = '/conveyorFull.gif';
    burgerImage.src = '/burger-menu-icon.png';

    const conveyorWidth = 200; // Adjust based on your conveyor image width
    const conveyorHeight = 40; // Adjust based on your conveyor image height
    const burgerWidth = 32; // Adjust based on your burger image width
    const burgerHeight = 32; // Adjust based on your burger image height
    const numBurgers = 5;
    const speed = 1; // Speed of the animation

    let xPos = 0;

    const draw = () => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw conveyor belt
      context.drawImage(conveyorImage, 0, 0, conveyorWidth, conveyorHeight);

      // Draw burgers
      for (let i = 0; i < numBurgers; i++) {
        context.drawImage(burgerImage, (xPos + i * (burgerWidth + 10)) % canvas.width, 4, burgerWidth, burgerHeight);
      }

      xPos -= speed;
      requestAnimationFrame(draw);
    };

    conveyorImage.onload = () => {
      burgerImage.onload = () => {
        canvas.width = conveyorWidth;
        canvas.height = conveyorHeight;
        draw();
      };
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <canvas ref={canvasRef} className="border border-black"></canvas>
    </div>
  );
};

export default ConveyorAnimation;
