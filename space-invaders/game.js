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

let bullet_timer = 0;

function preload() {
	this.load.image('player', 'assets/player.png');
	this.load.image('bullet', 'assets/bullet.png');
	this.load.image('alien', 'assets/alien.png');
}

function create() {
	cursors = this.input.keyboard.createCursorKeys();
	player = this.physics.add.sprite(128,700,'player');
	player.setCollideWorldBounds(true);
	
	bullets = this.physics.add.group();

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
	
	if(cursors.space.isDown) {
		var t = game.getTime();
		if(t > bullet_timer + 1000) {
			var bullet = this.physics.add.sprite(player.x, player.y, 'bullet');
			bullets.add(bullet);
			bullet.setVelocityY(-600);
			bullet_timer = game.getTime();
		}
	}
}
