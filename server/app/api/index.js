const api = {};

const tradings = [
  { quantity: 1, value: 150 },
  { quantity: 2, value: 250 },
  { quantity: 3, value: 350 },
  { quantity: 1, value: 450 },
  { quantity: 2, value: 550 },
  { quantity: 3, value: 650 },
  { quantity: 4, value: 300 },
  { quantity: 1, value: 750 },
  { quantity: 2, value: 950 },
  { quantity: 3, value: 950 },
  { quantity: 1, value: 350 },
  { quantity: 2, value: 300 },
];

api.tradings = (req, res) => {
  res.json(tradings);
};

module.exports = api;
