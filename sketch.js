var background,boy,dog;
var backgroundImg, boyrunningImg, dogImg;
var play=1;
var end=0;
var gamestate=1;

function preload(){
    backgroundImg = loadImage("background.jpeg");
    boyrunningImg = loadImage("boy running.jpeg");
    dogImg = loadImage("dog.gif");
}

function setup() {
 createCanvas(windowWidth,windowHeight);

 background=createSprite(width/2,200);
 background.addImage(backgroundImg);
 background.velocityY = 3;

 boy = createSprite(width/2, height, 20,20);
 boy.addAnimation("boy running",boyrunningImg);
 boy.scale = 0.1;

 dog = createSprite(wiwdth/2,200);
 dog.addAnimation("dog running", dogImg);
 dog.scale = 0.1;

}

function draw() {
if (gamestate===play){
    background(0);
    boy.x = World.mouseX;
    dog.velocityY = 3;

    edges = createEdgeSprites();
    boy.collide(edges);

    if (path.y > height){
        path.y = height/2;
    }
     
    else {
        if(dog.isTouching(boy)){
            gamestate=end;

            boy.addAnimation("boy running",boyrunningImg);
            boy.x = width/setup;
            boy.y = height/2;
           boy.scale = 0.6

            boy.destroy();
            dog.destroy();
        }
        drawSprites();
    }

}
}