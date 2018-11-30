import { Trading, PartialTrading } from "../models/index";

export class TradingService {
  getTradings(handler: HandlerFunction): Promise<Trading[]> {
    return fetch('http://localhost:8080/tradings')
      .then(handler)
      .then(res => res.json())
      .then((tradings: PartialTrading[]) => 
        tradings
          .map(trading => new Trading(new Date(), trading.quantity, trading.value))
      )
      .catch(err => {
        console.log(err);
        
        throw new Error('Could not import tradings');
      });
  }
}

export interface HandlerFunction {
  (res: Response): Response;
}
