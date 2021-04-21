input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let wall = game.createSprite(0, 0)
wall = game.createSprite(0, 1)
wall = game.createSprite(0, 2)
wall = game.createSprite(0, 3)
wall = game.createSprite(0, 4)
wall = game.createSprite(4, 0)
wall = game.createSprite(4, 1)
wall = game.createSprite(4, 2)
wall = game.createSprite(4, 3)
wall = game.createSprite(4, 4)
let car = game.createSprite(randint(1, 3), 0)
let car_2 = game.createSprite(randint(1, 3), 0)
basic.forever(function () {
    if (car.isTouching(player)) {
        game.gameOver()
    }
    if (car_2.isTouching(player)) {
        game.gameOver()
    }
    basic.pause(100)
    car.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        car.move(1)
        basic.pause(500)
    }
    if (car.isTouchingEdge()) {
        car.delete()
    }
    basic.pause(100)
    car.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        car.move(1)
        basic.pause(500)
    }
    if (car.isTouchingEdge()) {
        car.delete()
    }
})
