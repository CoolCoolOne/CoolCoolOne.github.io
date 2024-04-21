
const canvasWidth = 1000;
const canvasHight = 500;


function setup() {
  createCanvas(canvasWidth, canvasHight);
  frameRate(50);
}


let wave_count = 22;
let waves_array = [];
let onenewWave;
const initPosition = 0;
const distanceBtvWavs = 50;

let speed = 1;

for (let i = 0; i < wave_count; i++) {
  onenewWave = new Wave(4, Math.random() * 200, 60, initPosition);
  waves_array.push(onenewWave);
}
let traject = waves_array[0].presetTrajectory(canvasHight, canvasWidth);


let i = 0;
function draw() {
  let lastSize = 0;
  background(85, 107, 47);

  waves_array[i].position += speed;
  waves_array[i].appear(waves_array[i].position, traject[waves_array[i].position]);
  waves_array[i].numeroWawoo(i,waves_array[i].position, traject[waves_array[i].position]);

  for (let i = 1; i < wave_count; i++) {
    if (waves_array[i-1].position >= distanceBtvWavs) {
      waves_array[i].appear(waves_array[i].position, traject[waves_array[i].position]);
      waves_array[i].position += speed;
      waves_array[i].numeroWawoo(i,waves_array[i].position, traject[waves_array[i].position]);
    }
    if (waves_array[0].position >= canvasWidth) {
      waves_array.shift();
      onenewWave = new Wave(4, Math.random() * 200, 60, initPosition);
      waves_array.push(onenewWave);
    }
  }

  fill('Yellow');
  textSize(20);
  text(`ускорение времени ×${speed}`, 50, 50);
}

let up_down = true;
function mousePressed() {
  if (up_down) {
    speed++;
  } else {
    speed--;
  }
  
  if ((speed > 5) || (speed < 2)) {
    up_down =! up_down;
  }
}









