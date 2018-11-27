System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var weekDay;
    return {
        setters: [],
        execute: function () {
            (function (weekDay) {
                weekDay[weekDay["SUNDAY"] = 0] = "SUNDAY";
                weekDay[weekDay["MONDAY"] = 1] = "MONDAY";
                weekDay[weekDay["TUESDAY"] = 2] = "TUESDAY";
                weekDay[weekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
                weekDay[weekDay["THURSDAY"] = 4] = "THURSDAY";
                weekDay[weekDay["FRIDAY"] = 5] = "FRIDAY";
                weekDay[weekDay["SATURDAY"] = 6] = "SATURDAY";
            })(weekDay || (weekDay = {}));
            exports_1("weekDay", weekDay);
        }
    };
});
