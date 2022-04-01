radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
radio.setGroup(0)
basic.forever(function () {
	
})
