const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backg1;
var ground;

var player;
var forestNight;
var painting;

var skill1;
var skill2;
var skill3;
var skill4;
var skill5;
var fire;
var fireSkill;

function preload(){
  backg1 = loadImage("Photos/back1.jpg");
  forestNight = loadImage("Photos/backNight.JPG");
  painting = loadImage("Photos/prophet'sPaint.png");
  fireSkill = loadImage("Photos/FireButton.PNG")
}

function setup() {
 createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,500,1000,30);
  player = new PC1(50,440,20,50);

  fire = new ShootFire(200,400,50,50);

  skill1 = createButton("Fire");
  text = createElement("h4", "Press a to fire")
  text.position(skill1.x, skill1.y)
  
   

  skill2 = createButton("Frost");
  // skill2.position(850,450);

  skill3 = createButton("Cloak of deception");
  skill4 = createButton("Lunar Frenzy");
  skill5 = createButton("Hover");
}

/*function keyPressed(){
  if(keyCode === 32 && player === new PC1){
    player = new PC2(player.x,player.y,20,50);
    console.log("Two");
 }

 if(keyCode === 32 && player === new PC2){
  player = new PC1(player.x,player.y,20,50);
}
}*/


function draw() {  
  background(backg1);
  Engine.update(engine);
  

  ground.display();
  player.display();

 showFlame();
}

/*function keyPressed(){
  if(keyCode === 32){
    player.velocityX = 2
  }
}*/

function showFlame(){
  if(keyDown("a")){
  fire.display();
  }
};

