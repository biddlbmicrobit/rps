let Player_Select = 0
let Rock_Paper_Scissors = 0
input.onButtonPressed(Button.A, function () {
    Player_Select = 1
})
input.onButtonPressed(Button.AB, function () {
    Player_Select = 3
})
input.onButtonPressed(Button.B, function () {
    Player_Select = 2
})
input.onGesture(Gesture.Shake, function () {
    Rock_Paper_Scissors = 0
    Player_Select = 0
    basic.clearScreen()
    basic.showString("Rock Paper Scissors SHOOT!")
    basic.pause(1000)
    Rock_Paper_Scissors = randint(1, 3)
    if (1 == Rock_Paper_Scissors) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
    if (2 == Rock_Paper_Scissors) {
        basic.showLeds(`
            # . . . #
            # # . # .
            . # # . .
            # # . # .
            # . . . #
            `)
    }
    if (3 == Rock_Paper_Scissors) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
    if (true) {
    	
    }
    if (1 == Player_Select && "2" == Rock_Paper_Scissors || (2 == Player_Select && "3" == Rock_Paper_Scissors || 3 == Player_Select && "1" == Rock_Paper_Scissors)) {
        basic.showString("You Win!")
    } else {
        basic.showString("You Lose!")
    }
})
