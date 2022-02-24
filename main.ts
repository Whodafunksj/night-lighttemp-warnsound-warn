basic.forever(function () {
    if (input.lightLevel() > 105) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (input.soundLevel() > 60) {
        music.playTone(523, music.beat(BeatFraction.Breve))
        basic.pause(1000)
        music.stopAllSounds()
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    if (input.temperature() < -10) {
        music.setVolume(255)
        music.playMelody("C D C D C D C D ", 389)
        basic.pause(5000)
        music.stopAllSounds()
    } else {
        music.stopAllSounds()
    }
})
