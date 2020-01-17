class Background{
  constructor(scene, x, y, width, height, sprite, minSpd, maxSpd, acceleration){
    this.bg = scene.add.tileSprite(x, y, width, height, sprite)
    this.speed = minSpd
    this.minSpd = minSpd
    this.maxSpd = maxSpd
    this.acceleration = acceleration
  }

  update(cursors){

    if(cursors.up.isDown){
      // "Accelerate"
      this.speed  += -this.acceleration;
      this.speed  = Math.max(this.speed , -this.maxSpd);
    }
    else if(cursors.down.isDown){
      // "Decelerate"
      this.speed  += this.acceleration * 2;
      this.speed  = Math.min(this.speed , -this.minSpd);
    }
    else{
      this.speed  += this.acceleration;
      this.speed  = Math.min(this.speed , -this.minSpd);
    }
    this.bg.tilePositionY += this.speed ;
  }

};
