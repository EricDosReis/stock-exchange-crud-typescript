System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, TradingsView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            TradingsView = class TradingsView extends View_1.View {
                template(tradings) {
                    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Volume</th>
          </tr>
        </thead>

        <tbody>
          ${tradings.toArray().map(trading => `
              <tr>
                <td>
                  ${trading.date.getDate()}/${trading.date.getMonth() + 1}/${trading.date.getFullYear()}
                </td>
                <td>${trading.quantity}</td>
                <td>${trading.value}</td>
                <td align="right">${trading.volume}</td>
              </tr>
            `).join('')}
        </tbody>
      </table>
    `;
                }
            };
            exports_1("TradingsView", TradingsView);
        }
    };
});
