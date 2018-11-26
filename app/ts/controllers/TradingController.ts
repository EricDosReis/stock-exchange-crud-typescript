class TradingController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _tradings = new Tradings();
  private _tradingsView = new TradingsView('#tradings-view');

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector('#date');
    this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
    this._inputValue = <HTMLInputElement>document.querySelector('#value');

    this._tradingsView.update(this._tradings);
  }

  add(event: Event) {
    event.preventDefault();
     
    this._tradings.add(new Trading(
      new Date(this._inputDate.value.replace(/-/g, '/')),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value),
    ))

    this._tradingsView.update(this._tradings);
  }
}
