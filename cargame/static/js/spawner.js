class Spawner{
  constructor(scene, config, choices, sprite, minSpd, maxSpd, acceleration){
    this.scene = scene;
    this.spawnlist = scene.physics.add.group(config);
    this.config = config;
    this.choices = choices;
    this.sprite = sprite;
    this.minSpd = minSpd;
    this.maxSpd = maxSpd;
    this.spdThreshold = this.maxSpd + this.maxSpd * 2/3
    this.acceleration = acceleration;
    this.speed = minSpd;
    this.timer = scene.time.addEvent({loop: true});
    this.time = 0.0;
    this.start_time = 0.0;
    this.progression = PROGRESSION_SECS;
  }

  update(cursors){
    this.addDifficulty();

    if (this.spawnlist.getLength() == 0){
      var choice = randomChoice(this.choices);
      this.spawnObjects(choice, this.scene, this.sprite, this.spawnlist);
    }

    if(cursors.up.isDown){
      this.speed += this.acceleration;
      this.speed = Math.min(this.speed, this.maxSpd);
    }
    else if(cursors.down.isDown){
      this.speed += -this.acceleration * 2;
      this.speed = Math.max(this.speed, this.minSpd);
    }
    else{
      this.speed += -this.acceleration;
      this.speed = Math.max(this.speed, this.minSpd);
    }

    var objects = this.spawnlist.getChildren();
    this.updateObjectLocation(objects, this.speed);
    this.checkObjectLocation(objects, this.config);
  }

  addDifficulty(){
    this.time = this.timer.getElapsedSeconds();
    if (this.time - this.start_time >= this.progression){
      var addSpd = this.maxSpd * 0.2
      if (this.maxSpd + addSpd <= this.spdThreshold){
        this.maxSpd = this.maxSpd + addSpd
        this.minSpd = this.minSpd + addSpd * 1.5
        this.start_time = this.time
      }
    }
  }

  spawnObjects(choice, scene, sprite, spawnlist) {
    choice.forEach(
      function(value, index, array){
        var spawn = scene.physics.add.image(value.x, value.y, sprite);
        spawnlist.add(spawn);
      }
    );
  }

  checkObjectLocation(object, config){
    object.forEach(
      function(value, index, array){
        if (value.y >= config.height){
          value.destroy();
        }
      }
    );
  }

  updateObjectLocation(object, speed){
    object.forEach(
      function(value, index, array){
        value.setVelocityY(speed);
      }
    );
  }
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
