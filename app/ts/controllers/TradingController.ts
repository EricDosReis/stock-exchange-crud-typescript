import { Trading, Tradings } from '../models/index';
import { TradingsView, MessageView } from '../views/index';

import { logExecutionTime } from '../helpers/decorators/index';
import { weekDay } from '../enums/weekDay';

export class TradingController {

  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _tradings = new Tradings();
  private _tradingsView = new TradingsView('#tradings-view');
  private _messageView = new MessageView('#message-view');

  constructor() {
    this._inputDate = <HTMLInputElement>document.querySelector('#date');
    this._inputQuantity = <HTMLInputElement>document.querySelector('#quantity');
    this._inputValue = <HTMLInputElement>document.querySelector('#value');

    this._tradingsView.update(this._tradings);
  }

  @logExecutionTime()
  add(event: Event) {
    event.preventDefault();

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

  private _isWeekend(date: Date): boolean {
    const day = date.getDay();

    if (day === weekDay.SATURDAY || day === weekDay.SUNDAY) 
      return true;

    return false;
  }
  
}
