System.register(["../models/index", "../views/index", "../enums/weekDay"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, weekDay_1, TradingController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (weekDay_1_1) {
                weekDay_1 = weekDay_1_1;
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
                    let date = new Date(this._inputDate.value.replace(/-/g, '/'));
                    if (!this._isWeekend(date)) {
                        this._tradings.add(new index_1.Trading(date, parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value)));
                        this._tradingsView.update(this._tradings);
                        this._messageView.update('Trading added successfully');
                    }
                    else {
                        this._messageView.update('It is not possible perform tradings on weekends.');
                    }
                }
                _isWeekend(date) {
                    const day = date.getDay();
                    if (day === weekDay_1.weekDay.SATURDAY || day === weekDay_1.weekDay.SUNDAY)
                        return true;
                    return false;
                }
            };
            exports_1("TradingController", TradingController);
        }
    };
});
