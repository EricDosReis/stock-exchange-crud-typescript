class Tradings {

  private _tradings: Trading[] = [];

  add(trading: Trading): void {
    this._tradings.push(trading);
  }

  toArray(): Trading[] {
    return [].concat(this._tradings);
  }
  
}
