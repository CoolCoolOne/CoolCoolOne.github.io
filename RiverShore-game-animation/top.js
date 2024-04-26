
const canvasWidth = 1000;
const canvasHight = 500;


function preload() {
  boat = loadImage('./imgs/boat.png');
}




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


let x = 0;
let tree1 = false;

let i = 0;
function draw() {
  let lastSize = 0;
  background(85, 107, 47);

  waves_array[i].position += speed;
  waves_array[i].appear(waves_array[i].position, traject[waves_array[i].position]);
  waves_array[i].numeroWawoo(i, waves_array[i].position, traject[waves_array[i].position]);

  for (let i = 1; i < wave_count; i++) {
    if (waves_array[i - 1].position >= distanceBtvWavs) {
      waves_array[i].appear(waves_array[i].position, traject[waves_array[i].position]);
      waves_array[i].position += speed;
      waves_array[i].numeroWawoo(i, waves_array[i].position, traject[waves_array[i].position]);
    }
    if (waves_array[0].position >= canvasWidth) {
      waves_array.shift();
      onenewWave = new Wave(4, Math.random() * 200, 60, initPosition);
      waves_array.push(onenewWave);
    }

    //trees test

    x += 1;
    stroke('Yellow');
    fill('SaddleBrown');
    rectMode(CENTER);
    rect(500, 450, 10, 40);
    fill(Math.sin(x / 1500) * 250, 128, 0);
    ellipse(500 + Math.sin(x / 200) * 2, 420, 50, 40);

    if (tree1) {
      stroke('Yellow');
      fill('SaddleBrown');
      rectMode(CENTER);
      rect(700, 450, 10, 40);
      fill(Math.sin(x / 1500) * 250, 128, 0);
      ellipse(700 + Math.sin(x / 200) * 2, 420, 50, 40);
    }

    //end trees test


  }

  fill('Yellow');
  textSize(20);
  text(`ускорение времени ×${speed}`, 50, 50);



  // if (x > 6000) {
  let boatCenter = mouseX - 25 + Math.sin(x / 100) * 2;
  image(boat, boatCenter, traject[mouseX], 50, 50);
  for (let everyWave of waves_array) {
    if ((boatCenter >= everyWave.position - everyWave.pixelSize / 2) && (boatCenter <= everyWave.position + everyWave.pixelSize / 2)) {

      // everyWave.boatHere = false;
      everyWave.tide = everyWave.tide + Math.sin(x / 100) * 2;
      everyWave.shade = everyWave.shade + Math.sin(x / 100) * 2;
      everyWave.numeroWawoo('шлюп', everyWave.position - 10, traject[everyWave.position] - 40);
    }
  }
  // }
  // console.log(x);

}



let up_down = true;
function mousePressed() {
  if (up_down) {
    speed++;
  } else {
    speed--;
  }

  if ((speed > 5) || (speed < 2)) {
    up_down = !up_down;
  }


  tree1 = true;



}









