var canvas;
var box;
var surface1,surface2,surface3,surface4;
var edges;
var music

function preload(){
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    
surface1=createSprite(0,580,360,30);
surface1.shapeColor="red";
surface2=createSprite(295,580,200,30);
surface2.shapeColor="green";
surface3=createSprite(515,580,200,30);
surface3.shapeColor="blue";
surface4=createSprite(740,580,220,30);
surface4.shapeColor="yellow";
//create box sprite and give velocity
box=createSprite(random(20,750),200,40,40);
box.velocityX=4;
box.velocityY=9;
box.shapeColor="white";
}

function draw() {
    background("white");  

if(surface1.isTouching(box)  &&  box.bounceOff(surface1)){
    box.shapeColor="red";
    music.play();
}
else if(surface2.isTouching(box)  &&  box.bounceOff(surface2)){
    box.shapeColor="green";
    music.stop();
    box.velocityX=0;
    box.velocityY=0;
   }
   else if(surface3.isTouching(box)  &&  box.bounceOff(surface3)){
    box.shapeColor="blue";
   }
   else if(surface4.isTouching(box)  &&  box.bounceOff(surface4)){
    box.shapeColor="yellow";
   }
    //add condition to check if box touching surface and make it box
    
    edges=createEdgeSprites();;
    box.bounceOff(edges);
    
    drawSprites();
}
