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
      player.moveLeft()
    } else if (keys[65]) {
      player.moveRight()
    } else if (keys[87]) {
      player.jump()
    }
  }

	function renderPlayer () {

	}

}) // $(document).ready final
