<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rocket Optimization Animation</title>
    <style>
        body { margin: 0; background: #1a1a1a; }
        canvas { display: block; }
        #info { position: absolute; top: 10px; left: 10px; color: #00ff00; font-family: monospace; }
    </style>
</head>
<body>
    <div id="info">Tank Length: <span id="tankLength">5.00</span> m</div>
    <canvas id="rocketCanvas"></canvas>
    <script>
        const canvas = document.getElementById('rocketCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let tankLength = 50; // Initial length in pixels (scaled from 5m)
        let iteration = 0;

        function drawRocket() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Draw tank (rectangle)
            ctx.fillStyle = '#00ff00';
            ctx.fillRect(canvas.width / 2 - 15, canvas.height / 2 - tankLength / 2, 30, tankLength);
            // Draw nose (triangle)
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2 - 15, canvas.height / 2 - tankLength / 2);
            ctx.lineTo(canvas.width / 2 + 15, canvas.height / 2 - tankLength / 2);
            ctx.lineTo(canvas.width / 2, canvas.height / 2 - tankLength / 2 - 20);
            ctx.fill();
        }

        function animate() {
            requestAnimationFrame(animate);
            if (iteration < 10) {
                iteration += 0.05;
                tankLength = 50 - Math.sin(iteration) * 2; // Simulate optimization
                document.getElementById('tankLength').textContent = (tankLength / 10).toFixed(2);
            }
            drawRocket();
        }
        animate();
    </script>
</body>
</html>