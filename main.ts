namespace SpriteKind {
    export const shado = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const gost = SpriteKind.create()
    export const theflash = SpriteKind.create()
    export const uper = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.uper, function (sprite, otherSprite) {
    if (x) {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d . 
. . . . . d d d d d d d d d d . 
. . . . d d d d d d d d d d d . 
. . . d d d d d d d d d d d d . 
. . . . d d d d d d d d d d d . 
. . . . . d d d d d d d d d d . 
. . . . . . d d d d d d d d d . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        otherSprite.image.flipX()
        otherSprite.x += -1
    } else {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . d d d d d d d d d . 
. . . . . d d d d d d d d d d . 
. . . . d d d d d d d d d d d . 
. . . d d d d d d d d d d d d . 
. . . . d d d d d d d d d d d . 
. . . . . d d d d d d d d d d . 
. . . . . . d d d d d d d d d . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        otherSprite.x += 1
    }
    pause(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gost, function (sprite, otherSprite) {
    music.wawawawaa.play()
    info.changeLifeBy(-1)
    pause(500)
})
sprites.onOverlap(SpriteKind.theflash, SpriteKind.gost, function (sprite, otherSprite) {
    otherSprite.follow(the_payer_1, 0)
    otherSprite.setVelocity(0, 0)
    otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . 1 d d 1 d d 1 . . . . 
. . . . . 1 d d 1 d d 1 . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 d . . . . 
. . . 1 1 1 1 1 1 1 d d . . . . 
. 1 1 1 . 1 1 1 d d d 1 . . . . 
. 1 1 . . 1 1 1 d d 1 1 . . . . 
. . . . . . 1 1 1 1 1 . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    sprites.setDataBoolean(otherSprite, "life", true)
    pause(1000)
    sprites.setDataBoolean(otherSprite, "life", false)
    otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . 
. . . . . 7 6 1 7 6 1 7 . . . . 
. . . . . 7 6 1 7 6 1 7 . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 6 . . . . 
. . . 7 7 7 7 7 7 7 6 6 . . . . 
. 7 7 7 . 7 7 7 6 6 6 7 . . . . 
. 7 7 . . 7 7 7 6 6 7 7 . . . . 
. . . . . . 7 7 7 7 7 . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    otherSprite.follow(the_payer_1, 40)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    the_payer_1.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . . . e d 1 f d d . . . . . 
. . . . . e e 1 f d d d . . . . 
. . . . . d e d d d d . . . . . 
. . . . . . d d d d . . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. 2 2 2 7 5 7 7 7 5 7 . . . . . 
4 2 7 7 7 8 7 7 7 8 7 7 . . . . 
4 2 7 2 7 8 7 7 7 8 7 2 2 . . . 
4 . 4 4 4 4 4 4 4 4 4 2 . . . . 
4 4 4 . 8 8 8 . 8 8 8 2 2 . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . e e e . . . e e e . . . . 
. . e e e e . . . e e e e . . . 
`)
    the_payer_1.image.flipX()
    x = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.theflash, function (sprite, otherSprite) {
    if (x) {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 . 
. . . . . 1 1 1 1 1 1 1 1 1 1 . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . . 1 1 1 1 1 1 1 1 1 1 . 
. . . . . . 1 1 1 1 1 1 1 1 1 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        otherSprite.image.flipX()
        otherSprite.x += -1
    } else {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 . 
. . . . . 1 1 1 1 1 1 1 1 1 1 . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . . 1 1 1 1 1 1 1 1 1 1 . 
. . . . . . 1 1 1 1 1 1 1 1 1 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        otherSprite.x += 1
    }
    pause(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    the_player_2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . . . 7 7 1 6 7 7 . . . . . 
. . . . . 7 7 1 6 7 7 7 . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . 6 7 7 7 6 . . . . . . 
. 6 6 6 7 6 7 7 7 6 7 . . . . . 
2 6 7 7 7 6 7 7 7 6 7 7 . . . . 
2 6 7 6 7 6 7 7 7 6 7 2 2 . . . 
2 . 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 . 6 6 6 . 6 6 6 2 2 . . . 
. . . . 6 6 . . . 6 6 . . . . . 
. . . 6 6 6 . . . 6 6 6 . . . . 
. . 6 6 6 6 . . . 6 6 6 6 . . . 
`)
    the_player_2.image.flipX()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    the_payer_1.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . . . e d 1 f d d . . . . . 
. . . . . e e 1 f d d d . . . . 
. . . . . d e d d d d . . . . . 
. . . . . . d d d d . . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. 2 2 2 7 5 7 7 7 5 7 . . . . . 
4 2 7 7 7 8 7 7 7 8 7 7 . . . . 
4 2 7 2 7 8 7 7 7 8 7 2 2 . . . 
4 . 4 4 4 4 4 4 4 4 4 2 . . . . 
4 4 4 . 8 8 8 . 8 8 8 2 2 . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . e e e . . . e e e . . . . 
. . e e e e . . . e e e e . . . 
`)
    x = false
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    the_player_2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . . . 7 7 1 6 7 7 . . . . . 
. . . . . 7 7 1 6 7 7 7 . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . 6 7 7 7 6 . . . . . . 
. 6 6 6 7 6 7 7 7 6 7 . . . . . 
2 6 7 7 7 6 7 7 7 6 7 7 . . . . 
2 6 7 6 7 6 7 7 7 6 7 2 2 . . . 
2 . 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 . 6 6 6 . 6 6 6 2 2 . . . 
. . . . 6 6 . . . 6 6 . . . . . 
. . . 6 6 6 . . . 6 6 6 . . . . 
. . 6 6 6 6 . . . 6 6 6 6 . . . 
`)
})
function coins () {
    for (let value of tiles.getTilesByType(sprites.dungeon.floorDark0)) {
        the_coin = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.coin)
        tiles.placeOnTile(the_coin, value)
    }
}
sprites.onOverlap(SpriteKind.uper, SpriteKind.gost, function (sprite, otherSprite) {
    if (sprites.readDataBoolean(otherSprite, "life")) {
        otherSprite.follow(the_payer_1, -40)
        sprites.setDataBoolean(otherSprite, "life", false)
        sprites.setDataBoolean(otherSprite, "life2", true)
        pause(500)
    }
    if (sprites.readDataBoolean(otherSprite, "life2")) {
        otherSprite.destroy()
        music.baDing.play()
        info.changeScoreBy(1)
    }
})
let gaost: Sprite = null
let on_flash = false
let shado: Sprite = null
let the_coin: Sprite = null
let x = false
let the_player_2: Sprite = null
let the_payer_1: Sprite = null
info.setLife(10)
let flash = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 . 
. . . . . 1 1 1 1 1 1 1 1 1 1 . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . . 1 1 1 1 1 1 1 1 1 1 . 
. . . . . . 1 1 1 1 1 1 1 1 1 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.theflash)
flash.setFlag(SpriteFlag.Invisible, true)
let suker = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . b b b b b b b b b . 
. . . . . b b b b b b b b b b . 
. . . . b b b b b b b b b b b . 
. . . b b b b b b b b b b b b . 
. . . . b b b b b b b b b b b . 
. . . . . b b b b b b b b b b . 
. . . . . . b b b b b b b b b . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.uper)
suker.setFlag(SpriteFlag.Invisible, true)
the_payer_1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . . . e d 1 f d d . . . . . 
. . . . . e e 1 f d d d . . . . 
. . . . . d e d d d d . . . . . 
. . . . . . d d d d . . . . . . 
. . . . . 8 7 7 7 8 . . . . . . 
. 2 2 2 7 5 7 7 7 5 7 . . . . . 
4 2 7 7 7 8 7 7 7 8 7 7 . . . . 
4 2 7 2 7 8 7 7 7 8 7 2 2 . . . 
4 . 4 4 4 4 4 4 4 4 4 2 . . . . 
4 4 4 . 8 8 8 . 8 8 8 2 2 . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . e e e . . . e e e . . . . 
. . e e e e . . . e e e e . . . 
`, SpriteKind.Player)
controller.moveSprite(the_payer_1, 100, 100)
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000080202020202031414141414141414030d0505050513040505050505050505150d05050505050b0505050505050505150d141111111111030c0c0c17050505150d0505050505050408140316050505150d050505050505040d130416050505151b050505050505040d050416050505151b02020202020202060504070c180c0a1b0505050505050505051500000000000d050505050505050505150000000000070c0c0c0c0c0c0c0c0c0a0000000000080202020202020200000000000202030d130513051305131d1d1d1d1d0513040d051305130513051f1f1f1f1f1305040d130513051305131e1e1e1e1e051304070c0c0c0c0c0c0c00000000000c0c0a`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . 2 2 2 2 2 . . . 2 
2 . . . . . . 2 2 . 2 2 . . . 2 
. . . . . . . 2 2 . 2 2 . . . 2 
. 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
. . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.floorDark2,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.stairLarge,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.floorLight2,sprites.dungeon.floorDark5,sprites.dungeon.stairEast,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.floorMixed,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.doorOpenSouth,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.floorLight5,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter],
            TileScale.Sixteen
        ))
