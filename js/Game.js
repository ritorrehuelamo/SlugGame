$(document).ready(function() {
  var keys = {}
  var board = new Board()

	var fps = 15

	setInterval(update, 1000 / fps)

	function update() {
	  checkControls()
		enemy.move()
		player.player2EnemyColl()
	}

	$(document).keydown(function(e) {
	  keys[e.keyCode] = true;
	}).keyup(function(e) {
	  delete keys[e.keyCode]
	})

	function checkControls() {
	  if (keys[68]) moveLeftPlayer()
		else if (keys[65]) moveRightPlayer()
		else if (keys[32]) shootBoard()
	}

	function moveLeftPlayer() { board.moveLeft() }
	function moveRightPlayer() { board.moveRight() }
	function shootBoard() { board.shot() }
})
