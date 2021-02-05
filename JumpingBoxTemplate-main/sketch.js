var canvas,edges;
var music;
var s1,s2,s3,s4,box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1=createSprite(50,550,150,10);
s1.shapeColor="red";
s2=createSprite(250,550,150,10);
s2.shapeColor="blue";
s3=createSprite(450,550,150,10);
s3.shapeColor="green";
s4=createSprite(650,550,150,10);
s4.shapeColor="yellow";



    //create box sprite and give 
    box=createSprite(random(100,600),300,100,100);
    box.shapeColor="white";
    box.velocityX=-3;
    box.velocityY=-3;



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

drawSprites();

    //add condition to check if box touching surface and make it box
    if(box.isTouching(s1))
    {
        box.bounceOff(s1)
        box.shapeColor="red";
        music.play();
        
    }
    if(box.isTouching(s2))
    {
        box.bounceOff(s2)
        s2.shapeColor="white";
        music.stop();
        box.setVelocity(0,0);
        
    }
    if(box.isTouching(s3))
    {
        box.bounceOff(s3)
        box.shapeColor="green";
        music.play();
        
    }
    if(box.isTouching(s4))
    {
        box.bounceOff(s4)
        box.shapeColor="yellow";
        music.play();
        
    }
}
