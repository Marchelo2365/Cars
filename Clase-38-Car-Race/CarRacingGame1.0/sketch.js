var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;
var backgroundImg;

var  Cars;

function preLoad(){

/*  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  
  backgroundImg = loadImage("images/track.jpg");
*/
}
function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  car1 = createSprite(100,300,20,20)
  car2 = createSprite(120,300,20,20)
  car3 = createSprite(140,300,20,20)
  car4 = createSprite(160,300,20,20)
 /*
  car1.addImage(car1Img);
  car2.addImage(car2Img);
  car3.addImage(car3Img);
  car4.addImage(car4Img);

  
*/
  Cars =[car1,car2,car3,car4];
  
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   // image(backgroungImg,0,-displayHeight*4,displayWidth,displayHeight*5);
   drawSprites();
  }




}
