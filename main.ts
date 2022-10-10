basic.forever(function () {
    music.playMelody("D E F G A - A C5 ", 120)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # #
        . . . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . . # # .
        . # . . #
        . # . . #
        . # . . #
        . . # # .
        `)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
})
