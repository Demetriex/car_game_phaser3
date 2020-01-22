var player;
var background;
var gameStart = true;
var gameOver = false;

function preload (){
  this.physics.world.setBounds(128, 600, 344, 200)
  this.load.image('Car', 'static/assets/car.png');
  this.load.image('Car2', 'static/assets/car2.png');
  this.load.image('Road', 'static/assets/road.png');
};

function create (){
  SPACEBAR = this.input.keyboard.addKey('SPACE');

  gameStartText = this.add.text(
    this.game.config.width/2,
    this.game.config.height/2,
    "Arrow keys to move",
    textFormat
  );

  startInputText = this.add.text(
    this.game.config.width/2,
    this.game.config.height/2+ 100,
    "Press Space to Start",
    textFormat
  );

  gameOverText = this.add.text(
    this.game.config.width/2,
    this.game.config.height/2,
    "GAME OVER",
    textFormat
  );

  inputText = this.add.text(
    this.game.config.width/2,
    this.game.config.height/2 + 100,
    "Press space to play again",
    textFormat
  );

  gameStartText.setOrigin(0.5);
  gameStartText.setDepth(1);
  gameStartText.setVisible(true);

  startInputText.setOrigin(0.5);
  startInputText.setDepth(1);
  startInputText.setVisible(true);

  gameOverText.setOrigin(0.5);
  gameOverText.setDepth(1);
  gameOverText.setVisible(false);

  inputText.setOrigin(0.5);
  inputText.setDepth(1);
  inputText.setVisible(false);

  background = new Background(
    this,
    config.width/2,
    config.height/2,
    0, 0, 'Road', 2, 15, 0.1
  );

  player = new Player(
    this,
    config.width/2,
    config.height-100,
    'Car',
    config.playerSpeed
  );

  spawner = new Spawner(
    this,
    config,
    spawnpoints,
    'Car2',
    100,
    500,
    10
  )

  scorer = new ScoringSystem(this);

  this.physics.add.collider(player.object, spawner.spawnlist, hitCar, null, this);

};

function update(){
  cursors = this.input.keyboard.createCursorKeys();

  if (gameStart){
    if (SPACEBAR.isDown){
      gameStartText.setVisible(false);
      startInputText.setVisible(false);
      gameStart = false;
    }
    return;
  }

  if (gameOver){
    gameOverText.setVisible(true);
    inputText.setVisible(true);
    if (SPACEBAR.isDown){
      this.events.off();﻿
      this.registry.destroy();
      this.scene.restart();
      gameOver = false;
      gameStart = true;
    }
    return;
  }

  scorer.update(cursors);
  player.update(cursors);
  spawner.update(cursors);
  background.update(cursors);
}

function hitCar(player, car){
  gameOver = true;
}
