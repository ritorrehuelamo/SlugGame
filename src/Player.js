function Player (x, y) {
	this.x = x
	this.y = y
	this.score = 0
	this.lifes = 3
	this.player = $('<div>').attr('id', 'player')
	this.player.css({top: this.x, left: this.y, position: 'absolute'})
	$('#board').append(this.player)
}

Player.prototype.restart = function (x, y, score, lifes) {
	this.x = x
	this.y = y
	this.score = score
	this.lifes = lifes
}

Player.prototype.moveLeft = function () {
	$('#board').animate({left: this.x - 100}, 1500 )
	this.x = parseInt($('#player').css('left'))
	this.x += 10
	$('#player').css('left', this.x + 'px')
}

Player.prototype.moveRight = function () {
	$('#board').animate({left: this.x + 100}, 1500 )
	this.x = parseInt($('#player').css('left'))
	this.x -= 10
	$('#player').css('left', this.x + 'px')
}

Player.prototype.jump = function () {

}
