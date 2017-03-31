    /** @namespace System */

    /**
     * @memberof System
     * @callback System.Action
     * @param   {Event}    arg
     * @return  {void}
     */

/// <reference path="./bridge.d.ts" />

declare module Kiss2D {
    /** @namespace Kiss2D */

    /**
     * The Canvas class is an abstraction layer on top of the HTML5 canvas, its "context", and other stuff
     that's just not simple enough for a framework called KISS. :)
     *
     * @static
     * @abstract
     * @class Kiss2D.Canvas
     */
    export interface Canvas {
    }
    export interface CanvasFunc extends Function {
        prototype: Canvas;
        new (): Canvas;
        graphics: System.Collections.Generic.Dictionary$2<string,HTMLImageElement>;
        orientation: Kiss2D.Orientation;
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
        getWidth(): number;
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
        setWidth(value: number): void;
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
        getHeight(): number;
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
        setHeight(value: number): void;
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
        getPosition(): String;
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
        setPosition(value: String): void;
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
        getLeft(): string;
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
        setLeft(value: string): void;
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
        getTop(): string;
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
        setTop(value: string): void;
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
        getBackgroundColor(): string;
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
        setBackgroundColor(value: string): void;
        getFillStyle(): string;
        setFillStyle(value: string): void;
        getLineWidth(): number;
        setLineWidth(value: number): void;
        clearRect(Left: number, Top: number, Right: number, Bottom: number): void;
        fillRect(Left: number, Top: number, Right: number, Bottom: number): void;
        drawGraphic(Path: string, sx: number, sy: number, swidth: number, sheight: number, dx?: number, dy?: number, dwidth?: number, dheight?: number): void;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        rect(Left: number, Top: number, RIght: number, Bottom: number): void;
        ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterClockwise?: boolean): void;
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
        create(UseDefaults?: boolean): void;
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
        addEvent(EventName: string, Callback: {(arg: Event): void}): void;
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
        startAnimationLoop(callback: {(): void}): void;
        /**
         * Pauses/un-pauses the game
         *
         * @static
         * @public
         * @this Kiss2D.Canvas
         * @memberof Kiss2D.Canvas
         * @return  {void}
         */
        pause(): void;
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
        loadGraphic(source: string): void;
        /**
         * This calls the user-defined animation loop
         *
         * @static
         * @private
         * @this Kiss2D.Canvas
         * @memberof Kiss2D.Canvas
         * @return  {void}
         */
        step(): void;
    }
    var Canvas: CanvasFunc;

    export interface Game {
    }
    export interface GameFunc extends Function {
        prototype: Game;
        new (): Game;
        pause(): void;
    }
    var Game: GameFunc;

    /**
     * This super-simple interface is all about pausing the game.  Whehter it's for
     sounds, graphics, game objects, or whatever, they all need a Pause method.
     It's meant to be a toggle (since the game is either paused or not paused),
     so there ARE no "resume" or "unpause" methodS.
     *
     * @abstract
     * @class Kiss2D.IPausable
     */
    export interface IPausable {
        /**
         * Pause/un-pause the object when the game is paused/un-paused
         *
         * @instance
         * @abstract
         * @public
         * @this Kiss2D.IPausable
         * @memberof Kiss2D.IPausable
         * @return  {void}
         */
        pause(): void;
    }
    var IPausable: Function;

    /**
     * This super-simple interface just makes sure objects have a "Draw" method
     Eventually the goal is to abstract this kind of stuff away, but for now I
     know we'll need it for the animation loop and probably other stuff.
     *
     * @abstract
     * @class Kiss2D.IDrawable
     */
    export interface IDrawable {
        draw(): void;
    }
    var IDrawable: Function;

    /**
     * Simple exception class that logs to the browser console
     *
     * @class Kiss2D.KissException
     * @augments System.Exception
     */
    export interface KissException extends System.Exception {
    }
    export interface KissExceptionFunc extends Function {
        prototype: KissException;
        new (sMessage: string): KissException;
    }
    var KissException: KissExceptionFunc;

    /**
     * Used in the window onresize event to dynamically resize the canvas
     *
     * @class Kiss2D.Orientation
     */
    export enum Orientation {
        NONE = 0,
        PORTRAIT = 1,
        LANDSCAPE = 2
    }

    export interface GameObject extends Kiss2D.IDrawable,Kiss2D.IPausable {
        getX(): number;
        setX(value: number): void;
        getY(): number;
        setY(value: number): void;
        getWidth(): number;
        setWidth(value: number): void;
        getHeight(): number;
        setHeight(value: number): void;
        getSpeed(): number;
        setSpeed(value: number): void;
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
        collision(other: Kiss2D.GameObject): boolean;
        draw(): void;
        pause(): void;
    }
    export interface GameObjectFunc extends Function {
        prototype: GameObject;
        new (): GameObject;
    }
    var GameObject: GameObjectFunc;

}

/// <reference path="./bridge.d.ts" />

declare module TestGame {
    export interface App {
    }
    export interface AppFunc extends Function {
        prototype: App;
        new (): App;
        main(): void;
    }
    var App: AppFunc;
}
