System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function log(...objects) {
        objects
            .forEach(object => object.toText());
    }
    exports_1("log", log);
    return {
        setters: [],
        execute: function () {
        }
    };
});
