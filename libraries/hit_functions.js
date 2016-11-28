function enemyHit(enemy,bullet){
  
  
  for(var i=0; i<explosionDensity; i++) {
  var p = createSprite(bullet.position.x, bullet.position.y,3,3);
  p.setSpeed(random(3,5), random(360));
  p.friction = 0.95;
  p.life = 15;
  enemydeathSound.play();
  }
  
  
  enemy.remove();
  bullet.remove();
  score++;
  
  if(score == level1ScoreAdvance){
    levelOneMusic.stop();
      levelTwoMusic.loop();
    gameState= 'countDown1';
    heroState= 'regular';
  }
  if(score == level2ScoreAdvance){
     levelTwoMusic.stop();
      levelThreeMusic.loop();
    gameState = 'countDown2';
    heroState= 'regular';
  }
 
  if(score >= 50){
    levelThreeMusic.stop();
    winMusic.loop();
    gameState='win';
    
  }
  
}
function heroHit(enemy,hero){
  heroState = 'regular';
  heroHealth--;
  heroHitSound.amp(4);
  heroHitSound.play();
  if(heroHealth<=0){
    levelOneMusic.stop();
     levelTwoMusic.stop();
    levelThreeMusic.stop();
    deathMusic.loop();
    gameState='lose';
   
  }
  
  enemy.remove();
  hero.shapeColor='red';
  
}

function powerHit(powerUp,hero){
  powerUp.remove();
  heroState = "power";
  powerUpSound.amp(4);
  powerUpSound.play();
}