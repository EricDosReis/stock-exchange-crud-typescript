import { Loggable } from './Loggable';
import { Equable } from './Equable';

export class Trading implements Loggable, Equable<Trading> {

  constructor(readonly date: Date, readonly quantity: number, readonly value: number) {}

  get volume() {
    return this.quantity * this.value;
  }

  toText(): void {
    console.log('Trading');
    console.log(`
      Date: ${this.date}
      Value: ${this.value}
      Volume: ${this.volume}
    `);
  }

  isEquals(trading: Trading):boolean {
    return this.date.getDate() == trading.date.getDate()
      && this.date.getMonth() == trading.date.getMonth()
      && this.date.getFullYear() == trading.date.getFullYear();
  }
  
}
