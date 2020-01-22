class Player{
  constructor(scene, x, y, sprite, speed){
    this.object = scene.physics.add.image(x, y, sprite);
    this.speed = speed;
    this.object.setCollideWorldBounds(true);
  }

  update(cursors){
    this.object.setVelocity(0);
    this.object.setVelocityY(-100);
    if (cursors.up.isDown){
        this.object.setVelocityY(-this.speed);
    }
    else if(cursors.down.isDown){
        this.object.setVelocityY(this.speed);
    }
    if (cursors.left.isDown){
        this.object.setVelocityX(-this.speed);
    }
    else if(cursors.right.isDown){
        this.object.setVelocityX(this.speed);
    }
  }
}
