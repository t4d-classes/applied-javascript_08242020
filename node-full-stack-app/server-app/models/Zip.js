

module.exports.Zip = global.sampleTrainingConn.model(
  'Zip',
  {
    city: String,
    zip: String,
    pop: Number,
    state: String,
    loc: {
      x: Number,
      y: Number,
    },
  });