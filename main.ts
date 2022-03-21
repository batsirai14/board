input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    number += 1
})
input.onGesture(Gesture.Shake, function () {
	
})
let number = 0
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Heart)
sprite = game.createSprite(1, 4)
number = 4
