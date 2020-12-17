//Create variables here

var dog, HappyDog;
var database;
var foodS;
var foodStock;


function preload()
{
	//load images here

dogImage = loadImage("dogimg.png")
happydogImage = loadImage("dogimg1.png")

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()

  dog = createSprite(250,300,20,20)
  dog.addImage(dogImage);
  dog.scale = 0.2


  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here


  if(keyWentDown(UP_ARROW)){
    writeStock (foodS);
    dog.addImage(happydogImage)
  }
  textSize(25)
  fill("white")
  text("Food Remaning"+foodS,165,200)

}

function readStock(data){

foodS = data.val()
}

// function write stock
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
x=x-1
  }
  database.ref('/').update({
    food:x 

  })

  

}