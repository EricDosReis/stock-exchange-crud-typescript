System.register(["./controllers/TradingController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TradingController_1, controller, form, buttonImport;
    return {
        setters: [
            function (TradingController_1_1) {
                TradingController_1 = TradingController_1_1;
            }
        ],
        execute: function () {
            controller = new TradingController_1.TradingController();
            form = document.querySelector('.form');
            buttonImport = document.querySelector('#import');
            if (form)
                form.addEventListener('submit', controller.add.bind(controller));
            if (buttonImport)
                buttonImport.addEventListener('click', controller.import.bind(controller));
        }
    };
});
