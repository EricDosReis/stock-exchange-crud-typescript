import { Trading, Tradings, PartialTrading } from '../models/index';
import { TradingsView, MessageView } from '../views/index';

import { logExecutionTime, domInject, throttle } from '../helpers/decorators/index';
import { weekDay } from '../enums/weekDay';

export class TradingController {

  @domInject('#date')
  private _inputDate: HTMLInputElement;

  @domInject('#quantity')
  private _inputQuantity: HTMLInputElement;

  @domInject('#value')
  private _inputValue: HTMLInputElement;

  private _tradings = new Tradings();
  private _tradingsView = new TradingsView('#tradings-view');
  private _messageView = new MessageView('#message-view');

  constructor() {
    this._tradingsView.update(this._tradings);
  }

  @throttle()
  add() {
    let date = new Date(this._inputDate.value.replace(/-/g, '/'));

    if (!this._isWeekend(date)) {
      this._tradings.add(new Trading(
        date,
        parseInt(this._inputQuantity.value),
        parseFloat(this._inputValue.value),
      ))

      this._tradingsView.update(this._tradings);
      this._messageView.update('Trading added successfully');
    } else {
      this._messageView.update('It is not possible perform tradings on weekends.');
    }
  }

  @throttle()
  import():void {
    fetch('http://localhost:8080/tradings')
      .then(res => res.json())
      .then((tradings: PartialTrading[]) => {
        tradings
          .map(trading => new Trading(new Date(), trading.quantity, trading.value))
          .forEach(trading => this._tradings.add(trading));

        this._tradingsView.update(this._tradings);
        this._messageView.update('Tradings imported successfully');
      })
      .catch(err => this._messageView.update(`An unexpected error occurs: ${err}`));
  }

  private _isWeekend(date: Date): boolean {
    const day = date.getDay();

    if (day === weekDay.SATURDAY || day === weekDay.SUNDAY) 
      return true;

    return false;
  }
  
}
