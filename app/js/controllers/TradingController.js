class TradingController {
    constructor() {
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputValue = document.querySelector('#value');
    }
    add(event) {
        event.preventDefault();
        const trading = new Trading(new Date(this._inputDate.value.replace(/-/g, '/')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        console.log(trading);
    }
}
