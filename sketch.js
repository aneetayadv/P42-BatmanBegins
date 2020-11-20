
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops=[];
var maxDrops = 100;
var thunder_Img1,thunder_Img2,thunder_Img3,thunder_Img4;
var walk_Img;
var man;

function preload()
{
	thunder_Img1 = loadImage("../images/thunderbolt/1.png");
	thunder_Img2 = loadImage("../images/thunderbolt/2.png");
	thunder_Img3 = loadImage("../images/thunderbolt/3.png");
	thunder_Img4 = loadImage("../images/thunderbolt/4.png");	

	walk_Img = loadAnimation("../images/WalkingFrame/walking_1.png","../images/WalkingFrame/walking_2.png","../images/WalkingFrame/walking_3.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	if(frameCount%100 === 0){
		for(var i=0;i<maxDrops;i++){
			var randomX = Math.round(random(10,displayWidth-10));
			var randomY = Math.round(random(10,displayHeight-500));
			var randomR = Math.round(random(2,5));
			drops.push(new Drop(randomX,randomY,randomR));
		}
	}

	man = createSprite(displayWidth/2,displayHeight-320);
	man.addAnimation("walking",walk_Img);
	man.scale = 0.6;

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  displayRain();
  displayThunder();
  drawSprites();
 
}

function displayRain(){
	for(var i=0;i<drops.length;i++){
		drops[i].display();
		drops[i].updateDrops();
	}  	
}

function displayThunder(){
	var selThunder = Math.round(random(1,4));
	var randomX = Math.round(random(50,displayWidth-50));
	switch(selThunder){
		case 1: image(thunder_Img1,randomX,50,200,300);
				break;
		case 2: image(thunder_Img2,randomX,50,200,300);
				break;
		case 3: image(thunder_Img3,randomX,50,200,300);
				break;	
		case 4: image(thunder_Img4,randomX,50,200,300);
				break;
		default : break;	
	}
}



