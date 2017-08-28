function Enemy (x, y) {
	this.x = x
	this.y = y
	this.life = 10
	this._generateEnemy(this.x, this.y)
}

Enemy.prototype._generateEnemy = function () {
	this.enemy = $('<div>').attr('id', 'enemy')
	this.enemy.css({
		top: this.x,
		left: this.y,
		position: 'fixed'
	})
	$('#board').append(this.enemy)
}

Enemy.prototype.move = function () {
	//this._moveLeft()
	//this._moveRight()
}

Enemy.prototype._moveRight = function () {
	this.x = parseInt($('#enemy').css('left'))
	this.x -= 10
	$('#board').css('left', this.x)
}

Enemy.prototype._moveLeft = function () {
	this.x = parseInt($('#enemy').css('left'))
	this.x += 10
	$('#board').css('left', this.x)
}
