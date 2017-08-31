function Bullet(x, y) {
  this.x = (x * -1) + 325
  this.y = y + 460
	this.speed = Math.random()*50 + 20
	this.bullet = $('<div>').addClass('shot')
	.css({
    top: this.y,
    left: this.x,
    position: 'absolute'
  })
  $('#board').append(this.bullet)
	this.remove = false
}

Bullet.prototype.update = function() {
  this.x += this.speed
	this.bullet.css({
    top: this.y,
    left: this.x,
  })
	if($('.shot').collision('#enemy').length > 0){
		this.bullet.remove()
		this.remove = true
	}
}

Bullet.prototype.enemyCollision = function(i) {
  if ($('#' + i).collision('#enemy').length >= 0) {
    return this.remove = true
  }
}
