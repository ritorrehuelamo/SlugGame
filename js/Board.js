function Board() {
  this.x = 0
  this.y = 0
  this._startBoard()
}

var enemy = new Enemy(800, 350)

Board.prototype._startBoard = function() {
  this.board = $('<div>').attr('id', 'score')
  this.board.css({
    top: '25px',
    left: '100px',
    position: 'absolute'
  })
  $('#board').append(this.score)
}

Board.prototype.moveLeft = function() {
  this._flipPlayerRigth()
  this._moveLeftBoard()
}

Board.prototype.moveRight = function() {
  this._flipPlayerLeft()
  this._moveRightBoard()
}


Board.prototype._moveLeftBoard = function() {
  if (parseInt($('#board').css('left')) < 4000) {
    this.x -= 10
    $('#board').css('left', this.x)
  }
}

Board.prototype._moveRightBoard = function() {
  if (parseInt($('#board').css('left')) <= -10) {
    this.x += 10
    $('#board').css('left', this.x)
  }
}

Board.prototype._flipPlayerLeft = function() {
  $('#player').css('transform', 'rotateY(180deg)')
}

Board.prototype._flipPlayerRigth = function() {
  $('#player').css('transform', 'rotateY(360deg)')
}
