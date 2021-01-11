input.onButtonPressed(Button.A, function () {
    escolhahumana = escolhahumana - 1
    if (escolhahumana == 0) {
        escolhahumana = 3
    }
    if (escolhahumana == 3) {
        icone = tesoura
        images.createImage(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `).showImage(0)
    } else if (escolhahumana == 2) {
        icone = papel
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        icone = pedra
        images.createImage(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `).showImage(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(500)
    escolhamaquina = randint(1, 3)
    if (escolhamaquina == 1) {
        icone = pedra
        images.createImage(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `).showImage(0)
    } else if (escolhamaquina == 2) {
        icone = papel
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        icone = tesoura
        images.createImage(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `).showImage(0)
    }
    basic.pause(500)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(500)
    if (escolhahumana == escolhamaquina) {
        images.createImage(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `).showImage(0)
    } else if (escolhahumana == 1 && escolhamaquina == 3) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (escolhahumana == 2 && escolhamaquina == 1) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else if (escolhahumana == 3 && escolhamaquina == 2) {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `).showImage(0)
    } else {
        images.createImage(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `).showImage(0)
    }
})
input.onButtonPressed(Button.B, function () {
    escolhahumana = escolhahumana + 1
    if (escolhahumana == 4) {
        escolhahumana = 1
    }
    if (escolhahumana == 1) {
        icone = pedra
        images.createImage(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `).showImage(0)
    } else if (escolhahumana == 2) {
        icone = papel
        images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `).showImage(0)
    } else {
        icone = tesoura
        images.createImage(`
            # # . . .
            # # . # #
            . . # . .
            # # . # #
            # # . . .
            `).showImage(0)
    }
})
let escolhamaquina = 0
let pedra = 0
let papel = 0
let tesoura = 0
let icone = 0
let escolhahumana = 0
basic.showString("Selecione")
basic.pause(200)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.pause(200)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(200)
basic.showIcon(IconNames.Scissors)
basic.pause(500)
basic.clearScreen()
escolhahumana = 1
