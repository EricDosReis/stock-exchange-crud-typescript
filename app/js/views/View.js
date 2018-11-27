System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector) {
                    this._element = document.querySelector(selector);
                }
                update(model) {
                    this._element.innerHTML = this.template(model);
                }
            };
            exports_1("View", View);
        }
    };
});
