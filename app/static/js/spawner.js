class Spawner{
  constructor(scene, config, choices, sprite, minSpd, maxSpd, acceleration){
    this.scene = scene;
    this.spawnlist = scene.physics.add.group(config);
    this.config = config;
    this.choices = choices;
    this.sprite = sprite;
    this.minSpd = minSpd;
    this.maxSpd = maxSpd;
    this.acceleration = acceleration;
    this.speed = minSpd;
  }

  update(cursors){
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
      this.speed += this.acceleration;
      this.speed = Math.min(this.speed, this.minSpd);
    }

    var objects = this.spawnlist.getChildren();
    this.updateObjectLocation(objects, this.speed);
    this.checkObjectLocation(objects, this.config);
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
        value.y += speed
      }
    );
  }
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
