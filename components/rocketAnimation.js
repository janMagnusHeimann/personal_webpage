import { useRef, useEffect, useState } from 'react';

const width = 600;
const height = 400;
const xMin = 0;
const xMax = 6;
const yMin = 0;
const yMax = 4;
// Simple quadratic cost function with minimum at (3, 2)
const costFunction = (x, y) => (x - 3) ** 2 + (y - 2) ** 2;

// Performs one iteration of the Nelder-Mead algorithm
const nelderMeadStep = (points) => {
  // Evaluate cost at each point
  const values = points.map(p => costFunction(...p));
  // Sort points from best (lowest cost) to worst (highest cost)
  const indices = [0, 1, 2].sort((a, b) => values[a] - values[b]);
  const sortedPoints = indices.map(i => points[i]);
  const [x0, x1, x2] = sortedPoints; // x0: best, x2: worst
  // Centroid of the two best points
  const c = [(x0[0] + x1[0]) / 2, (x0[1] + x1[1]) / 2];
  // Reflect the worst point
  const xr = [c[0] + (c[0] - x2[0]), c[1] + (c[1] - x2[1])];
  const fr = costFunction(...xr);

  if (fr < values[indices[0]]) {
    // Expansion if reflected point is better than the best
    const xe = [c[0] + 2 * (xr[0] - c[0]), c[1] + 2 * (xr[1] - c[1])];
    const fe = costFunction(...xe);
    points[indices[2]] = fe < fr ? xe : xr;
  } else if (fr < values[indices[1]]) {
    // Accept reflection if better than second-best
    points[indices[2]] = xr;
  } else {
    let contracted = false;
    if (fr < values[indices[2]]) {
      // Outside contraction
      const xc = [c[0] + 0.5 * (xr[0] - c[0]), c[1] + 0.5 * (xr[1] - c[1])];
      const fc = costFunction(...xc);
      if (fc < fr) {
        points[indices[2]] = xc;
        contracted = true;
      }
    } else {
      // Inside contraction
      const xc = [c[0] - 0.5 * (c[0] - x2[0]), c[1] - 0.5 * (c[1] - x2[1])];
      const fc = costFunction(...xc);
      if (fc < values[indices[2]]) {
        points[indices[2]] = xc;
        contracted = true;
      }
    }
    if (!contracted) {
      // Shrink if contraction fails
      points[indices[1]] = [x0[0] + 0.5 * (x1[0] - x0[0]), x0[1] + 0.5 * (x1[1] - x0[1])];
      points[indices[2]] = [x0[0] + 0.5 * (x2[0] - x0[0]), x0[1] + 0.5 * (x2[1] - x0[1])];
    }
  }
  return points;
};

const RocketAnimation = () => {
  const canvasRef = useRef(null);
  const initialSimplex = [[1, 1], [2, 1], [1, 2]]; // Initial triangle
  const [simplex, setSimplex] = useState(initialSimplex);
  const [running, setRunning] = useState(false);

  // Draw the cost function color map on the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(width, height);

    // Find min and max cost values for normalization
    let minF = Infinity, maxF = -Infinity;
    for (let px = 0; px < width; px++) {
      for (let py = 0; py < height; py++) {
        const x = xMin + (px / width) * (xMax - xMin);
        const y = yMin + (py / height) * (yMax - yMin);
        const f = costFunction(x, y);
        minF = Math.min(minF, f);
        maxF = Math.max(maxF, f);
      }
    }

    // Assign colors to each pixel based on cost
    for (let px = 0; px < width; px++) {
      for (let py = 0; py < height; py++) {
        const x = xMin + (px / width) * (xMax - xMin);
        const y = yMin + (py / height) * (yMax - yMin);
        const f = costFunction(x, y);
        const normalized = (f - minF) / (maxF - minF);
        const r = Math.floor(255 * normalized); // Red for high cost
        const g = 0;
        const b = Math.floor(255 * (1 - normalized)); // Blue for low cost
        const index = (py * width + px) * 4;
        imageData.data[index] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
        imageData.data[index + 3] = 255; // Full opacity
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  // Animate the simplex when running
  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setSimplex(prev => nelderMeadStep([...prev]));
      }, 1000); // Update every 1 second
      return () => clearInterval(interval);
    }
  }, [running]);

  // Map design space coordinates to pixel coordinates
  const mapToPixel = (x, y) => {
    const px = (x - xMin) / (xMax - xMin) * width;
    const py = height - (y - yMin) / (yMax - yMin) * height; // Invert y-axis
    return [px, py];
  };

  // Reset the simulation to initial state
  const reset = () => {
    setSimplex(initialSimplex);
    setRunning(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Canvas for cost function background */}
      <canvas ref={canvasRef} width={width} height={height} />
      {/* SVG for simplex overlay */}
      <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0 }}>
        <polygon
          points={simplex.map(p => mapToPixel(...p).join(',')).join(' ')}
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        {simplex.map((p, i) => {
          const [px, py] = mapToPixel(...p);
          return <circle key={i} cx={px} cy={py} r={5} fill="red" />;
        })}
      </svg>
      {/* Control buttons */}
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => setRunning(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RocketAnimation;