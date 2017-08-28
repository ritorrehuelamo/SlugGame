function Board () {
	this.score = SCORE
	this.board = $('<div>').attr('id', 'score')
	this.board.css({
		top: '25px',
		left: '100px',
		position: 'absolute',
	}),
	$('#board').append(this.board)
}

Board.prototype.updateScore = function () {
	$()
	$('#score').html(this.score += 1)
}

Board.prototype.updateScroll = function (a) {
	var initial = 0
	if (a === 'right')
		console.log(a)
	if (a === 'left')
		console.log(a)

		//$('#board').css('left', player.y -= 10 + 'px')
		// $('#board').css('left', player.y += + 'px')
}
