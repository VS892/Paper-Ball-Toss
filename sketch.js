
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var left, right;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.1,
		density:1.5,

	}



	//Create the Bodies Here.
	ball = Bodies.circle(100,500,20,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,690,width,20);
	left = new Ground(600,635,10,90);
	right = new Ground(750,635,10,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER)
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,40,40);
  ground.display();
  left.display();
  right.display();
  
  drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-80});
	}
}



