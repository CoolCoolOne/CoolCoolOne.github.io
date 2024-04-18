// ты можешь использовать этот appear
// только внутри метода p5js draw()
// потому что методы вложенных функций
// используют функции определённые только
// в упомянутом методе draw()
class Wave {
  constructor(size, shade, tide) {
    this.shade = shade;
    this.pixelSize = 10 * size + Math.random() * size * 5;//волна непредсказуема по масштабу!
    this.tide = tide;
  }
  appear(position, center) {
    noStroke();
    fill(50+ this.shade/5, 50+ this.shade, 120 + this.shade)
    rect(position, center, this.pixelSize, 100 + this.tide, 5);
  }
  TellSize() {
    return this.pixelSize;
  }
  presetTrajectory(curvature, lenght) {
    let traject = [];
    // widthOfCanvas == lenght
    // curvature is from 0 to 2
    if (curvature == 0) {
      for (let i = 0; i < lenght; i++) {
        traject[i] = 0;
      }
    } else if (curvature == 1) {
      for (let i = 0; i < lenght; i++) {
        traject[i] = Math.sin(i / 10) * 10;
      }
    }
    else if (curvature == 2) {
      for (let i = 0; i < lenght; i++) {
        traject[i] = Math.sin(i / 60) * 40;
      }
    } else {
      alert('need param from 0 to 2 in presetTrajectory')
    }
    return traject;
  }

}

const canvasWidth = 800;
let x = -50;


function setup() {
  createCanvas(canvasWidth, 500);
  frameRate(10);
}

// let wave0 = new Wave(random(1,5),random(10,120),random(0,20));

let wave0 = new Wave(1+Math.random() * 5, Math.random() * 200, 60);
let traject0 = wave0.presetTrajectory(2, canvasWidth);
let wave1 = new Wave(1+Math.random() * 5, Math.random() * 100, 60);
let traject1 = wave1.presetTrajectory(2, canvasWidth);
let wave2 = new Wave(1+Math.random() * 5, Math.random() * 100, 60);
let traject2 = wave2.presetTrajectory(2, canvasWidth);
let wave3 = new Wave(1+Math.random() * 5, Math.random() * 100, 60);
let traject3 = wave3.presetTrajectory(2, canvasWidth);

function draw() {
  let lastSize = 0;
  background(85, 107+Math.sin(x/50)*10, 47);
  wave0.appear(x, traject0[x] + 150);
  lastSize = wave0.TellSize()
  wave1.appear(x+lastSize, traject0[x+Math.round(lastSize)] + 150);
  // lastSize2 = wave1.TellSize()
  lastSize = lastSize+wave1.TellSize();
  wave2.appear(x+lastSize, traject0[x+Math.round(lastSize)] + 150);
  lastSize = lastSize+wave2.TellSize();
  wave3.appear(x+lastSize, traject0[x+Math.round(lastSize)] + 150);
  x = x + 7;
  if (x > canvasWidth) {
    x = -50;
    wave0 = new Wave(1+Math.random() * 5, Math.random() * 100, 60);
    traject0 = wave0.presetTrajectory(2, canvasWidth);
    wave1 = new Wave(1+Math.random() * 5, Math.random() * 100, 60);
    traject1 = wave1.presetTrajectory(2, canvasWidth);
    wave2 = new Wave(1+Math.random() * 5, Math.random() * 100, 60);
    traject2 = wave2.presetTrajectory(2, canvasWidth);
    wave3 = new Wave(1+Math.random() * 5, Math.random() * 100, 60);
    traject3 = wave3.presetTrajectory(2, canvasWidth);
  }
}