tiles.placeOnTile(the_payer_1, tiles.getTileLocation(4, 5))
scene.cameraFollowSprite(the_payer_1)
coins()
if (game.ask("2 players")) {
    the_player_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 . . . 
. . . . . 7 7 1 6 7 7 . . . . . 
. . . . . 7 7 1 6 7 7 7 . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . . . . 6 7 7 7 6 . . . . . . 
. 6 6 6 7 6 7 7 7 6 7 . . . . . 
2 6 7 7 7 6 7 7 7 6 7 7 . . . . 
2 6 7 6 7 6 7 7 7 6 7 2 2 . . . 
2 . 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 . 6 6 6 . 6 6 6 2 2 . . . 
. . . . 6 6 . . . 6 6 . . . . . 
. . . 6 6 6 . . . 6 6 6 . . . . 
. . 6 6 6 6 . . . 6 6 6 6 . . . 
`, SpriteKind.Player)
    controller.player2.moveSprite(the_player_2)
    tiles.placeOnTile(the_player_2, tiles.getTileLocation(5, 5))
}
forever(function () {
    if (controller.A.isPressed()) {
        if (flash) {
            shado = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.shado)
            shado.setPosition(the_payer_1.x, the_payer_1.y)
            shado.y += 3
            shado.setVelocity(20, 0)
            pause(100)
            shado.destroy()
        }
    }
})
forever(function () {
    if (controller.A.isPressed()) {
        on_flash = true
        pause(200)
        on_flash = false
        flash.setPosition(the_payer_1.x, the_payer_1.y)
        flash.y += 3
        flash.setFlag(SpriteFlag.Invisible, false)
        flash.setFlag(SpriteFlag.Ghost, false)
        controller.moveSprite(the_payer_1, 0, 0)
        pause(200)
        flash.setFlag(SpriteFlag.Invisible, true)
        flash.setFlag(SpriteFlag.Ghost, true)
        controller.moveSprite(the_payer_1, 100, 100)
    }
})
forever(function () {
    if (info.score() == 2) {
        if (the_payer_1.isHittingTile(CollisionDirection.Bottom)) {
            if (the_payer_1.tileKindAt(TileDirection.Bottom, sprites.dungeon.doorOpenSouth)) {
                tiles.placeOnTile(the_payer_1, tiles.getTileLocation(2, 12))
                tiles.placeOnTile(the_player_2, tiles.getTileLocation(1, 13))
                gaost = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 7 7 . . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . 
. . . . . 7 6 1 7 6 1 7 . . . . 
. . . . . 7 6 1 7 6 1 7 . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 6 . . . . 
. . . 7 7 7 7 7 7 7 6 6 . . . . 
. 7 7 7 . 7 7 7 6 6 6 7 . . . . 
. 7 7 . . 7 7 7 6 6 7 7 . . . . 
. . . . . . 7 7 7 7 7 . . . . . 
. . . . . . . 7 7 7 . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.gost)
                tiles.placeOnTile(gaost, tiles.getTileLocation(10, 13))
                gaost.follow(the_payer_1, 40)
            }
        }
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        suker.setPosition(the_payer_1.x, the_payer_1.y)
        suker.y += 3
        suker.setFlag(SpriteFlag.Invisible, false)
        suker.setFlag(SpriteFlag.Ghost, false)
        controller.moveSprite(the_payer_1, 0, 0)
        pause(500)
        suker.setFlag(SpriteFlag.Invisible, true)
        suker.setFlag(SpriteFlag.Ghost, true)
        controller.moveSprite(the_payer_1, 100, 100)
        pause(200)
    }
})
forever(function () {
    music.playMelody("D D E C D D D C ", 396)
    music.playMelody("D D D C D D E C ", 396)
})
