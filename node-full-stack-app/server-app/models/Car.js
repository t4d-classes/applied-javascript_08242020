
module.exports.Car = global.appToolsConn.model(
  'Car',
  {
    make: String,
    model: String,
    year: Number,
    color: String,
    price: Number,
  });