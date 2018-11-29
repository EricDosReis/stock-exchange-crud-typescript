System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, TradingService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            TradingService = class TradingService {
                getTradings(handler) {
                    return fetch('http://localhost:8080/tradings')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((tradings) => tradings
                        .map(trading => new index_1.Trading(new Date(), trading.quantity, trading.value)))
                        .catch(err => console.log(err));
                }
            };
            exports_1("TradingService", TradingService);
        }
    };
});
