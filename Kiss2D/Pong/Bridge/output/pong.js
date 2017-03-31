/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Pong", function ($asm, globals) {
    "use strict";

    Bridge.define("Pong.App", {
        statics: {
            x: 0,
            y: 0,
            direction: 0
        },
        $main: function () {
            // Set up the canvas, or die tryin'!
            try {
                Kiss2D.Canvas.create(true);
            }
            catch ($e1) {
                $e1 = System.Exception.create($e1);
                if (Bridge.is($e1, Kiss2D.KissException)) {
                    window.alert("Oh crap!  Your browser doesn't support the HTML5 stuff we need to make this game work.  Please enable JavaScript or switch to a different browser (like Chrome or Firefox).");
                    return;
                } else {
                    throw $e1;
                }
            }

            // Load an image
            // Canvas.LoadGraphic("images/ball.png");

            // Create the game objects
            var player = new Kiss2D.GameObject();
            player.setX(32);
            player.setY(320);
            player.setWidth(8);
            player.setHeight(64);
            player.setSpeed(4);

            var test = new Kiss2D.GameObject();
            test.setX(32);
            test.setY(0);
            test.setWidth(8);
            test.setHeight(64);
            test.setSpeed(4);

            // Our animation loop does look kinda Pong-like
            Kiss2D.Canvas.startAnimationLoop(function () {
                // Tested the collision method
                if (player.collision(test)) {
                    player.setY(320);
                }

                // Update the player's position
                if (Pong.App.direction === 38 && player.getY() >= 4) {
                    player.setY((player.getY() - player.getSpeed()) | 0);
                } else {
                    if (Pong.App.direction === 40 && player.getY() <= ((window.innerHeight - 64) | 0)) {
                        player.setY((player.getY() + player.getSpeed()) | 0);
                    }
                }

                // Canvas.DrawGraphic("images/ball.png", 64, 32, 16, 16);

                Kiss2D.Canvas.setFillStyle("red");
                Kiss2D.Canvas.fillRect(player.getX(), player.getY(), player.getWidth(), player.getHeight());

                Kiss2D.Canvas.setFillStyle("blue");
                Kiss2D.Canvas.fillRect(test.getX(), test.getY(), test.getWidth(), test.getHeight());
            });

            // Test adding an event - gettin fancy this time with keyboard events
            // NOTE: I had to change the event listener from the canvas to the Window element.
            // Doing it this way might also help with other events, like onresize etc. too
            // so down the road, we might want to have this just be fullscreen all the time
            Kiss2D.Canvas.addEvent("keydown", $asm.$.Pong.App.f1);
            Kiss2D.Canvas.addEvent("keyup", $asm.$.Pong.App.f2);

            /* 
            // Test Howler (worked)
            // NOTE: I still have to build out the rest of the definition file, and also the spatial plug-in.
            Howl sound = new Howl(new Options()
            {
                Src = new string[] { "test.wav" },
                Loop = true,
                OnLoad = () =>
                {
                    Bridge.Script.Call("console.log", "Sound Loaded");
                }
            });
            // sound.Play();
            */
        }
    });

    Bridge.ns("Pong.App", $asm.$);

    Bridge.apply($asm.$.Pong.App, {
        f1: function (e) {
            var E = Bridge.cast(e, KeyboardEvent);
            if (E.which >= 37 && E.which <= 40) {
                Pong.App.direction = E.which;
            } else {
                Kiss2D.Canvas.pause();
            }
        },
        f2: function (e) {
            Pong.App.direction = 0;
        }
    });
});
