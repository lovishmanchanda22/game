var position;
var canvas, backgroundImage;
var gameState = 0;
var playerCount = 0;
var database, player, game, form;


function setup(){
  database = firebase.database();
  
  canvas = createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
   
 
  
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
