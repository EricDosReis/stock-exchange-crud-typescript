System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime() {
        return function (target, key, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                const result = originalMethod.apply(this, args);
                return result;
            };
            return descriptor;
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
