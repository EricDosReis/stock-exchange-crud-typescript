import { Trading, PartialTrading } from "../models/index";

export class TradingService {
  getTradings(handler: HandlerFunction): Promise<Trading[]> {
    return fetch('http://localhost:8080/tradings')
      .then(res => handler(res))
      .then(res => res.json())
      .then((tradings: PartialTrading[]) => 
        tradings
          .map(trading => new Trading(new Date(), trading.quantity, trading.value))
      )
      .catch(err => console.log(err));
  }
}

export interface HandlerFunction {
  (res: Response): Response;
}
