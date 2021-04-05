import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

 // init(data) {} //beyond scope of course

    preload() {
        //this.load.image('logo', 'assests/phase3-logo.png');
        this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
            frameWidth: 32,
            frameHeight: 64,      
        //endframe/startFrame are options here
        });
    }

    create(data) {
        this.anims.create({
            key: 'hero-running',
            frames: this.anims.generateFrameNumbers('hero-run-sheet'),
            frameRate: 10,      // 10 times per second - Demo 100 & 1
            repeat: -1,
          });
      
          this.player = this.physics.add.sprite(400, 300, 'hero-run-sheet');
          this.player.anims.play('hero-running');
          this.player.body.setCollideWorldBounds(true);
  }

  update(time, delta) {}  //updates at (ideally) 60fps
                          // delta - time since last frame
}

export default Game;


 