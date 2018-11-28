System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime() {
        return function (target, property, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                console.log('---------------------------------------------------------');
                console.log(`Method: ${property}`);
                console.log(`Params: ${JSON.stringify(args)}`);
                const start = performance.now();
                const result = originalMethod.apply(this, args);
                const end = performance.now();
                console.log(`Return: ${JSON.stringify(result)}`);
                console.log(`Execution time: ${end - start}ms`);
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
