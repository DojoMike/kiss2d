using System;
using Bridge.Html5;

namespace Kiss2D
{
    /// <summary>
    /// The Canvas class is an abstraction layer on top of the HTML5 canvas, its "context", and other stuff
    /// that's just not simple enough for a framework called KISS. :)
    /// </summary>
    static class Canvas
    {
        private static bool Created = false;
        private static HTMLCanvasElement CanvasElement = new HTMLCanvasElement();
        private static CanvasRenderingContext2D Context;
        private static Action Loop;
        private static bool Paused = false;

        #region Getters/setters from CanvasElement

        /// <summary>
        /// Gets/sets the width of the underlying HTML5 CanvasElement element
        /// </summary>
        public static int Width
        {
            get
            {
                return CanvasElement.Width;
            }
            set
            {
                CanvasElement.Width = value;
            }
        }

        /// <summary>
        /// Gets/sets the height of the underlying HTML5 CanvasElement element
        /// </summary>
        public static int Height
        {
            get
            {
                return CanvasElement.Height;
            }
            set
            {
                CanvasElement.Height = value;
            }
        }

        /// <summary>
        /// Gets/sets the screen's "position" style
        /// </summary>
        public static Position Position
        {
            get
            {
                return CanvasElement.Style.Position;
            }
            set
            {
                CanvasElement.Style.Position = value;
            }
        }

        /// <summary>
        /// Gets/sets the screen's "left" style
        /// </summary>
        public static string Left
        {
            get
            {
                return CanvasElement.Style.Left;
            }
            set
            {
                CanvasElement.Style.Left = value;
            }
        }

        /// <summary>
        /// Gets/sets the screen's "top" style
        /// </summary>
        public static string Top
        {
            get
            {
                return CanvasElement.Style.Top;
            }
            set
            {
                CanvasElement.Style.Top = value;
            }
        }

        /// <summary>
        /// Gets/sets the screen's background color
        /// </summary>
        public static string BackgroundColor
        {
            get
            {
                return CanvasElement.Style.BackgroundColor;
            }
            set
            {
                CanvasElement.Style.BackgroundColor = value;
            }
        }

        #endregion

        #region Getters/setters from Context

        public static string FillStyle
        {
            get
            {
                return Context.FillStyle.ToString();
            }
            set
            {
                Context.FillStyle = value;
            }
        }

        #endregion

        #region Methods

        /// <summary>
        /// Sets up the CanvasElement and its context
        /// <param name="UseDefaults">Set to true to have the canvas take up the entire screen; the background color will also be turned black to make sure it worked and all that.</param>
        /// </summary>
        public static void Create(bool UseDefaults = false)
        {
            if (!Created)
            {
                // If using default layout, set the CSS, width and height
                if (UseDefaults)
                {
                    Position = Position.Absolute;
                    Left = "0px";
                    Top = "0px";
                    Width = Window.InnerWidth;
                    Height = Window.InnerHeight;
                    BackgroundColor = "black";
                }

                // Add the CanvasElement element to the page
                Document.Body.AppendChild(CanvasElement);

                // Try to get its "context"
                Context = CanvasElement.GetContext(CanvasTypes.CanvasContext2DType.CanvasRenderingContext2D);
                if (Context.Equals(null))
                    throw new KissException("CanvasElementError: HTML5 CanvasElement not supported.");
                Created = true;     // So it won't bug out if someone calls Create twice
            }
        }

        /// <summary>
        /// Adds an event listener to the canvas
        /// </summary>
        /// <param name="EventName">The event name (i.e. "click", "keydown", "touchstart" etc.)</param>
        /// <param name="Callback">The code to run when the event is triggered</param>
        public static void AddEvent(string EventName, Action Callback)
        {
            CanvasElement.AddEventListener(EventName, Callback);
        }

        // These just call the equivalent canvas or context functions
        public static void ClearRect(int Left, int Top, int Right, int Bottom)
        {
            Context.ClearRect(Left, Top, Right, Bottom);
        }
        public static void FillRect(int Left, int Top, int Right, int Bottom)
        {
            Context.FillRect(Left, Top, Right, Bottom);
        }

        /// <summary>
        /// Sets up the canvas's animation loop - call this before calling Pause, obviously :)
        /// </summary>
        /// <param name="callback">The main game loop - this gets called at every step/frame.</param>
        public static void StartAnimationLoop(Action callback)
        {
            Loop = callback;
            Step();
        }

        /// <summary>
        /// Pauses/un-pauses the game
        /// </summary>
        public static void Pause()
        {
            // Toggle the "Paused" property
            Paused = !Paused;

            // If we just un-paused, resume the game loop
            if (!Paused)
                Window.RequestAnimationFrame(Step);
        }

        /// <summary>
        /// This calls the user-defined animation loop
        /// </summary>
        private static void Step()
        {
            if (!Paused)
            {
                // Clear the entire canvas
                Context.ClearRect(0, 0, Width, Height);

                // Call the user's code
                Loop();
                
                // and continue the loop
                Window.RequestAnimationFrame(Step);
            }
        }

        #endregion
    }
}
