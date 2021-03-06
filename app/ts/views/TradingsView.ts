import { View } from './View';
import { Tradings } from '../models/Tradings';

export class TradingsView extends View<Tradings> {

  template(tradings: Tradings): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Volume</th>
          </tr>
        </thead>

        <tbody>
          ${tradings.toArray().map(trading =>
            `
              <tr>
                <td>
                  ${trading.date.getDate()}/${trading.date.getMonth() + 1}/${trading.date.getFullYear()}
                </td>
                <td>${trading.quantity}</td>
                <td>${trading.value}</td>
                <td align="right">${trading.volume}</td>
              </tr>
            `
          ).join('')}
        </tbody>
      </table>
    `;
  }

}
