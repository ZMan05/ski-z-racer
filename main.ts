enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Dead
}
namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Cloud = SpriteKind.create()
}
function initGround () {
    ground1 = sprites.create(img`
        ...................................................................................cccc...........................................................................
        ..................................................................................c1111c..........................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111ccccccccccccccccc....ccccccccccccccccccccccccccccccccccccccccccccccccccccc
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111cccc11111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11cccc11c11111111111111111111111c11cccc1111111111111111111111111cccc11c1111111111111c11111111111111111111111111cccc11c11111111111c11ccc11111111111111111c11ccc1111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111cccc11c1111111111111111111111111cccc1c1111111c11111111111111cc1c11111111cccc11c11111cccc11c111111111111111111c111111111111111cccc11c111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Ground)
    ground2 = sprites.create(img`
        .....................................................cccc..................cccc...................................................................................
        ....................................................c1111c................c1111c..................................................................................
        cccccccccccccccccccccccccccccccccccccccccccccccccccc111111cccccccccccccccc111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111ccc11c11111111111111111ccc11c11111111111c11cccc11111111111111111111111111c1111111111111c11cccc1111111111111111111111111cccc11c11111111111111111111111c11cccc11
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111c11cccc111111111111111c111111111111111111c11cccc11111c11cccc11111111c1cc11111111111111c1111111c1cccc1111111111111111111111111c11cccc111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Ground)
    ground1.setPosition(scene.screenWidth() / 2, 120)
    ground2.setPosition(ground1.x + scene.screenWidth(), 120)
    ground1.vx = -100
    ground2.vx = -100
    ground1.z = 2
    ground2.z = 2
}
function initRaptor () {
    Zander = sprites.create(img`
        .......19999999991..............
        .......19999999991..............
        .......1ddddddddd1..............
        .......1ddddffddd1..............
        .......1ddfdddddd1..............
        ........dddffffdd...............
        ...fffffffddddddd...............
        ...f88888ffffffffff.............
        ..ff888888888f8888f.............
        ..f88f8888888f888fffff..........
        ..f88ff88888f88888888fffff......
        ..f88fffff88f88888888f111f......
        .ff88f111f88f88888888f1fff......
        .f888f1fff88ff8888888f111f......
        .f888f111f888f8888888f111f......
        .f888f11ff888f8888ffffffff......
        .ffffffff888ff8888f....b........
        ......bfffffffffff.....b........
        .....b.f444444444f.....b........
        .....b.f44444f444f....b.........
        ....b..ff4444f444ff...b.........
        ...b....ff444f4444f..b..........
        ...b.....f444ff444f..b..........
        b.b......f4444f444ffb...........
        .b.......ff444f4444fb...........
        b.b.......f444f4444ff...........
        ..........f111ff1444f.....ffffff
        .........f11111f1111f.....fbbfbb
        ffffffffff11111f111fffffffffbbfb
        bbbbbbbbbfffffffffffbbbbbbbbbbfb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `, SpriteKind.Player)
    run = animation.createAnimation(ActionKind.Walking, 100)
    run.addAnimationFrame(img`
        .......19999999991..............
        .......19999999991..............
        .......1ddddddddd1..............
        .......1ddddffddd1..............
        .......1ddfdddddd1..............
        ........dddffffdd...............
        ...fffffffddddddd...............
        ...f88888ffffffffff.............
        ..ff888888888f8888f.............
        ..f88f8888888f888fffff..........
        ..f88ff88888f88888888fffff......
        ..f88fffff88f88888888f111f......
        .ff88f111f88f88888888f1fff......
        .f888f1fff88ff8888888f111f......
        .f888f111f888f8888888f111f......
        .f888f11ff888f8888ffffffff......
        .ffffffff888ff8888f....b........
        ......bfffffffffff.....b........
        .....b.f444444444f.....b........
        .....b.f44444f444f....b.........
        ....b..ff4444f444ff...b.........
        ...b....ff444f4444f..b..........
        ...b.....f444ff444f..b..........
        b.b......f4444f444ffb...........
        .b.......ff444f4444fb...........
        b.b.......f444f4444ff...........
        ..........f111ff1444f.....ffffff
        .........f11111f1111f.....fbbfbb
        ffffffffff11111f111fffffffffbbfb
        bbbbbbbbbfffffffffffbbbbbbbbbbfb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    run.addAnimationFrame(img`
        .......19999999991..............
        .......19999999991..............
        .......1ddddddddd1..............
        .......1ddddffddd1..............
        .......1ddfdddddd1..............
        ........dddffffdd...............
        ...fffffffddddddd...............
        ...f88888ffffffffff.............
        ..ff888888888f8888f.............
        ..f88f8888888f888fffff..........
        ..f88ff88888f88888888fffff......
        ..f88fffff88f88888888f111f......
        .ff88f111f88f88888888f1fff......
        .f888f1fff88ff8888888f111f......
        .f888f111f888f8888888f111f......
        .f888f11ff888f8888ffffffff......
        .ffffffff888ff8888f....b........
        ......bfffffffffff.....b........
        .....b.f444444444f.....b........
        .....b.f44444f444f....b.........
        ....b..ff4444f444ff...b.........
        ...b....ff444f4444f..b..........
        ...b.....f444ff444f..b..........
        b.b......f4444f444ffb...........
        .b.......ff444f4444fb...........
        b.b.......f444f4444ff...........
        ..........f111ff1444f.....ffffff
        .........f11111f1111f.....fbbfbb
        ffffffffff11111f111fffffffffbbfb
        bbbbbbbbbfffffffffffbbbbbbbbbbfb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    animation.attachAnimation(Zander, run)
    jump = animation.createAnimation(ActionKind.Jumping, 200)
    jump.addAnimationFrame(img`
        .......19999999991..............
        .......19999999991..............
        .......1ddddddddd1..............
        .......1ddddffddd1..............
        .......1ddfdddddd1..............
        ........dddffffdd...............
        ...fffffffddddddd...............
        ...f88888ffffffffff.............
        ..ff888888888f8888f.............
        ..f88f8888888f888fffff..........
        ..f88ff88888f88888888fffff......
        ..f88fffff88f88888888f111f......
        .ff88f111f88f88888888f1fff......
        .f888f1fff88ff8888888f111f......
        .f888f111f888f8888888f111f......
        .f888f11ff888f8888ffffffff......
        .ffffffff888ff8888f....b........
        ......bfffffffffff.....b........
        .....b.f444444444f.....b........
        .....b.f44444f444f....b.........
        ....b..ff4444f444ff...b.........
        ...b....ff444f4444f..b..........
        ...b.....f444ff444f..b..........
        b.b......f4444f444ffb...........
        .b.......ff444f4444fb...........
        b.b.......f444f4444ff...........
        ..........f111ff1444f.....ffffff
        .........f11111f1111f.....fbbfbb
        ffffffffff11111f111fffffffffbbfb
        bbbbbbbbbfffffffffffbbbbbbbbbbfb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    animation.attachAnimation(Zander, jump)
    dead = animation.createAnimation(ActionKind.Dead, 200)
    dead.addAnimationFrame(img`
        .......19999999991..............
        .......19999999991..............
        .......1ddddddddd1..............
        .......1ddddffddd1..............
        .......1ddfdddddd1..............
        ........dddffffdd...............
        ...fffffffddddddd...............
        ...f88888ffffffffff.............
        ..ff888888888f8888f.............
        ..f88f8888888f888fffff..........
        ..f88ff88888f88888888fffff......
        ..f88fffff88f88888888f111f......
        .ff88f111f88f88888888f1fff......
        .f888f1fff88ff8888888f111f......
        .f888f111f888f8888888f111f......
        .f888f11ff888f8888ffffffff......
        .ffffffff888ff8888f....b........
        ......bfffffffffff.....b........
        .....b.f444444444f.....b........
        .....b.f44444f444f....b.........
        ....b..ff4444f444ff...b.........
        ...b....ff444f4444f..b..........
        ...b.....f444ff444f..b..........
        b.b......f4444f444ffb...........
        .b.......ff444f4444fb...........
        b.b.......f444f4444ff...........
        ..........f111ff1444f.....ffffff
        .........f11111f1111f.....fbbfbb
        ffffffffff11111f111fffffffffbbfb
        bbbbbbbbbfffffffffffbbbbbbbbbbfb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    animation.attachAnimation(Zander, dead)
    Zander.z = 3
    Zander.setPosition(15, 94)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Zander.y == 94 && end == 0) {
        Zander.vy = -160
        animation.setAction(Zander, ActionKind.Jumping)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    end = 1
    animation.setAction(Zander, ActionKind.Dead)
    pause(50)
    game.over(false, effects.dissolve)
})
let cloud: Sprite = null
let cactus: Sprite = null
let choice = 0
let dead: animation.Animation = null
let jump: animation.Animation = null
let run: animation.Animation = null
let Zander: Sprite = null
let ground2: Sprite = null
let ground1: Sprite = null
let end = 0
let idle = null
game.setDialogCursor(img`
    .......19999999991..............
    .......19999999991..............
    .......1ddddddddd1..............
    .......1ddddffddd1..............
    .......1ddfdddddd1..............
    ........dddffffdd...............
    ...fffffffddddddd...............
    ...f88888ffffffffff.............
    ..ff888888888f8888f.............
    ..f88f8888888f888fffff..........
    ..f88ff88888f88888888fffff......
    ..f88fffff88f88888888f111f......
    .ff88f111f88f88888888f1fff......
    .f888f1fff88ff8888888f111f......
    .f888f111f888f8888888f111f......
    .f888f11ff888f8888ffffffff......
    .ffffffff888ff8888f....b........
    ......bfffffffffff.....b........
    .....b.f444444444f.....b........
    .....b.f44444f444f....b.........
    ....b..ff4444f444ff...b.........
    ...b....ff444f4444f..b..........
    ...b.....f444ff444f..b..........
    b.b......f4444f444ffb...........
    .b.......ff444f4444fb...........
    b.b.......f444f4444ff...........
    ..........f111ff1444f.....ffffff
    .........f11111f1111f.....fbbfbb
    ffffffffff11111f111fffffffffbbfb
    bbbbbbbbbfffffffffffbbbbbbbbbbfb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
game.splash("Ski-Z Racer")
scene.setBackgroundColor(9)
initGround()
initRaptor()
info.setScore(0)
end = 0
game.showLongText("Press any button to jump.", DialogLayout.Top)
game.onUpdate(function () {
    if (Zander.y < 94) {
        Zander.ay = 400
    } else {
        Zander.ay = 0
        Zander.y = 94
        if (end == 0) {
            animation.setAction(Zander, ActionKind.Walking)
        }
    }
})
game.onUpdateInterval(50, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(1000, function () {
    ground1.vx += -1
    ground2.vx += -1
})
game.onUpdateInterval(1000, function () {
    choice = randint(0, 4)
    if (choice == 0) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ............fffffff.............
            ..........ffffffffff............
            ........fffffffffffff...........
            ........fffffffffffff...........
            .......fffffffffffffff..........
            .......fffffffffffffff..........
            .......ffffffffffffffff.........
            ......fffffffffffffffff.........
            ......fffffffffffffffff.........
            ......ffffffffffffffffff........
            ......ffffffffffffffffff........
            .....ffffffffffffffffffff.......
            .....fffffffffffffffffffff......
            ....ffffffffffffffffffffff......
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 1) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............ffffffff..........
            .........fffffffffffff..........
            ........fffffffffffffff.........
            .......ffffffffffffffff.........
            .......ffffffffffffffff.........
            ......ffffffffffffffffff........
            ......ffffffffffffffffff........
            ......ffffffffffffffffff........
            .....fffffffffffffffffff........
            .....fffffffffffffffffff........
            .....ffffffffffffffffff.........
            .......ffffffffffffffff.........
            .......ffffffffffffffff.........
            .......ffffffffffffffff.........
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    } else if (choice == 2) {
        cactus = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................ffffffff........
            ................fffffffff.......
            ................ffffffffff......
            .................ffffffffff.....
            ..................fffffffff.....
            ..................ffffffffff....
            .......fff........fffffffffff...
            .....ffffff........ffffffffff...
            ...fffffffff.......ffffffffff...
            ..fffffffffff......ffffffffff...
            ..ffffffffffff.....ffffffffff...
            .fffffffffffff....fffffffffff...
            .ffffffffffffff..ffffffffffff...
            .ffffffffffffff..ffffffffffff...
            .ffffffffffffff..ffffffffffff...
            `, ground1.vx, 0)
        cactus.y = 94
        cactus.z = 2
    }
})
game.onUpdateInterval(1500, function () {
    if (Math.percentChance(40)) {
        cloud = sprites.createProjectileFromSide(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................bbbb.bb.........
            ...............bb.....b.........
            .............bbb......bbb.......
            .............b..........bbbb....
            .............b.............b....
            ..........bbbb.............bbb..
            .........bb..................b..
            .....bbbbb...................bb.
            .....b........................b.
            .bb.bb..b......................b
            bb.......bbbbbbbbbbbbbbbbbbbbbbb
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, ground1.vx / 4, 0)
        cloud.y = randint(20, 60)
        cloud.setKind(SpriteKind.Cloud)
        cloud.z = 1
    }
})
forever(function () {
    if (ground2.x < -1 * (scene.screenWidth() / 2)) {
        ground2.x = ground1.x + scene.screenWidth()
    }
})
forever(function () {
    if (ground1.x < -1 * (scene.screenWidth() / 2)) {
        ground1.x = ground2.x + scene.screenWidth()
    }
})
