import { TradingController } from './controllers/TradingController';

const controller = new TradingController();

const form = document.querySelector('.form');
const buttonImport = document.querySelector('#import');

if (form)
  form.addEventListener('submit', controller.add.bind(controller));

if (buttonImport)
  buttonImport.addEventListener('click', controller.import.bind(controller));
