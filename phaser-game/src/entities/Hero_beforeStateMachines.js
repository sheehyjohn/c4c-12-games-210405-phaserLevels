/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';

class Hero extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'hero-run-sheet', 0);    //0=default frame

    scene.add.existing(this);               // adds game object to scene
    scene.physics.add.existing(this);       // adds game object to the physics world

    this.anims.play('hero-running');

    this.body.setCollideWorldBounds(true);
    this.body.setSize(12, 40);
    this.body.setOffset(12, 23);
    this.body.setMaxVelocity(250, 400);
    this.body.setDragX(750);

    this.keys = scene.cursorKeys;
    }

    preUpdate(time, delta) {
    super.preUpdate(time, delta);

        if (this.keys.left.isDown) {
            //this.body.setVelocityX(-250);
            this.body.setAccelerationX(-1000);
            this.setFlipX(true);
            this.body.offset.x = 8;
        } else if (this.keys.right.isDown) {
            //this.body.setVelocityX(250);
            this.body.setAccelerationX(1000);
            this.setFlipX(false);
            this.body.offset.x = 12;
        } else {
            //this.body.setVelocityX(0);
            this.body.setAccelerationX(0);
        }

        if (this.body.onFloor()) {
            this.canDoubleJump = false;
          }
      
          if (this.body.velocity.y > 0) {
            this.isJumping = false;
          }
        
        const didPressJump = Phaser.Input.Keyboard.JustDown(this.keys.up);

        // if (didPressJump ) {                         // Check if on contact with Floor or you get Flappy Bird
        /* // Single Jump
        if (didPressJump && this.body.onFloor()) {            
          this.body.setVelocityY(-400);
        }
        */
        if (didPressJump) {
            if (this.body.onFloor()) {
                this.isJumping = true;          // Logic for jumping on a fall
                this.canDoubleJump = true;
                this.body.setVelocityY(-400);
            } else if (this.canDoubleJump) {
                this.isJumping = true;
                this.canDoubleJump = false;
                this.body.setVelocityY(-300);
            }
        }


        if (!this.keys.up.isDown && this.body.velocity.y < -150 && this.isJumping) {
            this.body.setVelocityY(-150);
        }
        
    }

}

export default Hero; 