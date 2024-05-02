
// used https://thecodingtrain.com/learning/noise/0.4-graphing-1d.html


let inc = 0.01;
let start = 0;

canvasWidth=500;
canvasHight=500;
function setup() {
  createCanvas(canvasWidth, canvasHight);
  frameRate(30);
}
let y=130;
let in_center;

let speed=3;
let counter=0;
let displyed_center;

function draw() {
//  console.log(displyed_center);
  background(in_center-200, 0, in_center-100);
  
//   stroke(128, 128, 0);
  noFill();
  beginShape(QUAD_STRIP);
  let x_offset = start;
  for (let x = 0; x < width; x++) {
    strokeWeight(1);
    stroke(139, 0, 139);
    y = noise(x_offset) * height-100;
    vertex(x, y);
    vertex(x, canvasHight);
    x_offset += inc;
    // console.log(x_offset);
  }
  endShape();
    beginShape(QUAD_STRIP);
  for (let x = 0; x < width; x++) {
    strokeWeight(1);
    stroke(210, 180, 140);
    y = noise(x_offset) * height+100;
    vertex(x, y);
    vertex(x, canvasHight);
    x_offset += inc/speed;
    if (x==canvasWidth/2){
        in_center= y;
    }
    
    
  

  }
  endShape();


  strokeWeight(20);
    stroke(255, 255, 0);
    point (canvasWidth/2, in_center-10);
  
  start += inc;

 
 counter++
 if (counter == 20){
    // displyed_center = 1000000/floor(in_center)-200;
    displyed_center = floor(map(in_center, 550, 100, -100, 1500));
    counter = 0;
 }


  noStroke();
  fill(255, 255, 255);
    textSize(20);
    text(`высота ${floor(displyed_center)} м`, 50, 50);
  
  //noLoop();
}
