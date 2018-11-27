System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(selector, noScriptTag = false) {
                    this._element = document.querySelector(selector) || document.body;
                    this._noScriptTag = noScriptTag;
                }
                update(model) {
                    let template = this.template(model);
                    if (this._noScriptTag)
                        template = this._removeScriptTag(template);
                    this._element.innerHTML = template;
                }
                _removeScriptTag(template) {
                    return template.replace(/<script>[\s\S]*?<\/script>/g, '');
                }
            };
            exports_1("View", View);
        }
    };
});
