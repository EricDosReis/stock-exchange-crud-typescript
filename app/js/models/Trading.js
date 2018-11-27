System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Trading;
    return {
        setters: [],
        execute: function () {
            Trading = class Trading {
                constructor(date, quantity, value) {
                    this.date = date;
                    this.quantity = quantity;
                    this.value = value;
                }
                get volume() {
                    return this.quantity * this.value;
                }
            };
            exports_1("Trading", Trading);
        }
    };
});
