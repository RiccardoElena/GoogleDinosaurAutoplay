// deleting gameover func
Runner.prototype.gameOver = () => {}

const AutoPlay = () => {
  const jumpSpeed = 50
  const jumpDistance = 120
  const instance = window.Runner.instance_
  const tRex = instance.tRex
  if (tRex.jumping) {
    requestAnimationFrame(AutoPlay)
    return
  }
  const tRexX = tRex.xPos
  const obstacles = instance.horizon.obstacles
  const nextObstacle = obstacles.find(o => o.xPos > tRexX)
  if (nextObstacle && (nextObstacle.xPos - tRexX) <= jumpDistance) {
    tRex.startJump(jumpSpeed)
  }
  requestAnimationFrame(AutoPlay);
}
requestAnimationFrame(AutoPlay)