const { model, Schema } = require('mongoose');

const ContectSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contect = model('Contect', ContectSchema);
module.exports = Contect;
