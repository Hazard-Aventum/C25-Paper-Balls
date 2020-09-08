const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var ground;
var ball;
var block,block2,block1;
var bigBin,bigPaper;
var barrier;

function preload(){
  bigBin = loadImage("dustbingreen.png");
  bigPaper = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);	
	background(255,255,255);

	engine = Engine.create();
	world = engine.world;

	block = new Bin(500,605,20,100);
	block.shapeColor = rgb(255,0,0);
	

	block1 = new Bin(590, 660,200, 20);
	block1.shapeColor = rgb(255,0,0);
	

	block2 = new Bin( 680, 605,20, 100);
	block2.shapeColor = rgb(255,0,0);
	
			
	ground = new Ground(400,675,800,10);

	ball = new Paper(100,650,25);
	//ball.addImage( bigPaper, "paper",);

	barrier = createSprite(595,505,0,10);
	barrier.addImage( bigBin, "dustbingreen");

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  ball.display();

  ground.display();

  block.display();

  block1.display();

  block2.display();

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}