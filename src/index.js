$(document).ready(function() {
  var keys = {}
	var board = new Board()
  var player = new Player(INITIAL_TOP, INITIAL_LEFT, 0.5)

	var fps = FPS

  setInterval(update, 1000/fps)

	// player.renderPlayer()

  function update() {
		board.updateScore()
		board.updateScroll()
    checkControls()
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
    } else if (keys[87]) {
      player.jump()
    }
  }

	function renderPlayer () {

	}

	function moveLeftPlayer(){
		player.flipPlayerRigth()
		board.updateScroll('left')
		player.moveLeft()
	}

	function moveRightPlayer () {
		player.flipPlayerLeft()
		board.updateScroll('right')
		player.moveRight()
	}

}) // $(document).ready final
