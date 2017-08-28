function Board() {
  this.x = 0
  this.y = 0
  this.score = 0
  this._startBoard()
}

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
  this.flipPlayerRigth()
  this.x = parseInt($('#board').css('left'))
	if (parseInt($('#board').css('left')) < 4000) {
		this.x -= 10
		$('#board').css('left', this.x)
	}
}

Board.prototype.moveRight = function() {
  this.flipPlayerLeft()
	this.x = parseInt($('#board').css('left'))
  if (parseInt($('#board').css('left')) <= 0) {
    this.x += 10
    $('#board').css('left', this.x)
  }
}

Board.prototype.flipPlayerLeft = function() {
  $('#player').css('transform', 'rotateY(180deg)')
}

Board.prototype.flipPlayerRigth = function() {
  $('#player').css('transform', 'rotateY(360deg)')
}
