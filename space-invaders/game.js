//Space Invaders

var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: false
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

const game = new Phaser.Game(config);

let player;
let aliens;
let bullets;

function preload() {
	this.load.image('player', 'assets/player.png');
	this.load.image('bullet', 'assets/bullet.png');
	this.load.image('alien', 'assets/alien.png');
}

function create() {
	cursors = this.input.keyboard.createCursorKeys();
	player = this.physics.add.sprite(128,640,'player');
	player.setCollideWorldBounds(true);

}

function update() {
	player.setVelocityX(0);
	if(cursors.left.isDown) {
		player.setVelocityX(-640);
	}
	else if(cursors.right.isDown) {
		player.setVelocityX(640);
	} 
	else {
		player.setVelocityX(0);
	}
	
	if(cursors.space.isUp) {
		
	}
}