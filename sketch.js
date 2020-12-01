var sc, mn, hr, scAngle, mnAngle, hrAngle;


function setup() {
  createCanvas(1000,600);

  angleMode(DEGREES)

  
}

function draw() {
  background('black');  

  fill('white');
  text('12',495,120);
  text('1',590,153);
  text('2',654,214);
  text('3',670,300);
  text('4',645,394);
  text('5',587,450);
  text('6',495,480);
  text('7',406,454);
  text('8',348,389);
  text('9',325,301);
  text('10',349,210);
  text('11',406,140);



  translate(500,300);
  rotate(-90)
  
  sc = second();
  mn = minute();
  hr = hour();
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);  

  strokeWeight(8);
  stroke("red");
  noFill();
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  strokeWeight(8);
  stroke("green");
  noFill();
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,270,270,0,mnAngle);

  strokeWeight(8);
  stroke("blue");
  noFill();
  hrAngle = map(hr,0,60,0,360);
  arc(0,0,240,240,0,hrAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke('green');
  strokeWeight(7);
  line(0,0,70,0);
  pop();
  
  push();  
  rotate(hrAngle);
  stroke('blue');
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  drawSprites();

  console.log('x: '+mouseX)
  console.log('y: '+mouseY)
  
  
}