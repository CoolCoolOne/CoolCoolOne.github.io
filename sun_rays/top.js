let inc = 0.01;
let start = 0;

canvasWidth=500;
canvasHight=300;

let sliderMos;
let sliderPit;
function setup() {
  createCanvas(canvasWidth, canvasHight);
  frameRate(20);

  sliderMos = createSlider(1,5,1,0.1);
  sliderMos.position(350, canvasHight-55);
  sliderMos.size(canvasWidth/4);
  sliderPit = createSlider(1,5,1,0.1);
  sliderPit.position(350, canvasHight-35);
  sliderPit.size(canvasWidth/4);
}

const CenterX = 100;
const CenterY = 100;
let offs = 1;

function draw() {

  let Mos = sliderMos.value();
  let Pit = map(sliderPit.value(),1,5,5,1);

  stroke(255);
  strokeWeight(3);
  canvasHight = 200;
 drawRay(0,0,Mos*20,0,offs,true);
 drawRay(Mos*20,0,130,0,offs+10);
 drawRay(130,0,260,0,offs+20);
 drawRay(260,0,canvasWidth,0,offs+30);
 drawRay(canvasWidth,0,canvasWidth,80,offs+40);
 drawRay(canvasWidth,80,canvasWidth,150,offs+50);
 drawRay(canvasWidth,150,canvasWidth,canvasHight,offs+60);
 drawRay(canvasWidth,canvasHight,canvasWidth-200,canvasHight,offs+70);
 drawRay(canvasWidth-200,canvasHight,40*Pit,canvasHight,offs+80,true);
 drawRay(40*Pit,canvasHight,30,canvasHight,offs+90);
 drawRay(30,canvasHight,0,canvasHight,offs+100);
 drawRay(0,0,0,canvasHight,offs+110);


 fill(255, 165, 0);
 ellipseMode(CENTER);
 ellipse(CenterX,CenterY,50);

 rectMode(CENTER);
 noStroke();
 fill(0);
 textSize(15);
 text('количество материалов с тегом МОСКВА', 20, canvasHight+50);
 text('количество материалов с тегом ПИТЕР', 20, canvasHight+70);
 offs+=0.04;
}

function drawRay(p1x,p1y,p2x,p2y,offs,random=false){
  fill(255, 50+noise(offs)*170, 50+noise(offs)*100);
 if (random){
  fill(255, 215, 0);
 }
  // fill(255, random(50,170), random(0,100));
   triangle(CenterX, CenterY, p1x, p1y, p2x, p2y);
}