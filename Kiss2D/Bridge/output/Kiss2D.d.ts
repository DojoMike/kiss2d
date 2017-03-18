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
        clearRect(Left: number, Top: number, Right: number, Bottom: number): void;
        fillRect(Left: number, Top: number, Right: number, Bottom: number): void;
        drawGraphic(Path: string, sx: number, sy: number, swidth: number, sheight: number, dx?: number, dy?: number, dwidth?: number, dheight?: number): void;
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
