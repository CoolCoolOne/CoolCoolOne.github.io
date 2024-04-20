
const canvasWidth = 1000;
const canvasHight = 500;
let x = 0;


function setup() {
  createCanvas(canvasWidth, canvasHight);
  frameRate(70);
}


let wave_count = 100;
let waves_array = [];
let waves_array_position = [];
// let waves_array = [];
let onenewWave;
const initPosition = 0;
let currPosition = 0;
for (let i = 0; i < wave_count; i++) {
  onenewWave = new Wave(4, Math.random() * 200, 60, initPosition);
  waves_array.push(onenewWave);
  waves_array_position.push(initPosition);
}
let traject = waves_array[0].presetTrajectory(canvasHight, canvasWidth);

console.log(waves_array_position[0]);

console.log()

let i = 0;
function draw() {
  let lastSize = 0;
  background(85, 107 + Math.sin(currPosition / 50) * 10, 47);


  // waves_array_position[0] += 1;
  // waves_array[0].appear(waves_array_position[0], traject[waves_array_position[0]]);

  // if (waves_array_position[0] >= 50) {
  //   waves_array[1].appear(waves_array_position[1], traject[waves_array_position[1]]);
  //   waves_array_position[1] += 1;
  // }
  // if (waves_array_position[1] >= 50) {
  //   waves_array[2].appear(waves_array_position[2], traject[waves_array_position[2]]);
  //   waves_array_position[2] += 1;
  // }

  waves_array_position[0] += 1;
  waves_array[0].appear(waves_array_position[0], traject[waves_array_position[0]]);
  for (let i = 1; i < wave_count; i++) {
    if (waves_array_position[i - 1] >= 50) {
      waves_array[i].appear(waves_array_position[i], traject[waves_array_position[i]]);
      waves_array_position[i] += 1;
    }
    if (waves_array_position[i] >= canvasWidth) {
      waves_array_position[i] = 0;
      waves_array.pop();
      onenewWave = new Wave(4, Math.random() * 200, 60, initPosition);
      waves_array.push(onenewWave);

      waves_array_position.pop();
      waves_array_position[i] = 0;
      waves_array_position.push(onenewWave);
    }
  }


  // console.log(timer)
  // for (let i = 0; i < wave_count; i++) {
  //   if (waves_array_position[i] >= canvasWidth) {
  //     waves_array.pop();
  //     onenewWave = new Wave(4, Math.random() * 200, 60, initPosition);
  //     waves_array.push(onenewWave);

  //     waves_array_position.pop();
  //     waves_array_position[i] = 0;
  //     waves_array_position.push(onenewWave);
  //   }
  // }



  //   for (let i = 0; i < waves_array.length; i++) {
  //     // currPosition = waves_array[i].TellPosition();
  //     if (waves_array_position[i] < canvasWidth) {
  //       waves_array[i].appear(waves_array_position[i], traject[waves_array_position[i] + Math.round(lastSize)] + 150);
  //       lastSize = lastSize + waves_array[i].TellSize();
  //       waves_array_position[i] = waves_array_position[i] + 7;
  //     }
  //     if (waves_array_position[i] > canvasWidth) {
  //       for (let i = 0; i < wave_count; i++) {
  //         waves_array.pop();
  //         onenewWave = new Wave(1 + Math.random() * 5, Math.random() * 200, 60, initPosition + lastSize);
  //         waves_array.push(onenewWave);

  //         waves_array_position.pop();
  //         waves_array_position[i] = 0;
  //         waves_array_position.push(onenewWave);
  //       }
  //     }
  // }

  // print(round(waves_array_position[9]));



  // x = x + 7;
  // if (x > canvasWidth) {
  //   x = -100;
  //   for (let i = 0; i < wave_count; i++) {
  //     waves_array.pop();
  //     onenewWave = new Wave(1 + Math.random() * 5, Math.random() * 200, 60, initPosition);
  //     waves_array.push(onenewWave);
  //   }
  // }
}









