
let r, g, b;
let x, y;
let timeSpended = 0;

orig_bird_width = 400;
orig_bird_higth = 350;

function drawBirds(Xcoord,Ycoord){

  //массив птиц  с местами обитания
  // жоский костыль
  const arrBirds = [];
  arrBirds[0] = {
    xPos: 650, yPos: 365,
    name: bird01
}
arrBirds[1] = {
  xPos: 150, yPos: 390,
  name: bird02
}
arrBirds[2] = {
  xPos: 710, yPos: 550,
  name: bird03
}
arrBirds[3] = {
  xPos: 80, yPos: 714,
  name: bird04
}
arrBirds[4] = {
  xPos: 300, yPos: 298,
  name: bird05
}
arrBirds[5] = {
  xPos: 490, yPos: 145,
  name: bird06
}
  // конец массива птиц

  for (let bird_num = 0; bird_num <= 5; bird_num++) { 
    if ((Xcoord <= arrBirds[bird_num].xPos+50) && (Xcoord >= arrBirds[bird_num].xPos-50) && (Ycoord >= arrBirds[bird_num].yPos-50) && (Ycoord <= arrBirds[bird_num].yPos+50)) {
      image(arrBirds[bird_num].name, arrBirds[bird_num].xPos, arrBirds[bird_num].yPos, 40, 30, 0, 0, orig_bird_width, orig_bird_higth, CONTAIN);
      // arrBirds[bird_num].detected = true;
      // console.log (arrBirds[bird_num].detected);
      return someoneDetected = true;
    };
  }
  bird_num = 0;

}

function preload() {
    font = loadFont('./Alice-Regular.otf');
    img = loadImage('./imgs/spilliart_transparrent.png');
    bird01 = loadImage('./imgs/duatel.png');
    bird02 = loadImage('./imgs/happy_one.png');
    bird03 = loadImage('./imgs/sinitsa.png');
    bird04 = loadImage('./imgs/soroca.png');
    bird05 = loadImage('./imgs/voroba.png');
    bird06 = loadImage('./imgs/winter_bird.png');
  }

function setup() {
  textFont(font);
    createCanvas(1000, 800);
    // Draw the image.
    background(277, 224, 208);
    r= random(0, 200);
    g= random(0, 200);
    b= random(0, 200);
    // image(img, 0, 0, width, height, 0, 0, 1200, 848, COVER);
    textSize(32);
  }
  
  function draw() {
    // background(277, 224, 208);
    r= random(0, 200);
    g= random(100, 200);
    b= random(200, 200);
    x= random(0, 1200);
    y= random(0, 848);

    let allIsDetected = false;

    // noFill()
    // stroke(7);
    // circle(mouseX,mouseY,100);
    // console.log(mouseX);
    // console.log(allIsDetected);
    
    noStroke();

    timeSpended++;
    if (timeSpended < 1000) {
      fill (r, g, b, 20);
      circle (x, y, 120);
      image(img, 0, 0, width, height, 0, 0, 1200, 848, COVER);
      someoneDetected = drawBirds(mouseX,mouseY);
    } else if (timeSpended < 1500) {
      fill (165, 42, 42, 20);
      circle (x, y, 140);
      image(img, 0, 0, width, height, 0, 0, 1200, 848, COVER);
      someoneDetected = drawBirds(mouseX,mouseY);
    } else if (timeSpended < 2000) {
      fill (0, 0, 0, 10);
      circle (x, y, 350);
      someoneDetected = drawBirds(mouseX,mouseY);
    } else {
      fill (102, 205, 170);
      someoneDetected = false;
      textSize(42);
      stroke(255);
      strokeWeight(50, 50, 50);
      text('Стемнело!', 150, 160, 400,400);
    }
    if (someoneDetected){
      // stroke(7);
      fill (255, 215, 0, 60);
      circle (mouseX, mouseY, 60);
      // fill (0, 100, 0,80);
      fill (255, 69, 0);
      // rotateY(frameCount / 30);
      textSize(32);
      stroke(255);
      strokeWeight(50, 50, 50);
      text('нашёл птаху!', 50, 70, 400,400);
    }

    // if(allIsDetected){
    // alert('Все птицы найдены! Теперь следуй в другие картины...')
    // }

  }

  
