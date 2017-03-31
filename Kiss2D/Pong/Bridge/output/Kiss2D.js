/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 15.7.0
 */
Bridge.assembly("Kiss2D", function ($asm, globals) {
    "use strict";

    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {Event}    arg
     * @return  {void}
     */

    /** @namespace Kiss2D */

    /**
     * The Canvas class is an abstraction layer on top of the HTML5 canvas, its "context", and other stuff
     that's just not simple enough for a framework called KISS. :)
     *
     * @static
     * @abstract
     * @public
     * @class Kiss2D.Canvas
     */
    Bridge.define("Kiss2D.Canvas", {
        statics: {
            graphics: null,
            orientation: 0,
            created: false,
            canvasElement: null,
            context: null,
            loop: null,
            paused: false,
            config: {
                init: function () {
                    this.graphics = new (System.Collections.Generic.Dictionary$2(String,HTMLImageElement))();
                    this.canvasElement = document.createElement('canvas');
                }
            },
            /**
             * Gets/sets the width of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getWidth
             * @return  {number}
             */
            /**
             * Gets/sets the width of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setWidth
             * @param   {number}    value
             * @return  {void}
             */
            getWidth: function () {
                return Kiss2D.Canvas.canvasElement.width;
            },
            /**
             * Gets/sets the width of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getWidth
             * @return  {number}
             */
            /**
             * Gets/sets the width of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setWidth
             * @param   {number}    value
             * @return  {void}
             */
            setWidth: function (value) {
                Kiss2D.Canvas.canvasElement.width = value;
            },
            /**
             * Gets/sets the height of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getHeight
             * @return  {number}
             */
            /**
             * Gets/sets the height of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setHeight
             * @param   {number}    value
             * @return  {void}
             */
            getHeight: function () {
                return Kiss2D.Canvas.canvasElement.height;
            },
            /**
             * Gets/sets the height of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getHeight
             * @return  {number}
             */
            /**
             * Gets/sets the height of the underlying HTML5 CanvasElement element
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setHeight
             * @param   {number}    value
             * @return  {void}
             */
            setHeight: function (value) {
                Kiss2D.Canvas.canvasElement.height = value;
            },
            /**
             * Gets/sets the screen's "position" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getPosition
             * @return  {String}
             */
            /**
             * Gets/sets the screen's "position" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setPosition
             * @param   {String}    value
             * @return  {void}
             */
            getPosition: function () {
                return Kiss2D.Canvas.canvasElement.style.position;
            },
            /**
             * Gets/sets the screen's "position" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getPosition
             * @return  {String}
             */
            /**
             * Gets/sets the screen's "position" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setPosition
             * @param   {String}    value
             * @return  {void}
             */
            setPosition: function (value) {
                Kiss2D.Canvas.canvasElement.style.position = value;
            },
            /**
             * Gets/sets the screen's "left" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getLeft
             * @return  {string}
             */
            /**
             * Gets/sets the screen's "left" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setLeft
             * @param   {string}    value
             * @return  {void}
             */
            getLeft: function () {
                return Kiss2D.Canvas.canvasElement.style.left;
            },
            /**
             * Gets/sets the screen's "left" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getLeft
             * @return  {string}
             */
            /**
             * Gets/sets the screen's "left" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setLeft
             * @param   {string}    value
             * @return  {void}
             */
            setLeft: function (value) {
                Kiss2D.Canvas.canvasElement.style.left = value;
            },
            /**
             * Gets/sets the screen's "top" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getTop
             * @return  {string}
             */
            /**
             * Gets/sets the screen's "top" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setTop
             * @param   {string}    value
             * @return  {void}
             */
            getTop: function () {
                return Kiss2D.Canvas.canvasElement.style.top;
            },
            /**
             * Gets/sets the screen's "top" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getTop
             * @return  {string}
             */
            /**
             * Gets/sets the screen's "top" style
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setTop
             * @param   {string}    value
             * @return  {void}
             */
            setTop: function (value) {
                Kiss2D.Canvas.canvasElement.style.top = value;
            },
            /**
             * Gets/sets the screen's background color
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getBackgroundColor
             * @return  {string}
             */
            /**
             * Gets/sets the screen's background color
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setBackgroundColor
             * @param   {string}    value
             * @return  {void}
             */
            getBackgroundColor: function () {
                return Kiss2D.Canvas.canvasElement.style.backgroundColor;
            },
            /**
             * Gets/sets the screen's background color
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function getBackgroundColor
             * @return  {string}
             */
            /**
             * Gets/sets the screen's background color
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @function setBackgroundColor
             * @param   {string}    value
             * @return  {void}
             */
            setBackgroundColor: function (value) {
                Kiss2D.Canvas.canvasElement.style.backgroundColor = value;
            },
            getFillStyle: function () {
                return Kiss2D.Canvas.context.fillStyle.toString();
            },
            setFillStyle: function (value) {
                Kiss2D.Canvas.context.fillStyle = value;
            },
            getLineWidth: function () {
                return Kiss2D.Canvas.context.lineWidth;
            },
            setLineWidth: function (value) {
                Kiss2D.Canvas.context.lineWidth = value;
            },
            clearRect: function (Left, Top, Right, Bottom) {
                Kiss2D.Canvas.context.clearRect(Left, Top, Right, Bottom);
            },
            fillRect: function (Left, Top, Right, Bottom) {
                Kiss2D.Canvas.context.fillRect(Left, Top, Right, Bottom);
            },
            drawGraphic: function (Path, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
                if (dx === void 0) { dx = -1; }
                if (dy === void 0) { dy = -1; }
                if (dwidth === void 0) { dwidth = -1; }
                if (dheight === void 0) { dheight = -1; }
                var img = Kiss2D.Canvas.graphics.get(Path);
                if (dx === -1 || dy === -1 || dwidth === -1 || dheight === -1) {
                    Kiss2D.Canvas.context.drawImage(img, sx, sy, swidth, sheight);
                } else {
                    Kiss2D.Canvas.context.drawImage(img, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
                }
            },
            moveTo: function (x, y) {
                Kiss2D.Canvas.context.moveTo(x, y);
            },
            lineTo: function (x, y) {
                Kiss2D.Canvas.context.lineTo(x, y);
            },
            rect: function (Left, Top, RIght, Bottom) {
                Kiss2D.Canvas.context.rect(Left, Top, RIght, Bottom);
            },
            ellipse: function (x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockwise) {
                if (counterClockwise === void 0) { counterClockwise = false; }
                Kiss2D.Canvas.context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockwise);
            },
            /**
             * Sets up the CanvasElement and its context
             <param name="UseDefaults">Set to true to have the canvas take up the entire screen; the background color will also be turned black to make sure it worked and all that.</param>
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @param   {boolean}    UseDefaults    Set to true to have the canvas take up the entire screen; the background color will also be turned black to make sure it worked and all that.
             * @return  {void}
             */
            create: function (UseDefaults) {
                if (UseDefaults === void 0) { UseDefaults = false; }
                if (!Kiss2D.Canvas.created) {
                    // If using default layout, set the CSS, width and height
                    if (UseDefaults) {
                        Kiss2D.Canvas.setPosition("absolute");
                        Kiss2D.Canvas.setLeft("0px");
                        Kiss2D.Canvas.setTop("0px");
                        Kiss2D.Canvas.setWidth(window.innerWidth);
                        Kiss2D.Canvas.setHeight(window.innerHeight);
                        Kiss2D.Canvas.setBackgroundColor("black");
                    }

                    window.addEventListener("resize", $asm.$.Kiss2D.Canvas.f1);

                    // Add the CanvasElement element to the page
                    document.body.appendChild(Kiss2D.Canvas.canvasElement);

                    // Try to get its "context"
                    Kiss2D.Canvas.context = Kiss2D.Canvas.canvasElement.getContext("2d");
                    if (Bridge.equals(Kiss2D.Canvas.context, null)) {
                        throw new Kiss2D.KissException("CanvasElementError: HTML5 CanvasElement not supported.");
                    }
                    Kiss2D.Canvas.created = true; // So it won't bug out if someone calls Create twice
                }
            },
            /**
             * Adds an event listener to the canvas
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @param   {string}           EventName    The event name (i.e. "click", "keydown", "touchstart" etc.)
             * @param   {System.Action}    Callback     The code to run when the event is triggered
             * @return  {void}
             */
            addEvent: function (EventName, Callback) {
                window.addEventListener(EventName, Callback);
            },
            /**
             * Sets up the canvas's animation loop - call this before calling Pause, obviously :)
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @param   {System.Action}    callback    The main game loop - this gets called at every step/frame.
             * @return  {void}
             */
            startAnimationLoop: function (callback) {
                Kiss2D.Canvas.loop = callback;
                Kiss2D.Canvas.step();
            },
            /**
             * Pauses/un-pauses the game
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @return  {void}
             */
            pause: function () {
                // Toggle the "Paused" property
                Kiss2D.Canvas.paused = !Kiss2D.Canvas.paused;

                // If we just un-paused, resume the game loop
                if (!Kiss2D.Canvas.paused) {
                    window.requestAnimationFrame(Kiss2D.Canvas.step);
                }
            },
            /**
             * Constructor - Loads the image and sets instance variables
             *
             * @static
             * @public
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @param   {string}    source    The path to an image file
             * @return  {void}
             */
            loadGraphic: function (source) {
                var img = new Image();
                img.style.visibility = "hidden";
                img.src = source;
                document.body.appendChild(img);
                Kiss2D.Canvas.graphics.add(source, img);
            },
            /**
             * This calls the user-defined animation loop
             *
             * @static
             * @private
             * @this Kiss2D.Canvas
             * @memberof Kiss2D.Canvas
             * @return  {void}
             */
            step: function () {
                if (!Kiss2D.Canvas.paused) {
                    // Clear the entire canvas
                    Kiss2D.Canvas.context.clearRect(0, 0, Kiss2D.Canvas.getWidth(), Kiss2D.Canvas.getHeight());

                    // Call the user's code
                    Kiss2D.Canvas.loop();

                    // and continue the loop
                    window.requestAnimationFrame(Kiss2D.Canvas.step);
                }
            }
        }
    });

    Bridge.ns("Kiss2D.Canvas", $asm.$);

    Bridge.apply($asm.$.Kiss2D.Canvas, {
        f1: function () {
            if (Kiss2D.Canvas.orientation === Kiss2D.Orientation.PORTRAIT) {
                if (window.innerWidth > window.innerHeight) {
                    // Left off here
                } else {

                }
            }
            if (Kiss2D.Canvas.orientation === Kiss2D.Orientation.LANDSCAPE) {
                if (window.innerWidth > window.innerHeight) {

                } else {

                }
            }
        }
    });

    Bridge.define("Kiss2D.Game", {
        statics: {
            paused: false,
            graphicsObjects: null,
            soundObjects: null,
            config: {
                init: function () {
                    this.graphicsObjects = new (System.Collections.Generic.List$1(Kiss2D.IDrawable))();
                    this.soundObjects = new (System.Collections.Generic.List$1(Howl))();
                }
            },
            pause: function () {
                Kiss2D.Game.paused = !Kiss2D.Game.paused;
            }
        }
    });

    /**
     * This super-simple interface is all about pausing the game.  Whehter it's for
     sounds, graphics, game objects, or whatever, they all need a Pause method.
     It's meant to be a toggle (since the game is either paused or not paused),
     so there ARE no "resume" or "unpause" methodS.
     *
     * @abstract
     * @class Kiss2D.IPausable
     */
    Bridge.define("Kiss2D.IPausable", {
        $kind: "interface"
    });

    /**
     * This super-simple interface just makes sure objects have a "Draw" method
     Eventually the goal is to abstract this kind of stuff away, but for now I
     know we'll need it for the animation loop and probably other stuff.
     *
     * @abstract
     * @class Kiss2D.IDrawable
     */
    Bridge.define("Kiss2D.IDrawable", {
        $kind: "interface"
    });

    /**
     * Simple exception class that logs to the browser console
     *
     * @public
     * @class Kiss2D.KissException
     * @augments System.Exception
     */
    Bridge.define("Kiss2D.KissException", {
        inherits: [System.Exception],
        ctor: function (sMessage) {
            this.$initialize();
            System.Exception.ctor.call(this);
            // NOTE: I'm using Script.Call because Bridge doesn't seem to have that yet.
            // It has a Console.WriteLine, but it creates a console in the DOM (kinda stupid IMO).
            console.log(sMessage);
        }
    });

    /**
     * Used in the window onresize event to dynamically resize the canvas
     *
     * @public
     * @class Kiss2D.Orientation
     */
    Bridge.define("Kiss2D.Orientation", {
        $kind: "enum",
        statics: {
            NONE: 0,
            PORTRAIT: 1,
            LANDSCAPE: 2
        }
    });

    Bridge.define("Kiss2D.GameObject", {
        inherits: [Kiss2D.IDrawable,Kiss2D.IPausable],
        config: {
            properties: {
                X: 0,
                Y: 0,
                Width: 0,
                Height: 0,
                Speed: 0
            },
            alias: [
            "draw", "Kiss2D$IDrawable$draw",
            "pause", "Kiss2D$IPausable$pause"
            ]
        },
        /**
         * Checks for collisions with other instances
         *
         * @instance
         * @public
         * @this Kiss2D.GameObject
         * @memberof Kiss2D.GameObject
         * @param   {Kiss2D.GameObject}    other    Any other instance
         * @return  {boolean}                       True if the 2 objects collide, false otherwise
         */
        collision: function (other) {
            return (this.getX() <= ((other.getX() + other.getWidth()) | 0) && ((this.getX() + this.getWidth()) | 0) >= other.getX() && this.getY() <= ((other.getY() + other.getHeight()) | 0) && ((this.getHeight() + this.getY()) | 0) >= other.getY());
        },
        draw: function () {
        },
        pause: function () {
        }
    });
});
