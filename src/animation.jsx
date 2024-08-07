import React, { useEffect, useRef } from 'react';

export default function HeaderAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const dots = [];
        const numDots = window.innerWidth < 768 ? 80 : 150;
        const dotSize = 2;
        const maxDistance = 100;
        const moveSpeed = 0.5;
        const returnSpeed = 0.02;
        let lastMoveTime = Date.now();

        for (let i = 0; i < numDots; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            dots.push({ x, y, startX: x, startY: y, size: dotSize });
        }

        function draw() {
            context.clearRect(0, 0, width, height);

            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const dx = dots[i].x - dots[j].x;
                    const dy = dots[i].y - dots[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const opacity = Math.max(0, 1 - dist / maxDistance);
                        context.beginPath();
                        context.moveTo(dots[i].x, dots[i].y);
                        context.lineTo(dots[j].x, dots[j].y);
                        context.strokeStyle = `rgba(255, 0, 0, ${opacity})`;
                        context.lineWidth = 1;
                        context.stroke();
                    }
                }
            }

            dots.forEach(dot => {
                context.beginPath();
                context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                context.fillStyle = '#ff0000';
                context.fill();
            });
        }

        function update() {
            const now = Date.now();
            const isMouseIdle = now - lastMoveTime > 100;

            dots.forEach(dot => {
                if (isMouseIdle) {
                    const dx = dot.startX - dot.x;
                    const dy = dot.startY - dot.y;
                    dot.x += dx * returnSpeed;
                    dot.y += dy * returnSpeed;
                }
                dot.x = Math.max(0, Math.min(width, dot.x));
                dot.y = Math.max(0, Math.min(height, dot.y));
            });
        }

        function animate() {
            draw();
            update();
            requestAnimationFrame(animate);
        }

        animate();

        function handleMouseMove(event) {
            lastMoveTime = Date.now();
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            dots.forEach(dot => {
                const dx = mouseX - dot.x;
                const dy = mouseY - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const moveDistance = Math.min(2, dist / 10);

                dot.x += (dx / dist) * moveDistance * moveSpeed;
                dot.y += (dy / dist) * moveDistance * moveSpeed;
            });
        }

        function handleResize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} id="animationCanvas" className='btn-none'></canvas>;
}
