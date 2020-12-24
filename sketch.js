var player1,player2;
var canvas;
var shot =[] ;
var j = 0;
//var shotGroup; 

var gameState = 0
var playerCount;
var playerMissiles;
var allPlayers;
var distance = 0;
var database;
var form,game,player;

var bg,bg1,missile,missileImg;
var player1_img,player2_img;

function preload(){
 player1_img = loadAnimation('Images/heli-1.png','Images/heli-2.png','Images/heli-3.png','Images/heli-4.png');
 player2_img = loadAnimation('Images/enemy1.png','Images/enemy2.png','Images/enemy3.png','Images/enemy4.png');
 missileImg = loadImage('Images/Missile1.png')
 bg1 = loadImage('Images/sky1.jpg')
}

function setup(){
canvas = createCanvas(displayWidth*0.75,displayHeight-270);
//canvas.scale = 12;
database = firebase.database();
bg = createSprite(displayWidth*0.7,displayHeight-150)
bg.addImage("bg",bg1)
bg.scale = 3.5;
player2 = createSprite(600,200,20,20);
player2.addAnimation("player2",player2_img);
player1 = createSprite(145,200,20,20);
player1.addAnimation("player1",player1_img);
player1.scale = 0.7
player2.scale = 0.9
//player1.debug = true
//player2.debug = true
//var shotGroup = createGroup();





}

function draw(){
background(rgb(65,142,196));
if(keyDown(RIGHT_ARROW)){
    player1.x = player1.x +10
}

if(keyDown(DOWN_ARROW)){
    player1.y = player1.y +10;
}

if(keyDown(UP_ARROW)){
    player1.y = player1.y -10;
}

if(keyDown(LEFT_ARROW)){
    player1.x = player1.x -10;
}

if(keyDown("w")){
    player2.y = player2.y -10 ;
}

if(keyDown("s")){
    player2.y = player2.y +10;
}

if(keyDown("d")){
    player2.x = player2.x +10;
}

if(keyDown("a")){
    player2.x = player2.x -10;
}





if(keyDown("SPACE")){
      //Shot
      
for (var i = 0; i < 9; i++) {
    shot[i] = createSprite(150, 240);
    shot[i].visible = false
    shot[i].x = player1.x;
    shot[i].y = player1.y;
    shot[i].addImage(missileImg);
    shot[i].scale = 0.04
    //shotGroup.add(shot[i]);
    //shot.attach(player1)
    
          
     }
    shot[j].velocityX = 4;
    shot[j].visible = true
}

if(player1.isTouching(player2)){
   player2.destroy();
}



//for (var i = 0; i < 9; i++) {
    //if (player2.isTouching(shot[i])) {
       //if(shot[i].isTouching(player2)){
        //player2.destroy();
     // }
 // }

if(keyDown(LEFT_ARROW)){
    player1.x = player1.x -10
}
//player1.bounceOff("topEdge");
//if(keyWentDown("space")){
    //shot[j].x = player1.x;
    //shot[j].y = player1.x = 40;
    //hot[j].velocityX = 4;
   // j = j+1;
    //if (j>8) {
     // j = 0;
    //}
  //}
if(playerCount === 2){
    game.update(1);
    
}

 drawSprites();
}
//}

