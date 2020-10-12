var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    engine = Engine.create();
	world = engine.world;

	var package_options = {
		restitution :1, 
		isStatic :true  
	}

	packageBody = Bodies.circle(400, 200 , 5, package_options);
	World.add(world, packageBody);

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground = Bodies.rectangle(400, 660, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    Engine.run(engine);
  
}

function draw() {
  
  background(0);
  
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  packageBody.position.x= helicopterSprite.x;

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,15);

  ellipseMode(RADIUS);
  ellipse(packageBody.position.x,packageBody.position.y,30);

  keyPressed();
  drawSprites();

  if(keyCode === LEFT_ARROW){
     helicopterSprite.x = helicopterSprite.x - 5;
   }

  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 5;
  }
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    package_options= {
		restitution :1,
		isStatic : false
	}
	Engine.update(engine);
  }
}



