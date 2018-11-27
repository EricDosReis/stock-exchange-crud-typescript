import { TradingController } from './controllers/TradingController';

const controller = new TradingController();

const form = document.querySelector('.form');

if (form)
  form.addEventListener('submit', controller.add.bind(controller));
