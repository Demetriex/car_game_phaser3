var player;
var background;

spawnpoints = [
  [{x: 320, y: 0}],
  [{x: 190, y: 0}],
  [{x: 450, y: 0}],
  [{x: 320, y: 0}, {x: 190, y: 0}],
  [{x: 190, y: 0}, {x: 450, y: 0}],
  [{x: 450, y: 0}, {x: 320, y: 0}]
]

function preload (){
  this.physics.world.setBounds(128, 0, 384)
  this.load.image('Car', 'static/assets/car.png');
  this.load.image('Car2', 'static/assets/car2.png');
  this.load.image('Road', 'static/assets/oceanroad.png');
};

function create (){
  background = new Background(
    this,
    config.width/2,
    config.height/2,
    0, 0, 'Road', 2, 10, 0.2
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
    3,
    10,
    0.5
  )
};

function update(){
  cursors = this.input.keyboard.createCursorKeys();
  player.update(cursors);
  spawner.update(cursors);
  background.update(cursors);
}
