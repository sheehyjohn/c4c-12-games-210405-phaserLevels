import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',     //div in index.html
  backgroundColor: '#33A5E7',
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 750 },      // Demo - change 7 and add x
      debug: true,
      debugShowVelocity: true,
      debugShowBody: true,
      debugShowStaticBody: true,
    }
  },
};
