input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
function spawncar () {
    carX = randint(1, 2)
    carsprite1 = [game.createSprite(carX, 2), game.createSprite(carX, 0), game.createSprite(carX, 1)]
    carX = randint(2, 3)
    carsprite2 = [game.createSprite(carX, 2), game.createSprite(carX, 0), game.createSprite(carX, 1)]
    amountofcars += 0
}
function spawncars () {
	
}
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let amountofcars = 0
let carsprite2: game.LedSprite[] = []
let carsprite1: game.LedSprite[] = []
let carX = 0
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
spawncar()
basic.forever(function () {
    basic.pause(500)
    for (let value of carsprite1) {
        if (value.isTouching(player)) {
            game.gameOver()
        }
        if (value.isTouchingEdge()) {
            value.delete()
            amountofcars += 1
        }
        value.change(LedSpriteProperty.Y, 1)
    }
    for (let value of carsprite2) {
        if (value.isTouching(player)) {
            game.gameOver()
        }
        if (value.isTouchingEdge()) {
            value.delete()
            amountofcars += 1
        }
        value.change(LedSpriteProperty.Y, 1)
    }
    if (amountofcars >= 3) {
        spawncar()
    }
})
