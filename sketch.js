var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music, musicSound;

function preload(){
music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(170,580,400,30);
    block1.shapeColor = "blue";

    block2 = createSprite(270,580,250,30);
    block2.shapeColor = "orange";

    block3 = createSprite(520,580,250,30);
    block2.shapeColor = "green";

    block4 = createSprite(740,580,250,30);
    block2.shapeColor = "pink";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 2;
    ball.velocityY = 2;
    //write code to add velocityX and velocityY

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
            ball.shapeColor = "green";
            music.play();
        }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
                ball.shapeColor = "pink";
                music.play();
            }



        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    
    drawSprites();

        }
