$(document).ready(function() {
  var keys = {}
  var bullets = []

  var board = new Board()
  var player = new Player(325, 200)

  var fps = 15

  setInterval(update, 1000 / fps)

  function update() {
    checkControls()
    enemy.move()
    bullets.forEach((e) => {
			e.update()
			if(e.remove === true) e.enemyCollision()
    })
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

  function moveLeftPlayer() {
    board.moveLeft()
  }

  function moveRightPlayer() {
    board.moveRight()
  }

  function shootBoard() {
    bullets.push(new Bullet(board.x, board.y))
  }

})
