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
                toText() {
                    console.log('Trading');
                    console.log(`
      Date: ${this.date}
      Value: ${this.value}
      Volume: ${this.volume}
    `);
                }
                isEquals(trading) {
                    return this.date.getDate() == trading.date.getDate()
                        && this.date.getMonth() == trading.date.getMonth()
                        && this.date.getFullYear() == trading.date.getFullYear();
                }
            };
            exports_1("Trading", Trading);
        }
    };
});
