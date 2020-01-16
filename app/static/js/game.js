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
