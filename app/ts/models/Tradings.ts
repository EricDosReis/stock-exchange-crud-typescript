import { Trading } from './Trading';
import { Loggable } from './Loggable'
import { Equable } from './Equable'

export class Tradings implements Loggable, Equable<Tradings> {

  private _tradings: Trading[] = [];

  add(trading: Trading): void {
    this._tradings.push(trading);
  }

  toArray(): Trading[] {
    return ([] as Trading[]).concat(this._tradings);
  }
  
  toText(): void {
    console.log('Tradings');
    console.log(this._tradings);
  }

  isEquals(tradings: Tradings): boolean {
    return JSON.stringify(this._tradings) == JSON.stringify(tradings.toArray());
  }

}
