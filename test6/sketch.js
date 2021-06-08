const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var coins=0
var database;
var lives=2


var form, player, game;

function preload(){
  img1= loadImage('images/capture1.png') 
  coinimg = loadImage("images/coins.png")
  cactusimg = loadImage("images/cactus.png")
  monster4_img=loadImage('images/monster4.png')
  monster1_img=loadImage('images/monter1.png')
  monster2_img=loadImage('images/monster2.png')
  monster3_img=loadImage('images/monster3.png')
  monster5_img=loadImage('images/monster5.png')
}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  engine = Engine.create();
  world = engine.world;
  //database = firebase.database();
 form=new Form()

 form1=new Instructions()

 cactus1 = new Group()
 cactus2 = new Group()
 cactus3 = new Group()
 cactus4 = new Group()
monstergrp = new Group()


 game1= createSprite (displayWidth/2 -630,displayHeight/2 +100,200,20)
 game2= createSprite(displayWidth/2 -500,displayHeight/2 -340 +100,150,20)
 game3= createSprite(displayWidth/2 -565,displayHeight/2 -260 +100,20,150)
 game4=  createSprite(displayWidth/2 -325,displayHeight/2 -190 +100,500,20)
 game5=  createSprite(displayWidth/2 -365,displayHeight/2 -110 +100,20,150)
 game6=  createSprite(displayWidth/2 -85,displayHeight/2 -110 +100,20,150)
 game7= createSprite(displayWidth/2 -220,displayHeight/2-250 ,20,300)
 game8=  createSprite(displayWidth/2 -220,displayHeight/2+145 ,20,170)
 game9=  createSprite(displayWidth/2 -150,displayHeight/2+70 ,150,20)
 game10= createSprite (displayWidth/2 -360,displayHeight/2 +240,300,20)
 game11= createSprite(displayWidth/2 -85,displayHeight/2 +310,20,150)
 game12= createSprite(displayWidth/2 +285,displayHeight/2 +210 +100,20,150)
 game13= createSprite (displayWidth/2 +280,displayHeight/2 +240,300,20)
 game14= createSprite (displayWidth/2 +135,displayHeight/2 +170,20,150)
  game15= createSprite(displayWidth/2 +425,displayHeight/2 +170,20,150)
 game16= createSprite (displayWidth/2 +420,displayHeight/2 +90,200,20)
 game17= createSprite (displayWidth/2 +330,displayHeight/2+5 ,20,150)
 game18=  createSprite(displayWidth/2 +530,displayHeight/2-75 ,20,350)
 game19= createSprite(displayWidth/2 +200,displayHeight/2 -60,250,20)
 game20=  createSprite(displayWidth/2 +80,displayHeight/2-130 ,20,150)
 game21= createSprite(displayWidth/2 +400,displayHeight/2 -240 ,250,20)
 game22= createSprite (displayWidth/2 +15,displayHeight/2 -210 ,150,20)
 game23= createSprite (displayWidth/2 +625,displayHeight/2 +280 ,150,20) 
 
 topmain= createSprite (displayWidth/2 ,displayHeight/2 -390 ,displayWidth,20) 
 topmain.visible = false
 bottommain= createSprite (displayWidth/2 ,displayHeight/2 +390 ,displayWidth,20) 
  bottommain.visible = false



 coin1= createSprite(displayWidth/2 - 520,displayHeight/2 - 200,10,10)
 coin2= createSprite(displayWidth/2 - 450,displayHeight/2 - 200,10,10)
 
 coin3= createSprite(displayWidth/2 - 520,displayHeight/2 - 130,10,10)
 coin4= createSprite(displayWidth/2 - 450,displayHeight/2 - 130,10,10)
 coin5= createSprite(displayWidth/2 - 380,displayHeight/2 - 130,10,10)
 coin6= createSprite(displayWidth/2 - 310,displayHeight/2 - 130,10,10)
 
 coin7= createSprite(displayWidth/2 - 490,displayHeight/2 - 50,10,10)
 coin8= createSprite(displayWidth/2 - 410,displayHeight/2 - 50,10,10)
 
 coin9= createSprite(displayWidth/2 - 290,displayHeight/2 - 50,10,10)
 coin10= createSprite(displayWidth/2 - 210,displayHeight/2 - 50,10,10)
 coin11= createSprite(displayWidth/2 - 135,displayHeight/2 - 50,10,10)
 
 coin12= createSprite(displayWidth/2 - 270,displayHeight/2 + 200 ,10,10)
 coin13= createSprite(displayWidth/2 - 340,displayHeight/2 + 200 ,10,10)
 
 coin14= createSprite(displayWidth/2 - 210,displayHeight/2 +30,10,10)
 coin15= createSprite(displayWidth/2 - 135,displayHeight/2 +30,10,10)
 
 
 coin16= createSprite(displayWidth/2 +390 ,displayHeight/2 +40,10,10)
 coin17= createSprite(displayWidth/2 +480 ,displayHeight/2 +40,10,10)
 
 coin18= createSprite(displayWidth/2 +480 ,displayHeight/2 -30,10,10)
 coin19= createSprite(displayWidth/2 +480 ,displayHeight/2 -100,10,10)
 coin20= createSprite(displayWidth/2 +480 ,displayHeight/2 -180,10,10)
 
 coin21= createSprite(displayWidth/2 +390 ,displayHeight/2 -180,10,10)
 coin22= createSprite(displayWidth/2 +300 ,displayHeight/2 -180,10,10)
 
 coin23= createSprite(displayWidth/2 +370 ,displayHeight/2 +200 ,10,10)
 coin24= createSprite(displayWidth/2 +300 ,displayHeight/2 +200,10,10)
 
   girl= createSprite(displayWidth/2 -630,displayHeight/2 -300,50,50)
   girl.debug=true
   girl.setCollider('circle',0,0,40)

   
}


