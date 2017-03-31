using Bridge.Html5;
using Kiss2D;
// using Howler;

namespace Pong
{
    public class App
    {
        static int x = 0, y = 0, direction = 0;

        public static void Main()
        {
            // Set up the canvas, or die tryin'!
            try
            {
                Canvas.Create(true);
            }
            catch (KissException)
            {
                Window.Alert("Oh crap!  Your browser doesn't support the HTML5 stuff we need to make this game work.  Please enable JavaScript or switch to a different browser (like Chrome or Firefox).");
                return;
            }

            // Load an image
            // Canvas.LoadGraphic("images/ball.png");

            // Create the game objects
            var player = new GameObject();
            player.X = 32;
            player.Y = 320;
            player.Width = 8;
            player.Height = 64;
            player.Speed = 4;

            var test = new GameObject();
            test.X = 32;
            test.Y = 0;
            test.Width = 8;
            test.Height = 64;
            test.Speed = 4;

            // Our animation loop does look kinda Pong-like
            Canvas.StartAnimationLoop(() =>
            {
                // Tested the collision method
                if (player.Collision(test))
                    player.Y = 320;

                // Update the player's position
                if (direction == 38 && player.Y >= 4)
                    player.Y -= player.Speed;
                else if (direction == 40 && player.Y <= Window.InnerHeight - 64)
                    player.Y += player.Speed;

                // Canvas.DrawGraphic("images/ball.png", 64, 32, 16, 16);

                Canvas.FillStyle = "red";
                Canvas.FillRect(player.X, player.Y, player.Width, player.Height);

                Canvas.FillStyle = "blue";
                Canvas.FillRect(test.X, test.Y, test.Width, test.Height);
            });

            // Test adding an event - gettin fancy this time with keyboard events
            // NOTE: I had to change the event listener from the canvas to the Window element.
            // Doing it this way might also help with other events, like onresize etc. too
            // so down the road, we might want to have this just be fullscreen all the time
            Canvas.AddEvent("keydown", (e) =>
            {
                var E = (KeyboardEvent)e;
                if (E.Which >= 37 && E.Which <= 40)
                    direction = E.Which;
                else
                    Canvas.Pause();
            });
            Canvas.AddEvent("keyup", (e) =>
            {
                direction = 0;
            });

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
    }
}