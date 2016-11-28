function levelThree(){
  
  if (frameCount%75 === 0){
    var enemy = createSprite(random(width),height,40,25);
    enemy.setSpeed(random(5,6),270);
    enemy.life=200;
    enemy.shapeColor='purple';
    //enemy.addImage(enemyThreeImg);
    enemy.addAnimation("enemy3Default", enemy3Default);
    enemies.add(enemy);
    enemy.scale = .2
  }
  
  
  for(var i = 0;i < enemies.length;i++ ){
    if(random(100)<60){
      //percent of the time
      enemies[i].velocity.x+=random(-1,1);
    }
  }
  
  background(bg_level3);
  
  enemies.overlap(bullets,enemyHit);
  enemies.overlap(hero,heroHit);
  
  textSize(32);
  text("score"+score,10,30);
  text("health"+heroHealth,10,60);
  switch(heroHealth){
    case 1:
      image(health_one,40,60);break;
    case 2:
        image(health_two,40,60);break;
    case 3:
      image(health_three,40,60);break;
    case 4:
      image(health_four,40,60);break;
    case 5:
      image(health_five,40,60);break;
    case 6:
    image(health_six,40,60);break;
    case 7:
      image(health_full,40,60);break;
  }
  
  println(hero.getAnimationLabel());
  println(hero.animation.getFrame());
  println(hero.animation.getLastFrame());
  
  //find out if we are playing left turn animation and is animation over?
  if(hero.getAnimationLabel() == "heroLeft" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("heroDefault");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  
  if(hero.getAnimationLabel() == "heroRight" && hero.animation.getFrame() === hero.animation.getLastFrame()){
    hero.changeAnimation("heroDefault");
    //start at the beginning
    hero.animation.changeFrame(0);
  }
  
  drawSprites();
  
  
  
  
}
