var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var  box1Body ,  box2Body , box3Body;
var box1Sprite , box2Sprite , box3Sprite;
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 
	
	
	box1Sprite = createSprite(325, 630 ,20,70);
	box2Sprite = createSprite(460,630,20,70);
	box3Sprite = createSprite(400,650,130,20);  
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
 

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	box1Body = Bodies.rectangle(box1Sprite.x , box1Sprite.y ,  box1Sprite.width , box1Sprite.height);
	World.add(world,box1Body);  
	 
	box2Body = Bodies.rectangle(box2Sprite.x , box2Sprite.y ,  box2Sprite.width , box2Sprite.height);
	World.add(world,box2Body);  
	
	box3Body = Bodies.rectangle(box3Sprite.x , box3Sprite.y ,  box3Sprite.width , box3Sprite.height);
	World.add(world,box3Body);  
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



