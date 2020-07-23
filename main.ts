input.onButtonPressed(Button.A, function () {
    led.unplot(posx, posy)
    posx += -1
    if (posx <= 0) {
        posx = 4
    }
    led.plot(posx, posy)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posx, posy)
    posx += 1
    if (posx >= 4) {
        posx = 0
    }
    led.plot(posx, posy)
})
let posy = 0
let posx = 0
posx = 2
posy = 2
let direction = 1
led.plot(posx, posy)
basic.forever(function () {
    led.unplot(posx, posy)
    posy += direction
    led.plot(posx, posy)
    if (posy >= 4) {
        direction = -1
    } else if (posy <= 0) {
        direction = 1
    }
    basic.pause(100)
})
