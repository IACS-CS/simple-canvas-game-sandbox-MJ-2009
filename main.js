import "./style.css";

import { GameInterface } from 'simple-canvas-library';

let gi = new GameInterface();
let numberOfSteps = 1; // increment this below

gi.addDrawing(
  function ({ ctx, width, height, elapsed }) {
    ctx.beginPath();
    // Your drawing code here...
    // (see demo.js for fuller example)
 ctx.strokeStyle = 'rgb(0,255,0)';
ctx.lineWidth = 0.5;

/*for (let y = 0; y < height; y += 10) {
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(y, height);
  let rightx = height - y;
  ctx.stroke();
}*/
//animat the doodle above one line at a time
  const step = 10;       // px between lines
  const stepMs = 100;     // ms per new line

  ctx.beginPath();
  ctx.strokeStyle = 'rgb(0,255,0)';
  ctx.lineWidth = 0.5;

  const maxSteps = Math.ceil(height / step);
  // Use the modulo to cycle through the steps
  const current = (elapsed / stepMs) % maxSteps;

  for (let i = 0; i < current; i++) {
    const y = i * step;
    const x = (y / height) * width; // map to canvas width so lines it hits the edges
    ctx.moveTo(0, y);
    ctx.lineTo(x, height);
    //make animation repeat when it reaches the end
    if (x > width) {
      const rightx = width - x;
      ctx.moveTo(rightx, 0);
      ctx.lineTo(width, y);
    }
  }

  ctx.stroke();
  }
);

gi.run();


