$(document).ready(function() {
  var keys = {}

  var board = new Board()
	var player = new Player(350, 200)

	var fps = 15

	setInterval(update, 1000 / fps)

	function update() {
	  checkControls()
		board.enemyPosition()
	}

	$(document).keydown(function(e) {
	  keys[e.keyCode] = true;
	}).keyup(function(e) {
	  delete keys[e.keyCode]
	})

	function checkControls() {
	  if (keys[68]) {
	    moveLeftPlayer()
	  } else if (keys[65]) {
	    moveRightPlayer()
	  } // else if (keys[87]) {
	  //   player.jump()
	  // }
	}

	function moveLeftPlayer(){
		board.moveLeft()
	}

	function moveRightPlayer() {
		board.moveRight()
	}
})
