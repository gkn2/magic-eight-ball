let my_sprite = sprites.create(assets.image`8ball`, SpriteKind.Player)
scene.setBackgroundColor(1)
my_sprite.sayText("Think of a question. Then press A to get answer.")
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_event_pressed() {
    let item = randint(1, 8)
    if (item == 1) {
        my_sprite.sayText("Yes.")
    } else if (item == 2) {
        my_sprite.sayText("No.")
    } else if (item == 3) {
        my_sprite.sayText("Not Really.")
    } else if (item == 4) {
        my_sprite.sayText("Totally")
    } else if (item == 5) {
        my_sprite.sayText("Definetly Not.")
    } else if (item == 6) {
        my_sprite.sayText("Hopefully.")
    } else if (item == 7) {
        my_sprite.sayText("Soon")
    } else {
        my_sprite.sayText("That Won't Happen")
    }
    
})
