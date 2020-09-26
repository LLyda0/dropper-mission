var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var part1,p1;
var part2;
var part3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	p1=createSprite(width/2,650,200,20);
	p1.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	part1=new Part(400,650,200,20);
	part2=new Part(500,610,20,100);
	part3=new Part(300,610,20,100);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 packageBody=Bodies.rectangle(packageSprite.x,packageSprite.y,10,10,{isStatic:true});
	 World.add(world,packageBody);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()

  //part1.display();
  part2.display();
  part3.display();

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 push();
	 translate(packageBody.position.x,packageBody.position.y);
	 rotate(packageBody.angle);
	 
	Matter.Body.setStatic(packageBody, false);
	pop();
  }
}



