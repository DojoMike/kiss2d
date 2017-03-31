using System;
using Bridge;

namespace Howler
{
    [Namespace(false)]
    [External]
    public class Howl
    {
        public Options Options { get; set; }

        public extern Howl(Options options);
        
        public extern void Play();

        public extern void Play(int id);
    }

    /// <summary>
    /// The Options class is basically a set of properties for instances of the Howl class.
    /// I has to be a separate object because the compiled JavaScript expects an "object
    /// literal" (and the [ObjectLiteral] below makes sure that happens).
    /// </summary>
    [External]
    [ObjectLiteral]
    public class Options
    {
        /// <summary>
        /// The sources to the track(s) to be loaded for the sound (URLs or base64 data URIs).
        /// These should be in order of preference, howler.js will automatically load the first
        /// one that is compatible with the current browser. If your files have no extensions,
        /// you will need to explicitly specify the extension using the format property.
        /// </summary>
        public string[] Src { get; set; }

        /// <summary>
        /// Set to true to force HTML5 Audio. This should be used for large audio files so that
        /// you don't have to wait for the full file to be downloaded and decoded before playing.
        /// </summary>
        public bool Html5 = false;

        /// <summary>
        /// Set to true to automatically loop the sound forever.
        /// </summary>
        public bool Loop = false;

        /// <summary>
        /// The volume of the specific track, from 0.0 to 1.0.
        /// </summary>
        public double Volume = 1.0;

        /// <summary>
        /// Automatically begin downloading the audio file when the Howl is defined.
        /// </summary>
        public bool Preload = true;

        /// <summary>
        /// Set to true to automatically start playback when sound is loaded.
        /// </summary>
        public bool AutoPlay = false;

        /// <summary>
        /// Set to true to load the audio muted.
        /// </summary>
        public bool Mute = false;

        //2do: Add "sprite" (probably gonna need another class)

        /// <summary>
        /// The rate of playback. 0.5 to 4.0, with 1.0 being normal speed.
        /// </summary>
        public double Rate = 1.0;

        /// <summary>
        /// The size of the inactive sounds pool. Once sounds are stopped or finish playing,
        /// they are marked as ended and ready for cleanup. We keep a pool of these to recycle
        /// for improved performance. Generally this doesn't need to be changed. It is important
        /// to keep in mind that when a sound is paused, it won't be removed from the pool and
        /// will still be considered active so that it can be resumed later.
        /// </summary>
        public uint Pool = 5;

        /// <summary>
        /// howler.js automatically detects your file format from the extension, but you may also
        /// specify a format in situations where extraction won't work (such as with a SoundCloud
        /// stream).
        /// </summary>
        public string[] Format { get; set; }

        /// <summary>
        /// Fires when the sound is loaded.
        /// </summary>
        public Action OnLoad { get; set; }

        /// <summary>
        /// Fires when the sound is unable to load. The first parameter is the ID of the sound (if
        /// it exists) and the second is the error message/code.
        /// </summary>
        public Action OnLoadError { get; set; }

        /// <summary>
        /// Fires when the sound begins playing. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnPlay { get; set; }

        /// <summary>
        /// Fires when the sound finishes playing (if it is looping, it'll fire at the end of each
        /// loop). The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnEnd { get; set; }

        /// <summary>
        /// Fires when the sound has been paused. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnPause { get; set; }

        /// <summary>
        /// Fires when the sound has been stopped. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnStop { get; set; }

        /// <summary>
        /// Fires when the sound has been muted/unmuted. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnMute { get; set; }

        /// <summary>
        /// Fires when the sound's volume has changed. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnVolume { get; set; }

        /// <summary>
        /// Fires when the sound's playback rate has changed. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnRate { get; set; }

        /// <summary>
        /// Fires when the sound has been seeked. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnSeek { get; set; }

        /// <summary>
        /// Fires when the current sound finishes fading in/out. The first parameter is the ID of the sound.
        /// </summary>
        public Action<int> OnFade { get; set; }
    }
}