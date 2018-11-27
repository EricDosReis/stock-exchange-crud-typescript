import { Trading } from './Trading';

export class Tradings {

  private _tradings: Trading[] = [];

  add(trading: Trading): void {
    this._tradings.push(trading);
  }

  toArray(): Trading[] {
    return ([] as Trading[]).concat(this._tradings);
  }
  
}
