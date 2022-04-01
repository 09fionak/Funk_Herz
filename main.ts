radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("hallo!")
    basic.pause(1000)
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
