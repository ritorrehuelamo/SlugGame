function Enemy(x, y) {
  this.x = x
  this.y = y
  this.boardX = 0
  this.attack = 50
	this.health = 50
  this.direction = ''
  this._generateEnemy(this.x, this.y)
}

Enemy.prototype._generateEnemy = function() {
  this.enemy = $('<div>').attr('id', 'enemy')
  this.enemy.css({
    top: this.x,
    left: this.y,
    position: 'absolute'
  })
  $('#board').append(this.enemy)
}

Enemy.prototype.move = function(x) {
  this.boardX = x
  if (this.direction === 'left') {
    this._moveLeft()
  } else {
    this._moveRight()
  }
  if (this._enemyPosition() <= 750) {
    this.direction = 'left'
  }
  if (this._enemyPosition() >= 850) this.direction = 'right'
}

Enemy.prototype.attack = function () {
	return this.attack
}

Enemy.prototype.receiveDamage = function (damage) {
	this.health -= damage
}

Enemy.prototype._enemyPosition = function() {
  return parseInt($('#enemy').css('left'))
}

Enemy.prototype._moveRight = function() {
	// console.log(this.x, this.boardX, this.x - this.boardX, 'right')
  this._flipEnemyLeft()
  this.x -= 10
  $('#enemy').css('left', this.x)
}

Enemy.prototype._moveLeft = function() {
	// console.log(this.x, this.boardX, this.x - this.boardX, 'left')
  this._flipEnemyRight()
  this.x += 10
  $('#enemy').css('left', this.x)
}

Enemy.prototype._flipEnemyRight = function() {
  $('#enemy').css('transform', 'rotateY(360deg)')
}

Enemy.prototype._flipEnemyLeft = function() {
  $('#enemy').css('transform', 'rotateY(180deg)')
}
