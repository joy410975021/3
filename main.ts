let x = 0
let y = 0
let j = 0
let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
function showled (x: number, y: number, dir: number) {
	
}
basic.forever(function () {
    showled(0, 0, 0)
    showled(4, 0, 1)
    showled(0, 4, 2)
    showled(4, 4, 3)
})
basic.forever(function () {
    x = 4
    y = 0
    for (let I = 0; I <= 4; I++) {
        j = 0
        led.plot(x, y)
        while (j <= I - 0) {
            j += 1
            x1 = x
            y1 = y - j
            x2 = x + j
            y2 = y
            led.plot(x1, y1)
            led.plot(x2, y2)
        }
        basic.pause(200)
        y = x - 1
        x = y + 1
    }
    basic.clearScreen()
})
