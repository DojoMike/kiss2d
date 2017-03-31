namespace Kiss2D
{
    /// <summary>
    /// This super-simple interface is all about pausing the game.  Whehter it's for
    /// sounds, graphics, game objects, or whatever, they all need a Pause method.
    /// It's meant to be a toggle (since the game is either paused or not paused),
    /// so there ARE no "resume" or "unpause" methodS.
    /// </summary>
    interface IPausable
    {
        /// <summary>
        /// Pause/un-pause the object when the game is paused/un-paused
        /// </summary>
        void Pause();
    }
}
