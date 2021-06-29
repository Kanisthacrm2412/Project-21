
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground, left, right;



function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,670,width,20);
	right = new Ground(800,600,20,120);
	left = new Ground(700,600,20,120);
	

	var options = {

		isStatic : false,
		restitution: 0.3,
		friction: 0 ,
		density: 1.2

	}

	//Create the Bodies Here.

	ball= Bodies.circle(250,550,20,options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
	ground.display();
	right.display();
	left.display();

	ellipse(ball.position.x,ball.position.y,20);

  drawSprites();

  

}



function keyPressed(){

	if(keyCode===UP_ARROW){

		
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

	}

	if(keyCode===RIGHT_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

	}

}
