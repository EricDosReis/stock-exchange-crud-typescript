class TradingController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector('#date');
    this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
    this._inputValue = <HTMLInputElement>document.querySelector('#value');
  }

  add(event: Event) {
    event.preventDefault();
     
    const trading = new Trading(
      new Date(this._inputDate.value.replace(/-/g, '/')),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value),
    );

    console.log(trading);
  }
}
