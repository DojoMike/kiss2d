using Bridge.Html5;
using Kiss2D;

namespace TestGame
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
            catch(KissException)
            {
                Window.Alert("Oh crap!  Your browser doesn't support the HTML5 stuff we need to make this game work.  Please enable JavaScript or switch to a different browser (like Chrome or Firefox).");
                return;
            }

            // Try to load an image
            Canvas.LoadGraphic("images/ball.png");

            // Our animation loop does look kinda Pong-like
            Canvas.StartAnimationLoop(() =>
            {
                int speed = 4;
                if (direction == 38 && y >= 4)
                    y -= speed;
                else if (direction == 40 && y <= Window.InnerHeight - 64)
                    y += speed;

                Canvas.DrawGraphic("images/ball.png", 64, 32, 16, 16);

                Canvas.FillStyle = "blue";
                Canvas.FillRect(Window.InnerWidth - 10, 32, 8, 64);
                Canvas.FillStyle = "red";
                Canvas.FillRect(32, y, 8, 64);
            });

            // Test adding an event - gettin fancy this time with keyboard events
            // NOTE: I had to change the event listener from the canvas to the Window element.
            // Doing it this way might also help with other events, like onresize etc. too
            // so down the road, we might want to have this just be fullscreen all the time
            Canvas.AddEvent("keydown", (e) =>
            {
                var E = (KeyboardEvent)e;
                direction = E.Which;
            });
        }
    }
}