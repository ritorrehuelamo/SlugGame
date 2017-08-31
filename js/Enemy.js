function Enemy(x, y) {
  this.x = x
  this.y = y
  this.attack = 10
  this.health = 50
  this.direction = ''
  this._generateEnemy(this.x, this.y)
}

Enemy.prototype._generateEnemy = function(x, y) {
  this.enemy = $('<div>').attr('id', 'enemy')
  this.enemy.css({
    top: y,
    left: x,
    position: 'absolute'
  })
  $('#board').append(this.enemy)
}

Enemy.prototype.move = function() {
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

Enemy.prototype.enemy2PlayerColl = function() {
  if ($('#enemy').collision('#player').length > 0) {
    this.receiveDamage(player.attack)
    if (this.health < 0) player.score += 25
  }
}

Enemy.prototype.attack = function() {
  return this.attack
}

Enemy.prototype.receiveDamage = function(damage) {
  console.log('HEALTH -> ' + this.health)
  if (this.health > 0) this.health -= damage
  else this._enemyDied()
}

Enemy.prototype._enemyPosition = function() {
  return parseInt($('#enemy').css('left'))
}

Enemy.prototype._moveRight = function() {
  this._flipEnemyLeft()
  this.x -= 10
  $('#enemy').css('left', this.x)
}

Enemy.prototype._moveLeft = function() {
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

Enemy.prototype._enemyDied = function() {
  $('#enemy').remove()
}
