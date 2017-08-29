function Player(x, y) {
	this.x = x
	this.y = y
	this.life = 100
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
