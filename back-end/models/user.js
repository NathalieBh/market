const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: string,
    require: true,
  },
  userId: {
    type: string,
    require: true,
  },
});
module.exports = mongoose.model('User', userSchema);
