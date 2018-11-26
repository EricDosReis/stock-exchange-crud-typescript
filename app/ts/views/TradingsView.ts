class TradingsView {

  private _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  };

  template(tradings: Tradings): string {
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
          ${tradings.toArray().map(trading =>
            `
              <tr>
                <td>
                  ${trading.date.getDate()}/${trading.date.getMonth() + 1}/${trading.date.getFullYear()}
                </td>
                <td>${trading.quantity}</td>
                <td>${trading.value}</td>
                <td align="right">${trading.volume}</td>
              </tr>
            `
          ).join('')}
        </tbody>
      </table>
    `;
  }

  update(tradings: Tradings):void {
    this._element.innerHTML = this.template(tradings);
  }

}
