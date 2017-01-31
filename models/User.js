const mongoose     = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const Schema       = mongoose.Schema;

const UserSchema = new Schema({
    twitter : {},
    pictures: [{
        type: Schema.Types.ObjectId,
        ref : 'Picture'
    }]
});
UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);
