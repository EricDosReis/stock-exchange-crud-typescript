class TradingController {
    constructor() {
        this._tradings = new Tradings();
        this._tradingsView = new TradingsView('#tradings-view');
        this._inputDate = document.querySelector('#date');
        this._inputQuantity = document.querySelector('#quantity');
        this._inputValue = document.querySelector('#value');
        this._tradingsView.update(this._tradings);
    }
    add(event) {
        event.preventDefault();
        this._tradings.add(new Trading(new Date(this._inputDate.value.replace(/-/g, '/')), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value)));
        this._tradingsView.update(this._tradings);
    }
}
