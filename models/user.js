const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);
mongoose.set('useCreateIndex', true);//(node:19907) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead. // https://github.com/Automattic/mongoose/issues/6890
module.exports = mongoose.model('User', userSchema);