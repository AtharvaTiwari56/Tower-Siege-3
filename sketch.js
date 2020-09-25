const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world, score, bg, bg1;
var ground, box1, stand, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, polygon, polygonimg, slingshot;

function preload() {
  polygonimg = loadImage("polygon.png");
  time();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 393, 800, 14);
  stand = new Ground(550, 250, 200, 15);
  box1 = new Box(550, 225, 40, 40);
  box2 = new Box(510, 225, 40, 40);
  box4 = new Box(590, 225, 40, 40);
  box5 = new Box(630, 225, 40, 40);
  box3 = new Box(470, 225, 40, 40);
  box6 = new Box(490, 185, 40, 40);
  box7 = new Box(530, 185, 40, 40);
  box8 = new Box(570, 185, 40, 40);
  box9 = new Box(610, 185, 40, 40);
  box10 = new Box(510, 145, 40, 40);
  box11 = new Box(550, 145, 40, 40);
  box12 = new Box(590, 145, 40, 40);
  box13 = new Box(530, 105, 40, 40);
  box14 = new Box(570, 105, 40, 40);
  box15 = new Box(550, 65, 40, 40);
  
  score = 0;

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  
  slingshot = new  Sling(polygon, {x: 225, y: 150});
  
  Engine.run(engine);
}

function draw() {
  
  if(bg1) {
    background(bg1);  
  }
  textSize(25);
  fill("Blue");
  stroke("Blue")
  text("Press Space to Launch Again", 350, 30);
  Engine.update(engine);

  imageMode(CENTER);
  image(polygonimg, polygon.position.x, polygon.position.y, 40, 40);

  ground.display();
  stand.display();

  stroke("white");
  fill("fuchsia");
  textSize(20);
  text("SCORE: " + score, 50, 40);
  fill("pink");
  box2.display();
  box2.score();
  box1.display();
  box1.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();

  fill("blue");
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();

  fill("gray");
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();

  fill("green");
  box13.display();
  box13.score();
  box14.display();
  box14.score();

  fill("yellow");
  box15.display();
  box15.score();

  slingshot.display();
  
    
  
}
function mouseDragged() {
  Body.setPosition(polygon, {x: mouseX, y: mouseY});
}
function mouseReleased() {
  slingshot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Body.setPosition(polygon, {x: 225, y: 150});
    slingshot.attach(polygon);
  }
}

async function time() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var JSONresponse = await response.json();
  var datetime = JSONresponse.datetime;
  var hour = datetime.slice(11, 13);
  if (hour > 06 && hour < 19) {
    bg = "Untitled.png";
  } else {
    bg = "NIGHT.png";
  }
  bg1 = loadImage(bg);
}
