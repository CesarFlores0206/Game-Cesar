function levelTwo(){
  
  if (frameCount%15 === 0){
    var enemy = createSprite(random(width),0,40,random(20,120));
    enemy.addAnimation("enemy2Default", enemy2Default);
    enemy.setSpeed(10,random(80,100));
    enemy.life=200;
    enemy.shapeColor='green';
    enemy.addAnimation("enemy2Default", enemy2Default);
    enemy.addImage(enemyTwoImg);
    
    enemies.add(enemy);
    enemy.scale = .5;
    
  }
  
  if (frameCount%500 === 0){
    var powerUp = createSprite(random(width),0,40,40);
    powerUp.setSpeed(5,90);
    powerUp.life=200;
    powerUp.shapeColor='red';
    powerUp.addAnimation("powerSprite", powerSprite);
    //powerUp.addImage(enemyOneImg);
    
    powerUps.add(powerUp);
  }
  
  for(var i = 0;i < enemies.length;i++ ){
    if(enemies[i].position.x > width|| enemies[i].position.x < 0){
      enemies[i].velocity.x*=-1;
    }
  }
  
  
  background(bg_level2);
  
  enemies.overlap(bullets,enemyHit);
  enemies.overlap(hero,heroHit);
  powerUps.overlap(hero,powerHit);
  
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