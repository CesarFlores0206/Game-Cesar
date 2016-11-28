var hero;
var enemies;
var powerRate = 400;
var canvasMultiplier=40;
var bullets;
var score=0;
var explosionDensity=7;
var gameState="startUp";
var heroHealth=7;
var powerUp;
var powerSprite;
//declare heroState
var heroState = 'regular';
var laserBlastSound;
var enemydeathSound;
var powerUpSound;
var heroHitSound;

//variable for health
var health_one, health_two, health_three, health_four, health_five, health_six, health_full;

//declare hero animation variables
var heroDefault, heroLeft, heroRight;

var bulletImg;
var powerBullet;

var enemy1Default;
var enemy2Default;
var enemy3Default;

var bg_title, bg_win, bg_lose, bg_levelOne, bg_levelTwo, bg_levelThree, bg_countdown;


//declare enemy sprites
var enemyOneImg, enemyTwoImg, enemyThreeImg;

var count1Downtimer=0;
var count2Downtimer=0;

var level1ScoreAdvance = 20;
var level2ScoreAdvance = 45;
var levelOneMusic;
var levelTwoMusic;
var levelThreeMusic;
var deathMusic;
var winMusic;

var characterSpriteSheet;

var heroSheet;
var heroAnimations;

var heroIdleFrames = [
  {'name':'HeroDefault_00000', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00001', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00002', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00003', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00004', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00005', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00006', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00007', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00008', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroDefault_00009', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},
  
  ];

var heroLeftFrame = [
  {'name':'HeroLeft_00000', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00001', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00002', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00003', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00004', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00005', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00006', 'frame':{'x':0, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00007', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'HeroLeft_00008', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},
  
  ];
  
  var heroRightFrame = [
  {'name':'HeroRight_00000', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00001', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00002', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00003', 'frame':{'x':1536, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00004', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00005', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00006', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00007', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
  {'name':'HeroRight_00008', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
  ];
  
  
  var enemyOneFrame = [
    {'name':'x', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
    {'name':'x', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
    {'name':'x', 'frame':{'x':1536, 'y': 768, 'width': 256, 'height': 256}},
    {'name':'x', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},
    ]
    
    var enemyTwoFrame = [
      {'name':'enemyTwoDefault', 'frame':{'x':0, 'y': 1280, 'width': 256, 'height': 256}},
      {'name':'enemyTwoDefault', 'frame':{'x':256, 'y': 1280, 'width': 256, 'height': 256}},
      {'name':'enemyTwoDefault', 'frame':{'x':512, 'y': 1280, 'width': 256, 'height': 256}},
      {'name':'enemyTwoDefault', 'frame':{'x':768, 'y': 1280, 'width': 256, 'height': 256}},
      {'name':'enemyTwoDefault', 'frame':{'x':1024, 'y': 1280, 'width': 256, 'height': 256}},
      {'name':'enemyTwoDefault', 'frame':{'x':1280, 'y': 1280, 'width': 256, 'height': 256}},
      {'name':'enemyTwoDefault', 'frame':{'x':1536, 'y': 1280, 'width': 256, 'height': 256}},
      {'name':'enemyTwoDefault', 'frame':{'x':1792, 'y': 1280, 'width': 256, 'height': 256}},
      ]
    
    var enemyThreeFrame = [
      {'name':'enemyThree', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},
      {'name':'enemyThree', 'frame':{'x':256, 'y': 1024, 'width': 256, 'height': 256}},
      {'name':'enemyThree', 'frame':{'x':512, 'y': 1024, 'width': 256, 'height': 256}},
      {'name':'enemyThree', 'frame':{'x':768, 'y': 1024, 'width': 256, 'height': 256}},
      {'name':'enemyThree', 'frame':{'x':1024, 'y': 1024, 'width': 256, 'height': 256}},
      {'name':'enemyThree', 'frame':{'x':1280, 'y': 1024, 'width': 256, 'height': 256}},
      {'name':'enemyThree', 'frame':{'x':1536, 'y': 1024, 'width': 256, 'height': 256}},
      {'name':'enemyThree', 'frame':{'x':1792, 'y': 1024, 'width': 256, 'height': 256}},
      ]

function preload(){
  
  heroSheet = loadSpriteSheet('assets/spriteSheetOldGame.png',heroIdleFrames);
  heroDefault = loadAnimation(heroSheet);
  
  heroSheet = loadSpriteSheet('assets/spriteSheetOldGame.png',heroLeftFrame);
  heroLeft = loadAnimation(heroSheet);
  
  heroSheet = loadSpriteSheet('assets/spriteSheetOldGame.png',heroRightFrame);
  heroRight = loadAnimation(heroSheet);
  
  heroSheet = loadSpriteSheet('assets/spriteSheetOldGame.png',enemyOneFrame);
  enemy1Default = loadAnimation(heroSheet);
  
  heroSheet = loadSpriteSheet('assets/spriteSheetOldGame.png',enemyTwoFrame);
  enemy2Default = loadAnimation(heroSheet);
  
  heroSheet = loadSpriteSheet('assets/spriteSheetOldGame.png',enemyThreeFrame);
  enemy3Default = loadAnimation(heroSheet);
  
  levelOneMusic = loadSound("assets/levelOneTheme.mp3");
  levelTwoMusic= loadSound("assets/levelTwoTheme.mp3");
  levelThreeMusic= loadSound("assets/LevelThreeTheme.mp3");
  deathMusic = loadSound("assets/badEndTheme.mp3");
  winMusic = loadSound("assets/goodEndTheme.mp3");
  enemydeathSound = loadSound("assets/enemyDeathHit.mp3");
  powerUpSound = loadSound("assets/powerUpGet.mp3");
  laserBlastSound = loadSound("assets/laserBlast.mp3");
  heroHitSound = loadSound("assets/heroHitSound.mp3");
  health_one = loadImage("assets/health_one.png");
  health_two = loadImage("assets/health_two.png");
  health_three = loadImage("assets/health_three.png");
  health_four = loadImage("assets/health_four.png");
  health_five = loadImage("assets/health_five.png");
  health_six = loadImage("assets/health_six.png");
  health_full = loadImage("assets/health_full.png");
  
  bg_title = loadImage("assets/TitleScreen.png");
  bg_level1 = loadImage("assets/LevelOne-01.png");
  bg_win = loadAnimation("assets/WinScreen_00000.png", "assets/WinScreen_00019.png");
  bg_lose = loadAnimation("assets/LoseScreen00000.png", "assets/LoseScreen00053.png");
  bg_level2 = loadImage("assets/LevelTwo-01.png");
  bg_level3 = loadImage("assets/LevelThree-01.png");
  bg_countdown = loadImage("assets/countdown.png");
  
  powerSprite = loadAnimation("assets/powerSprite_00000.png", "assets/powerSprite_00007.png")
  
  enemyOneImg=loadImage("assets/skin_enemy_one.png");
  enemyTwoImg=loadImage("assets/skin_enemy_two.png");
  enemyThreeImg=loadImage("assets/skin_enemy_three.png");
  
  //heroDefault = loadAnimation("assets/HeroDefault_00000.png", "assets/HeroDefault_00009.png");
  
  bulletImg = loadImage("assets/skin_bullet.png");
  powerBullet = loadImage("assets/powerBullet.png")
  
 // heroLeft = loadAnimation("assets/HeroLeft_00000.png", "assets/HeroLeft_00008.png");
  heroLeft.looping = false;
 // heroRight = loadAnimation("assets/HeroRight_00000.png", "assets/HeroRight_00008.png");
  heroRight.looping = false;
  
  //enemy1Default = loadAnimation("assets/enemyOneDefault_00000.png", "assets/enemyOneDefault_00008.png");
 // enemy2Default = loadAnimation("assets/enemyTwoDefault_00000.png", "assets/enemyTwoDefault_00009.png");
  //enemy3Default = loadAnimation("assets/enemyThreeDefault_00000.png", "assets/enemyThreeDefault_00009.png");
  
  bg_countdown = loadAnimation("assets/countdown_00000.png", "assets/countdown_00005.png");
}


function setup() {
 
 var tempWidth = canvasMultiplier * 9;
 var tempHeight = canvasMultiplier * 16;
 createCanvas(tempWidth,tempHeight);
 
 bullets = new Group();
 enemies = new Group();
 powerUps = new Group();
 //load an image of hero
 var heroImage=loadImage("assets/skin_hero.png");
 
 
 
 //................................................HERO........................................................................................
 hero = createSprite(width/2,height*.8,30,30);
 
 //Give the hero friction
 hero.friction = 0.85;
 //add all animations to the hero
  hero.addAnimation("heroLeft", heroLeft);
  hero.addAnimation("heroRight", heroRight);
 hero.addAnimation("heroDefault", heroDefault);
 //start animating with default
 hero.changeAnimation("heroDefault");
 //.shapeColor = 'white';
 hero.addImage(heroImage);
 hero.scale=.3;
 //......................................................................
}

function draw(){
  
  switch(gameState){
    case 'startUp':
      //background(bg_title);
      image(bg_title,0,0,360,640);
      text('Press X to Start',width/2,height/2);
      break;
      
    case 'lose':
      text('You Died, Man',width/2,height/2);
      animation(bg_lose,width/2,height/2);
      break;
      
    case 'win':
      text('You Are Done',width/2,height/2);
      animation(bg_win,width/2,height/2);
      break;
      
    case 'levelOne':
     levelOne();
    break;
    
    case 'levelTwo':
      levelTwo();
      
      break;
      
      case 'countDown1':
        //background(12,23,210);
       animation(bg_countdown,width/2,height/2);
        textSize(32);
        //only runs the first time through the countdown
        if(count1Downtimer === 0){
          println(count1Downtimer);
          count1Downtimer = frameCount;
        }
        var flooredCount = floor((frameCount - count1Downtimer)/50);
        //this runs every time
        textAlign(CENTER);
        textSize(14);
        text("Get Ready for Level Two",width/2,60); 
        textSize(200);
        text(3 - flooredCount,width/2,550);
        //advance to level two
        if(flooredCount > 3){
          gameState = "levelTwo";
        }
        
        break;
        
        case 'countDown2':
        //background(12,23,210);
        animation(bg_countdown,width/2,height/2);
        textSize(32);
        //only runs the first time through the countdown
        if(count2Downtimer === 0){
          println(count2Downtimer);
          count2Downtimer = frameCount;
        }
        var flooredCount = floor((frameCount - count2Downtimer)/50);
        //this runs every time
        textAlign(CENTER);
        textSize(14);
        text("Get Ready for Level Three",width/2,60); 
        textSize(200);
        text(3 - flooredCount,width/2,550);
        //advance to level two
        if(flooredCount > 3){
          gameState = "levelThree";
        }
        
        break;
        
      
      
    case 'levelThree':
      levelThree();
      break;
 
}
}
  

/*if(gameState == 'startUp'){
  text('Press X to Start',width/2,height/2);
}else if(gameState == 'levelOne'){
  levelOne();
}else if(gameState == 'levelTwo'){
  levelTwo();
}else if(gameState == 'levelThree'){
  levelThree();
}else if (gameState == 'lose'){
  text('You Died, Man',width/2,height/2);
}else if (gameState == 'win'){
  text('You Are Done',width/2,height/2);
}
*/




function keyPressed(){
  //set movement to each of the arrow keys
  if(keyCode==RIGHT_ARROW){
    hero.setSpeed(12,0);
    hero.changeAnimation("heroRight");
    //start at the beginning
    hero.animation.changeFrame(0);
  }else if(keyCode==LEFT_ARROW){
    hero.setSpeed(12,180);
    hero.changeAnimation("heroLeft");
    //start at the beginning
    hero.animation.changeFrame(0);
  }else if(key==' '){
    laserBlastSound.play();
    if(heroState == 'regular'){
    var bullet = createSprite(hero.position.x,hero.position.y,5,5);
    //speed and direction
    bullet.setSpeed(40,random(265,275));
    //bullet disappears after certain number of frames
    bullet.life = 30;
    bullet.shapeColor = 'white';
    bullet.addImage(bulletImg);
    bullets.add(bullet);
    }
    
    if(heroState == 'power'){
      for(var i = 0;i < 3;i++){
      var bullet = createSprite(hero.position.x,hero.position.y,5,5);
    //speed and direction
    var angle = 255 + (i*15);
    bullet.setSpeed(30,angle);
    //bullet disappears after certain number of frames
    bullet.life = 30;
    bullet.shapeColor = 'white';
    bullet.addImage(powerBullet);
    bullets.add(bullet);
    
    }
  }
  }

}
//start game by pressing x key
function keyTyped(){
  if(key == 'x'){
    gameState='levelOne';
    levelOneMusic.loop();
  }
}


