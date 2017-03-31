using System.Collections.Generic;
using Bridge.Html5;
using Howler;

namespace Kiss2D
{
    static class Game
    {
        private static bool Paused = false;
        private static List<IDrawable> GraphicsObjects = new List<IDrawable>();
        private static List<Howl> SoundObjects = new List<Howl>();

        public static void Pause()
        {
            Paused = !Paused;
        }

    }
}
