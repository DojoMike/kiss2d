using System;
using Bridge;

namespace Kiss2D
{
    /// <summary>
    /// Simple exception class that logs to the browser console
    /// </summary>
    public class KissException : Exception
    {
        public KissException(string sMessage)
        {
            // NOTE: I'm using Script.Call because Bridge doesn't seem to have that yet.
            // It has a Console.WriteLine, but it creates a console in the DOM (kinda stupid IMO).
            Script.Call("console.log", sMessage);
        }
    }
}