function draw(){
  background('lightBlue')
  Engine.update(engine);
  if(gameState===0){
    //form1.hide()
     form.display()
    
  }

  if(gameState===1){
   // form.hide()
    form1.display()
}

if(gameState===2){

  
edges= createEdgeSprites()
girl.collide(edges)
girl.collide(topmain)
girl.collide(bottommain)

spawnCactus1()
spawnCactus2()
spawnCactus3()
spawnCactus4()

coin1.addImage(coinimg)
coin1.scale = 0.1

coin2.addImage(coinimg)
coin2.scale = 0.1

coin3.addImage(coinimg)
coin3.scale = 0.1

coin4.addImage(coinimg)
coin4.scale = 0.1

coin5.addImage(coinimg)
coin5.scale = 0.1

coin6.addImage(coinimg)
coin6.scale = 0.1

coin7.addImage(coinimg)
coin7.scale = 0.1

coin8.addImage(coinimg)
coin8.scale = 0.1

coin9.addImage(coinimg)
coin9.scale = 0.1

coin10.addImage(coinimg)
coin10.scale = 0.1

coin11.addImage(coinimg)
coin11.scale = 0.1

coin12.addImage(coinimg)
coin12.scale = 0.1

coin13.addImage(coinimg)
coin13.scale = 0.1

coin14.addImage(coinimg)
coin14.scale = 0.1

coin15.addImage(coinimg)
coin15.scale = 0.1

coin16.addImage(coinimg)
coin16.scale = 0.1

coin17.addImage(coinimg)
coin17.scale = 0.1

coin18.addImage(coinimg)
coin18.scale = 0.1

coin19.addImage(coinimg)
coin19.scale = 0.1

coin20.addImage(coinimg)
coin20.scale = 0.1

coin21.addImage(coinimg)
coin21.scale = 0.1

coin22.addImage(coinimg)
coin22.scale = 0.1

coin23.addImage(coinimg)
coin23.scale = 0.1

coin24.addImage(coinimg)
coin24.scale = 0.1




if(girl.isTouching(coin1)){
  coin1.destroy()
  coins=coins+1}

if(girl.isTouching(coin2)){
    coin2.destroy()
    coins=coins+1}

if(girl.isTouching(coin3)){
      coin3.destroy()
      coins=coins+1}

if(girl.isTouching(coin4)){
        coin4.destroy()
        coins=coins+1}

if(girl.isTouching(coin5)){
          coin5.destroy()
          coins=coins+1}

 if(girl.isTouching(coin6)){
    coin6.destroy()
    coins=coins+1}

if(girl.isTouching(coin7)){
    coin7.destroy()
     coins=coins+1}

 if(girl.isTouching(coin8)){
    coin8.destroy()
    coins=coins+1}

 if(girl.isTouching(coin9)){
    coin9.destroy()
    coins=coins+1}
 if(girl.isTouching(coin10)){
     coin10.destroy()
                    coins=coins+1}

if(girl.isTouching(coin11)){
coin11.destroy()
coins=coins+1}


if(girl.isTouching(coin12)){
coin12.destroy()
coins=coins+1}


if(girl.isTouching(coin13)){
coin13.destroy()
coins=coins+1}


if(girl.isTouching(coin14)){
coin14.destroy()
coins=coins+1}

if(girl.isTouching(coin15)){
coin15.destroy()
coins=coins+1}

if(girl.isTouching(coin16)){
coin16.destroy()
coins=coins+1}


if(girl.isTouching(coin17)){
coin17.destroy()
coins=coins+1}


if(girl.isTouching(coin18)){
coin18.destroy()
coins=coins+1}


if(girl.isTouching(coin19)){
coin19.destroy()
coins=coins+1}


if(girl.isTouching(coin20)){
coin20.destroy()
coins=coins+1}

if(girl.isTouching(coin21)){
coin21.destroy()
coins=coins+1}

if(girl.isTouching(coin22)){
coin22.destroy()
coins=coins+1}
if(girl.isTouching(coin23)){
coin23.destroy()                                           
 coins=coins+1}
    
 if(girl.isTouching(coin24)){
 coin24.destroy()
  coins=coins+1}


if(girl.isTouching(cactus1)||girl.isTouching(cactus2)||girl.isTouching(cactus3)||girl.isTouching(cactus4)){
  girl.x=displayWidth/2 -630
  girl.y=displayHeight/2 -300
  lives = lives - 1
}

  drawSprites()
  textSize(50);
  fill("blue");

  stroke("red");
 textFont("Ink Free");
   
  text('COINS: '+ coins,400,50)

  textSize(50);
  fill("blue");

  stroke("red");
 textFont("Ink Free");
   
  text('LIVES: '+ lives,900,50)
  girl.addImage(img1)
  girl.scale=0.7

  if(girl.isTouching(game1)||girl.isTouching(game2)||girl.isTouching(game3)||girl.isTouching(game4)||girl.isTouching(game5)||girl.isTouching(game6)||girl.isTouching(game7)||girl.isTouching(game8)||girl.isTouching(game9)||girl.isTouching(game10)||girl.isTouching(game11)||girl.isTouching(game12)||girl.isTouching(game13)||girl.isTouching(game14)||girl.isTouching(game15)||girl.isTouching(game16)||girl.isTouching(game17)||girl.isTouching(game18)||girl.isTouching(game19)||girl.isTouching(game20)||girl.isTouching(game21)||girl.isTouching(game22)||girl.isTouching(game23)){
    girl.x=displayWidth/2 -630
    girl.y=displayHeight/2 -300}


}

if(lives===0){
  gameState=3
}

if(gameState===3){
  background('green')
  textSize(50);
  fill("blue");

  stroke("red");
 textFont("Ink Free");
 text('oops...press R to restart!',200,200)
  

 
}

if((gameState===2) && (coins===2)){
  gameState=4

  
  game1.destroy()
  game2.destroy()
  game3.destroy()
  game4.destroy()
  
  game5.destroy()
  
  game6.destroy()
  
  game7.destroy()
  
  game8.destroy()
  
  game9.destroy()
  
  game10.destroy()
  
  game11.destroy()
  
  game12.destroy()
  
  game13.destroy()
  
  game14.destroy()
  
  game15.destroy()
  
  game16.destroy()
  
  game17.destroy()
  
  game18.destroy()
  
  game19.destroy()
  
  game20.destroy()
  
  game21.destroy()
  
  game22.destroy()
  
  game23.destroy()
  
 


  
}

if(gameState===4){
 
  edges= createEdgeSprites()
  girl.collide(edges)
  girl.collide(topmain)
  girl.collide(bottommain)
  spawnMonsters()
  monstergrp.bounceOff(edges)
  if(girl.isTouching(coin1)){
    coin1.destroy()
    coins=coins+1}
  
  if(girl.isTouching(coin2)){
      coin2.destroy()
      coins=coins+1}
  
  if(girl.isTouching(coin3)){
        coin3.destroy()
        coins=coins+1}
  
  if(girl.isTouching(coin4)){
          coin4.destroy()
          coins=coins+1}
  
  if(girl.isTouching(coin5)){
            coin5.destroy()
            coins=coins+1}
  
   if(girl.isTouching(coin6)){
      coin6.destroy()
      coins=coins+1}
  
  if(girl.isTouching(coin7)){
      coin7.destroy()
       coins=coins+1}
  
   if(girl.isTouching(coin8)){
      coin8.destroy()
      coins=coins+1}
  
   if(girl.isTouching(coin9)){
      coin9.destroy()
      coins=coins+1}
   if(girl.isTouching(coin10)){
       coin10.destroy()
                      coins=coins+1}
  
  if(girl.isTouching(coin11)){
  coin11.destroy()
  coins=coins+1}
  
  
  if(girl.isTouching(coin12)){
  coin12.destroy()
  coins=coins+1}
  
  
  if(girl.isTouching(coin13)){
  coin13.destroy()
  coins=coins+1}
  
  
  if(girl.isTouching(coin14)){
  coin14.destroy()
  coins=coins+1}
  
  if(girl.isTouching(coin15)){
  coin15.destroy()
  coins=coins+1}
  
  if(girl.isTouching(coin16)){
  coin16.destroy()
  coins=coins+1}
  
  
  if(girl.isTouching(coin17)){
  coin17.destroy()
  coins=coins+1}
  
  
  if(girl.isTouching(coin18)){
  coin18.destroy()
  coins=coins+1}
  
  
  if(girl.isTouching(coin19)){
  coin19.destroy()
  coins=coins+1}
  
  
  if(girl.isTouching(coin20)){
  coin20.destroy()
  coins=coins+1}
  
  if(girl.isTouching(coin21)){
  coin21.destroy()
  coins=coins+1}
  
  if(girl.isTouching(coin22)){
  coin22.destroy()
  coins=coins+1}
  if(girl.isTouching(coin23)){
  coin23.destroy()                                           
   coins=coins+1}
      
   if(girl.isTouching(coin24)){
   coin24.destroy()
    coins=coins+1}
  drawSprites() 

}


}


