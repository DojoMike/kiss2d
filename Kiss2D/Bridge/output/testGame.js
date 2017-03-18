Bridge.assembly("Kiss2D", function ($asm, globals) {
    "use strict";

    Bridge.define("TestGame.App", {
        $main: function () {
            Kiss2D.Screen.create();
        }
    });
});
