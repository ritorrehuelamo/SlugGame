function Board(x, y){
	Positionable.call(this, x, y)
}


Board.prototype = Object.create(Positionable.prototype)
Board.prototype.constructor = Board

Board.prototype.boardMove = function () {
	$('#board').css('left', (this.x * (-1)))
}
