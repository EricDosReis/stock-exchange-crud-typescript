System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Trading;
    return {
        setters: [],
        execute: function () {
            Trading = class Trading {
                constructor(_date, _quantity, _value) {
                    this._date = _date;
                    this._quantity = _quantity;
                    this._value = _value;
                }
                get date() {
                    return this._date;
                }
                get quantity() {
                    return this._quantity;
                }
                get value() {
                    return this._value;
                }
                get volume() {
                    return this._quantity * this._value;
                }
            };
            exports_1("Trading", Trading);
        }
    };
});
