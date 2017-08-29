function Player(x, y) {
	this.x = x
	this.y = y
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

Player.prototype.attack = function () {
	return this.strength
}

Player.prototype.receiveDamage = function (damage) {
		this.health -= damage
}
