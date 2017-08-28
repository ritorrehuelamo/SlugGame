function Board () {
	this.score = SCORE
}

Board.prototype.updateScore = function () {
	$('#score').html(this.score += 1)
}

Board.prototype.updateScroll = function () {
	if (player.x > SCROLL_HEIGHT) {
		$('#board').css('height', function(){
			return SCROLL_HEIGHT += SCROLL_HEIGHT
		})
	}
}
