using Bridge.Html5;
using Kiss2D;

namespace TestGame
{
    public class App
    {
        static int x;

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
            }
            Canvas.StartAnimationLoop(() =>
            {
                x++;
                Canvas.FillStyle = "blue";
                Canvas.FillRect(32, 32, 32, 32);
                Canvas.FillStyle = "rgba(255, 0, 0, 0.5)";
                Canvas.FillRect(x, 48, 32, 32);
            });

            // Test adding an event - just a simple onclick for now
            Canvas.AddEvent("click", () =>
            {
                Canvas.Pause();
            });
        }
    }
}