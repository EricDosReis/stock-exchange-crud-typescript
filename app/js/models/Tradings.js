System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tradings;
    return {
        setters: [],
        execute: function () {
            Tradings = class Tradings {
                constructor() {
                    this._tradings = [];
                }
                add(trading) {
                    this._tradings.push(trading);
                }
                toArray() {
                    return [].concat(this._tradings);
                }
            };
            exports_1("Tradings", Tradings);
        }
    };
});
