var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 800,
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: true
      }
   },
    scene: {
      preload: preload,
      create: create,
      update: update
    },
    playerSpeed: 400
};

var game = new Phaser.Game(config);

var spawnpoints = [
  [{x: 300, y: 0}],
  [{x: 180, y: 0}],
  [{x: 420, y: 0}],
  [{x: 300, y: 0}, {x: 180, y: 0}],
  [{x: 180, y: 0}, {x: 420, y: 0}],
  [{x: 430, y: 0}, {x: 300, y: 0}]
]

var textFormat = {
  fontFamily: '"Verdana"',
  fontSize: '40px',
  color: '#fff',
  stroke: '#000',
  strokeThickness: 5
}
