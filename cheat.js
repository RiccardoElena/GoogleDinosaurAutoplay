// deleting gameover func
Runner.prototype.gameOver = () => {}
// autoplay func
const AutoPlay = () => {
  // setupping jump
  const jumpSpeed = 50
  const jumpDistance = 120
  // setupping important objects
  const instance = window.Runner.instance_
  const tRex = instance.tRex
  // recursive call while jumping
  if (tRex.jumping) {
    requestAnimationFrame(AutoPlay)
    return
  }
  // setupping  objs locations
  const tRexX = tRex.xPos
  const obstacles = instance.horizon.obstacles
  const nextObstacle = obstacles.find(o => o.xPos > tRexX)
  // recursive call when & while t rex near to an obstacle
  if (nextObstacle && (nextObstacle.xPos - tRexX) <= jumpDistance) {
    tRex.startJump(jumpSpeed)
  }
  // default recursive call 
  requestAnimationFrame(AutoPlay);
}
// first call
requestAnimationFrame(AutoPlay)