System.register(["../models/index", "../views/index", "../helpers/index", "../enums/weekDay", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, weekDay_1, index_4, TradingController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (weekDay_1_1) {
                weekDay_1 = weekDay_1_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            TradingController = class TradingController {
                constructor() {
                    this._tradings = new index_1.Tradings();
                    this._tradingsView = new index_2.TradingsView('#tradings-view');
                    this._messageView = new index_2.MessageView('#message-view');
                    this._tradingService = new index_4.TradingService();
                    this._tradingsView.update(this._tradings);
                }
                add() {
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
                importAll() {
                    this._tradingService
                        .getTradings(index_3.isOk)
                        .then((tradings) => {
                        tradings
                            .forEach((trading) => this._tradings.add(trading));
                        this._tradingsView.update(this._tradings);
                        this._messageView.update('Tradings imported successfully');
                    })
                        .catch((err) => this._messageView.update(`An unexpected error occurs: ${err}`));
                }
                _isWeekend(date) {
                    const day = date.getDay();
                    if (day === weekDay_1.weekDay.SATURDAY || day === weekDay_1.weekDay.SUNDAY)
                        return true;
                    return false;
                }
            };
            __decorate([
                index_3.domInject('#date')
            ], TradingController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject('#quantity')
            ], TradingController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_3.domInject('#value')
            ], TradingController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle()
            ], TradingController.prototype, "add", null);
            __decorate([
                index_3.throttle()
            ], TradingController.prototype, "importAll", null);
            exports_1("TradingController", TradingController);
        }
    };
});