function keyPressed(){

  if(keyCode===UP_ARROW){
    girl.velocityX=0
    girl.velocityY=-4
  }

  if(keyCode===DOWN_ARROW){
    girl.velocityX=0
    girl.velocityY=4
  }
if(keyCode===LEFT_ARROW){
  girl.velocityX=-4
  girl.velocityY=0
}
if(keyCode===RIGHT_ARROW){
girl.velocityX=4
girl.velocityY=0
}



  


  
  
  }

  function spawnCactus1(){
    if(frameCount%100===0){
      var cactus = createSprite(displayWidth/2 - 650,displayHeight/2 +5,20,70)
      cactus.debug = true
      cactus.setCollider('circle',0,0,40)
      cactus.addImage(cactusimg)
      cactus.scale=0.9
     cactus.velocityY=-2
      cactus.lifetime = 10
      cactus1.add(cactus)
    }
   
  }

  function spawnCactus2(){
    if(frameCount%150===0){
      var cactus = createSprite(displayWidth/2 - 450,displayHeight/2 + 170,20,70)
      cactus.setCollider('circle',0,0,40)
      cactus.addImage(cactusimg)
      cactus.scale=0.9
     cactus.velocityY=-2
      cactus.lifetime = 10
      cactus2.add(cactus)
    }
   
  }

  
  function spawnCactus3(){
    if(frameCount%70===0){
      var cactus = createSprite(displayWidth/2 + 200,displayHeight/2 + 150,20,70)
      cactus.setCollider('circle',0,0,40)
      cactus.addImage(cactusimg)
      cactus.scale=0.9
     cactus.velocityY=-2
      cactus.lifetime = 10
      cactus3.add(cactus)
    }
   
  }

    
  function spawnCactus4(){
    if(frameCount%50===0){
      var cactus = createSprite(displayWidth/2 + 170,displayHeight/2 - 150,20,70)
      cactus.setCollider('circle',0,0,40)
      cactus.addImage(cactusimg)
      cactus.scale=0.9
     cactus.velocityY=-2
      cactus.lifetime = 10
      cactus4.add(cactus)
    }
   
  }
  function spawnMonsters(){
    if(frameCount%180===0){
      var monster = createSprite(displayWidth/2 + 170,displayHeight/2 - 150,20,70)
     // monster.velocityX = -2
     // monster.velocityY = 2
     rand = Math.round(random(1,5))
     switch(rand){
case 1: monster.addImage(monster1_img);
monster.velocityX = -2
      monster.velocityY = 2
        break;
case 2: monster.addImage(monster2_img);
monster.velocityX = 12
      monster.velocityY = -2
        break;
case 3: monster.addImage(monster3_img);
monster.velocityX = 2
      monster.velocityY = 7
        break;
case 4: monster.addImage(monster4_img);
monster.velocityX = -7
      monster.velocityY = -2
        break;
case 5: monster.addImage(monster5_img);
monster.velocityX = -4
      monster.velocityY = 4
        break;
    default: break;       
     }
     monster.scale =0.3
     monster.lifetime= 500
     monstergrp.add(monster)
    }
  }