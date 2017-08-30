function Bullet (x, y, strength) {
	this.x = x
	this.y = y
	this.strength = strength
	// this._generateBullet()
}

Bullet.prototype._generateBullet = function () {
	this.bullet = $('<div>').attr('id', 'bullet')
	this.bullet.css({
		top: this.x,
		left: this.y,
		position: 'absolute'
	})
	$('#board').append(this.bullet)
}

Bullet.prototype.shotPlayer = function (pY, eY) {
	console.log(pY, eY)
	this.bullet = $('<div>').attr('id', 'shot')
	this.bullet.css({
		top: this.x,
		left: pY,
		position: 'absolute'
	})
	$('#board').append(this.bullet)
	this._enemyImpact(eY)
}

Bullet.prototype._enemyImpact = function (eY) {
	if (this.y <= eY) { this.y -= 10 }
	$('#bullet').css('left', this.y)
}
