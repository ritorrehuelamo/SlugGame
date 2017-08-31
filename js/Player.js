function Player(x, y) {
	this.x = x
	this.y = y
	this.score = 0
	this.health = 100
	this.strength = 10
	this._startPlayer()
}

Player.prototype._startPlayer = function () {
	this.player = $('<div>').attr('id', 'player')
	this.player.css({
		top: this.x,
		left: this.y,
		position: 'fixed'
	})
	$('#board').append(this.player)
}

// Player.prototype.player2EnemyColl = function () {
// 	if($('#player').collision('#enemy').length > 0){
// 		this.receiveDamage(enemy.attack)
// 		if(this.health < 0) { console.log('YOU LOSE!!') }
// 	}
// }

Player.prototype.attack = function () {
	return this.strength
}

Player.prototype.receiveDamage = function (damage) {
		this.health -= damage
}
