class Background{
  constructor(scene, x, y, width, height, sprite, minSpd, maxSpd, acceleration){
    this.bg = scene.add.tileSprite(x, y, width, height, sprite)
    this.bgSpeed = minSpd
    this.minSpd = minSpd
    this.maxSpd = maxSpd
    this.acceleration = acceleration
  }

  update(cursors){

    if(cursors.up.isDown){
      // "Accelerate"
      this.bgSpeed += -this.acceleration;
      this.bgSpeed = Math.max(this.bgSpeed, -this.maxSpd);
    }
    else if(cursors.down.isDown){
      // "Decelerate"
      this.bgSpeed += this.acceleration * 2;
      this.bgSpeed = Math.min(this.bgSpeed, -this.minSpd);
    }
    else{
      this.bgSpeed += this.acceleration;
      this.bgSpeed = Math.min(this.bgSpeed, -this.minSpd);
    }
    this.bg.tilePositionY += this.bgSpeed;
  }

};
