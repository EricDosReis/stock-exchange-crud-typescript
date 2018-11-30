import { Trading, Tradings, PartialTrading } from '../models/index';
import { TradingsView, MessageView } from '../views/index';

import { domInject, throttle, isOk, log } from '../helpers/index';
import { weekDay } from '../enums/weekDay';
import { TradingService } from '../services/index';

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
  private _tradingService = new TradingService();

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

      log(this._tradings);

      this._tradingsView.update(this._tradings);
      this._messageView.update('Trading added successfully');
    } else {
      this._messageView.update('It is not possible perform tradings on weekends.');
    }
  }

  @throttle()
  async importAll() {
    try {
      const tradingsToImport = await this._tradingService.getTradings(isOk)
      const importedTradings = this._tradings.toArray();

      tradingsToImport
        .filter(trading =>
          !importedTradings.some(importedTrading => importedTrading.isEquals(trading)))
        .forEach((trading: Trading) => this._tradings.add(trading));

      this._tradingsView.update(this._tradings);
      this._messageView.update('Tradings imported successfully');
    } catch(err) {
      this._messageView.update(err.message)
    }
  }

  private _isWeekend(date: Date): boolean {
    const day = date.getDay();

    if (day === weekDay.SATURDAY || day === weekDay.SUNDAY) 
      return true;

    return false;
  }
  
}
