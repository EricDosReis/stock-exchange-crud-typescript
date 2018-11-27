System.register(["./controllers/TradingController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TradingController_1, controller;
    return {
        setters: [
            function (TradingController_1_1) {
                TradingController_1 = TradingController_1_1;
            }
        ],
        execute: function () {
            controller = new TradingController_1.TradingController();
            document
                .querySelector('.form')
                .addEventListener('submit', controller.add.bind(controller));
        }
    };
});
