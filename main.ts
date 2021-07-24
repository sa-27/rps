input.onButtonPressed(Button.A, function () {
    wincount = wincount + 1
    if (wincount == 3) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    losecount = losecount + 1
    if (wincount == 3) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    sign = randint(0, 2)
    if (sign == 0) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (sign == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let sign = 0
let losecount = 0
let wincount = 0
wincount = 0
losecount = 0
basic.forever(function () {
	
})
