my_sprite = sprites.create(assets.image("""8ball"""), SpriteKind.player)
scene.set_background_color(1)

my_sprite.say_text("Think of a question. Then press A to get answer.")

def on_event_pressed():
    item = randint (1, 8)
    if item == 1:
        my_sprite.say_text("Yes.")
    elif item == 2:
        my_sprite. say_text ("No.")
    elif item == 3:
        my_sprite.say_text("Not Really.")
    elif item == 4:
        my_sprite.say_text("Totally")
    elif item == 5:
        my_sprite.say_text ("Definetly Not.")
    elif item == 6:
        my_sprite.say_text("Hopefully.")
    elif item == 7:
        my_sprite.say_text("Soon")
    else:
        my_sprite.say_text("That Won't Happen")
controller.A.on_event(ControllerButtonEvent.PRESSED, on_event_pressed)
