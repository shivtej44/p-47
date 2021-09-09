const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,heart,heart2,heart3;
var lance,invisground,invisleft,invisright;
var house1,tree1,hin1;
var house2,tree2,tree3,hin2;
var house3,hin3;
var sword,goblin,goblin2,goblinImg;
var health = 3;
var coin;
var coins = 0;
var bed,bedImg;
var villager1;
var villager2;
var Trade = 0;
var tradeTab;
var bowImg,bow,bt,ca,cai,ca2,ca2i,buyb,buybi;
var bowget=false;
var swordget=false;
var wep="s";
var arrow,arrowImage,arrowImage2;
var arrows = 5;
var arrowcooldown = 0;
var jc = 0
var ars;
var gSword,swordImg;
var goblin3,goblin4,goblin5,goblin6;
var housestage =0;
var kSword;
var kbow;

var stage =0;

var txtstate = 0;

function preload(){
 goblinImg = loadImage("Goblin.png");
 bedImg = loadImage("bed.png");
 bowImg = loadImage("bow.png");
 cai = loadImage("coin.png");
 ca2i = loadImage("15.png");
 buybi = loadImage("buyb.png");
 arrowImage = loadImage("arrow.png");
 arrowImage2 = loadImage("arrow2.png");
 swordImg = loadImage("sword2.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,400,900,70);



  lance = createSprite(400,346,30,50);
  lance.shapeColor = "red";



  invisground = createSprite(400,400,900,70);
  invisground.visible = false;
  invisleft = createSprite(-15,200,0.01,500);
  //invisleft.visible = false;
  invisright = createSprite(815,200,0.01,500);
  //invisright.visible = false;



  house1 = new House(500,265,200,200);
  hin1 = createSprite(house1.body.position.x+0.5,house1.body.position.y+40,120,120);
  hin1.shapeColor = color(173,120,30);
 

  house2 = new House(500,265,200,200);
  hin2 = createSprite(house2.body.position.x+0.5,house2.body.position.y+40,120,120);
  hin2.shapeColor = color(173,120,30);
  bed = createSprite(hin2.x-30,hin2.y+41,30,20);
  bed.addImage("bed",bedImg);
  bed.scale = 0.07;
 

  house3 = new House(300,265,200,200);
  hin3 = createSprite(house3.body.position.x+0.5,house3.body.position.y+40,120,120);
  hin3.shapeColor = color(173,120,30);
 


  tree1 = new Tree(200,267,160,270);
  tree2 = new Tree(100,267,160,270);
  tree3 = new Tree(700,267,160,270);


  
  heart = new Hearts(25,25,50,50);
  heart2 = new Hearts(75,25,50,50);
  heart3 = new Hearts(125,25,50,50);

  coin = new Coins(700,15,30,30);
   
  sword = new Sword(lance.x ,340,40,40);
  bow = new Bow(lance.x,340,40,40);



  goblin = createSprite(100,330,30,50);
  goblin2 = createSprite(-100,330,30,50);
  
  goblin3 = createSprite(-200,330,30,50);
  goblin4 = createSprite(1000,330,30,50);
  goblin5 = createSprite(1400,330,30,50);
  goblin6 = createSprite(-600,330,30,50);


  villager1= createSprite(150,340,30,50);
  villager1.shapeColor="green";

  villager2= createSprite(400,340,30,50);
  villager2.shapeColor="green";

  tradeTab = createSprite(400,200,300,100);
  tradeTab.shapeColor = color(173,120,30);
  bt = createSprite(tradeTab.x-110,tradeTab.y,70,70);
  bt.addImage("bow",bowImg);
  bt.scale = 0.1;
  ca= createSprite(tradeTab.x,tradeTab.y,70,70);
  ca.addImage("coin",cai);
  ca.scale = 0.03;
  ca2= createSprite(tradeTab.x+50,tradeTab.y,70,70);
  ca2.addImage("coin2",ca2i);
  buyb=createSprite(tradeTab.x+100,tradeTab.y+55,60,20);
  buyb.addImage("button",buybi);

  arrowGroup = new Group(); 
  ars = createSprite(720,60,30,30);
  ars.addImage("arrows",arrowImage);
  ars.scale=2;

  gSword = createSprite(700,340,50,50);
  gSword.addImage("sword",swordImg);
  gSword.scale = 0.1;
  
}

function draw() {
  background(135,206,235);  
  Engine.update(engine);

  //console.log(lance.y);

  lance.collide(invisground);
  //lance.velocityY =7;
  
  textSize(40);
  fill("white")
  text("Stage: "+stage,340,50);

  textSize(30);
  text("X"+coins,720,25);
 



  //moving and attacking----------------------------------------
  if(keyDown("LEFT_ARROW")&&swordget===true&&wep==="s") {
    //lance.x = lance.x - 5;
    sword.body.position.x = lance.x - 40;
    
  }else if(keyDown("RIGHT_ARROW")&&swordget===true&&wep==="s") {
    //lance.x = lance.x + 5;
    sword.body.position.x = lance.x + 40;
  }else {
   sword.body.position.x=100000; 
  }

  if(keyDown("LEFT_ARROW")&&bowget===true&&wep==="b") {
    //lance.x = lance.x - 5;
    bow.body.position.x = lance.x - 40;
  }else if(keyDown("RIGHT_ARROW")&&bowget===true&&wep==="b") {
    //lance.x = lance.x + 5;
    bow.body.position.x = lance.x + 40;
  }else {
   bow.body.position.x=100000; 
  }

  if(keyDown("A")) {
    lance.x = lance.x - 5;
    //sword.body.position.x = lance.x - 40;
    
  }
  if(keyDown("D")) {
    lance.x = lance.x + 5;
    //sword.body.position.x = lance.x + 40;
  }

 if(keyDown("1")){
   wep="s";
 }else if(keyDown("2")){
  wep="b";
 }

 if(bowget===true&&wep==="b"){
   if(keyDown("LEFT_ARROW")){
    if(keyCode=== 70){
     Carrow(-20,lance.x-30,arrowImage);
    }
   }else if(keyDown("RIGHT_ARROW")){
    if(keyCode === 70){
     Carrow(+20,lance.x+30,arrowImage2);
    }
   }
   textSize(30);
   text("X"+arrows,740,70);
   ars.visible=true;
 }else{
  ars.visible=false;
 }

 if(bowget===true&&swordget === true){
   textSize(20);
   text("1 ",750,100);
   text("2 ",750,150);
   kSword = createSprite(780,90,20,20);
   kSword.addImage("sword",swordImg);
   kSword.scale = 0.07;
   kbow = createSprite(780,140,20,20);
   kbow.addImage("bow",bowImg);
   kbow.scale = 0.04;
 }
 if(arrowcooldown>0){
   arrowcooldown--;
 }

 if(keyCode===119&&jc===0){
   if(lance.y>339){
   lance.velocityY = -11;
   jc=30
   }
 }
 if(lance.y<260){
  lance.velocityY = 7;
 }
 if(jc>0){
  jc--;
}




  //display------------------------------------
  lance.depth =lance.depth+1;

  house1.display();
  enh(520,475,0,1,32,"Press 'space' to enter",0);
  enh(520,475,1,0,101,"Press 'e' to exit",0);
  house2.display();
  enh(520,475,0,2,32,"Press 'space' to enter",2);
  enh(520,475,2,0,101,"Press 'e' to exit",2);
  house3.display();
  enh(320,275,0,3,32,"Press 'space' to enter",2);
  enh(320,275,3,0,101,"Press 'e' to exit",2);


  tree1.display();
  tree2.display();
  tree3.display();

  sword.display();
  bow.display();
  ground.display();
  heart.display();
  heart2.display();
  heart3.display();
  coin.display();


  

  

 //inside stages---------------------------- 
 if(lance.x===0&&stage<=4){
  stage = stage + 1;
  lance.x = 780;
}else{
  lance.collide(invisleft); 
}
if(lance.x===800&&stage>= -4){
  stage = stage - 1;
  lance.x = 20;
}else{
  lance.collide(invisright); 
}

  if(housestage ===1){
   lance.x = 505;
   lance.y = 340;
  }else if(housestage ===2){  
    lance.x = 505;
    lance.y = 340;
   }else if(housestage ===3){ 
    lance.x = 305;
    lance.y = 340;
   }
 
   
  if(stage === -1&&swordget===false){
    gSword.visible = true;
  }else if(stage <-1||stage>-1){
    gSword.visible = false;
  }else{
    gSword.visible = false;
  }
 if(stage=== -1){
  if(lance.isTouching(gSword)&&swordget===false){
    swordget=true
    txtstate = 2;
  }
 }
push();
textSize(30);
 if(txtstate === 0){
  
   text("Press 'W,A,S,D' to move  ",10,100);
   text("Press 'Space' to enter house,talk and 'e' to exit ",10,150);
   text("Press 'Space' to continue",10,200);
   if(keyCode === 32){
    txtstate = 1;
   }
 }

 if(txtstate === 2){
  
  text("Press left and right arrow keys to use sword",10,100);
  text("Press 'Space' to continue",10,150);
  if(keyCode === 32){
    txtstate = 1;
   }
 }

 if(txtstate === 3){
 
  text("Press '1' and '2' to switch weapons",10,100);
  text("Press left and right arrow keys to draw bow",10,150);
  text("Press 'F' to shoot an arrow",10,200);
  text("Press 'Space' to continue",10,250);
  if(keyCode === 32){
    txtstate = 1;
   }
 }
  
pop();
//health------------------------------
 if(health === 3){
  heart3.body.position.y = 25;
  heart2.body.position.y = 25;
  heart.body.position.y = 25;
 }
 if(health === 2){
 heart3.body.position.y = 2000;
 heart2.body.position.y = 25;
 heart.body.position.y = 25;
 }
 if(health === 1){
  heart3.body.position.y = 2000;
  heart2.body.position.y = 2000;
  heart.body.position.y = 25;
 }
 if(health === 0){
  heart3.body.position.y = 2000;
  heart2.body.position.y = 2000;
  heart.body.position.y = 2000;
 }
 

 



 
//stage objects----------------------------------------------------
sword.body.position.y =lance.y;
bow.body.position.y =lance.y;

 

  sta(0,house1,500);
  vis(hin1,1,housestage);
  

  sta(2,house2,500);
  vis(hin2,2,housestage);
  vis(bed,2,housestage);

  sta(2,house3,300);
  vis(hin3,3,housestage);
 



  sta(0,tree1,200);
  sta(2,tree2,100);
  sta(2,tree3,700);
  


  vis(villager1,2,stage);
  talk(195,100,"Thank you for defeating the goblins",2,villager1);

  vis(villager2,3,stage);
  talk(445,350,"I am a trader i will trade with you",3,villager2);
  trade(445,350,3,villager2);
  vis(tradeTab,1,Trade);
  vis(bt,1,Trade);
  vis(ca,1,Trade);
  vis(ca2,1,Trade);
  vis(buyb,1,Trade);
  if(mousePressedOver(buyb)&&bowget===false&&coins>=15&&Trade ===1&&bowget===false){
    coins = coins-15;
    bowget=true;
    Trade  = 3;
    txtstate = 3;
  }


  
  enemy(goblin,Math.round(random(6,10)),1,1);
  enemy(goblin2,Math.round(random(6,10)),1,1);

  enemy(goblin3,Math.round(random(6,10)),4,1);
  enemy(goblin4,Math.round(random(6,10)),4,1);
  enemy(goblin5,Math.round(random(6,10)),4,1);
  enemy(goblin6,Math.round(random(6,10)),4,1);
  


  drawSprites();
}



//easy functions---------------------------------------------------
function sta(v1,v2,num1){
  if(stage < v1||stage>v1){
    v2.body.position.x = 1000;
  }else if(stage === v1){
    v2.body.position.x = num1;
  }
}
function vis(sprite,Stage,stage1){
 if(stage1 === Stage){
   sprite.visible = true;
 }else if(stage1 != Stage){
  sprite.visible = false;
}
}
function enh(x1,x2,stage1,stage2,key,txt,stage3){
  if(lance.x<=x1&&lance.x>=x2&&housestage ===stage1&&stage ===stage3){
    textSize(20);
    text(txt,lance.x,lance.y-30);
    if(keyCode === key){
      housestage = stage2;
    }
  } 
  
}
function enemy(gob,coi,stag,dmg){
  
  gob.addImage("goblin",goblinImg);
  gob.scale = 0.7;
  gob.setCollider("rectangle",0,0,30,50);
  vis(gob,stag,stage);
  if(lance.x - gob.x>gob.x-lance.x&&health>0&&stage ===stag){
    gob.velocityX =5;
    if(stage ===stag&&sword.body.position.x===gob.x&&wep==="s"){
     gob.visible =false;
     gob.y = 1000;
     coins = coins+coi;
    }
   }else if(lance.x - gob.x<gob.x-lance.x&&health>0&&stage ===stag){
    gob.velocityX =-5;
    if(stage ===stag&&sword.body.position.x===gob.x&&wep==="s"){
     gob.visible =false;
     gob.y = 1000;
     
     coins = coins+coi;
    }
    }else if(health === 0){
     gob.velocityX = 0;
   }else if(stage != stag){
    gob.velocityX = 0;
   }
   if(stage ===stag&&arrowGroup.isTouching(gob)&&wep==="b"){
    gob.visible =false;
    gob.y = 1000;
    coins = coins+coi;
    arrowGroup.destroyEach();
   }
   if(lance.isTouching(gob)&&health>0&&stage === stag){
    health = health -dmg;
    if(lance.x - gob.x>gob.x-lance.x&&stage === stag){
    lance.x = lance.x+10;
    }else if(lance.x - gob.x<gob.x-lance.x&&stage === stag){
      lance.x = lance.x-10;    
    }
  }
}
function talk(x,x2,tex,st,vil){
  if(lance.x<=x&&lance.x>=x2&&stage===st){
    textSize(20);
    text("Press 'space' to talk",vil.x-50,vil.y-30);
   
    if(keyCode === 32&&stage===st){
      
      textSize(40);
      fill("green");
      text(tex,100,100);
      
      
      
    }
   }
} 
function trade(x,x2,st,vil){
  if(lance.x<=x&&lance.x>=x2&&stage===st){
    textSize(20);
    fill("white");
    text("Press 'T' to trade",vil.x-50,vil.y-60);
   
    if(keyCode ===116){
      Trade = 1;
    }
  }else{
    tradeTab.visible = false;
    Trade =0; 
  }
}
function Carrow(va,va2,Img) {
  if (arrows>0&&arrowcooldown===0){
   arrow = createSprite (va2,lance.y,50,10)
   arrow.addImage(Img);
   arrow.scale = 2.5;
   arrow.velocityX=va;
   arrows--;
   arrow.lifetime = 60;
   arrowGroup.add(arrow); 
   arrowcooldown = 45;
   
  }
 
 }
 