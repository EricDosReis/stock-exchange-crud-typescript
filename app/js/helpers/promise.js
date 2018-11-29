System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isOk(res) {
        if (res.ok)
            return res;
        else
            throw new Error(res.statusText);
    }
    exports_1("isOk", isOk);
    return {
        setters: [],
        execute: function () {
        }
    };
});
