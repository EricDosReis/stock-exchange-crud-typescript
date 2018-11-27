System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, TradingController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            TradingController = class TradingController {
                constructor() {
                    this._tradings = new index_1.Tradings();
                    this._tradingsView = new index_2.TradingsView('#tradings-view');
                    this._messageView = new index_2.MessageView('#message-view');
                    this._inputDate = document.querySelector('#date');
                    this._inputQuantity = document.querySelector('#quantity');
                    this._inputValue = document.querySelector('#value');
                    this._tradingsView.update(this._tradings);
                }
                add(event) {
                    event.preventDefault();
                    this._tradings.add(new index_1.Trading(new Date(this._inputDate.value.replace(/-/g, '/')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value)));
                    this._tradingsView.update(this._tradings);
                    this._messageView.update('Trading added successfully');
                }
            };
            exports_1("TradingController", TradingController);
        }
    };
});
