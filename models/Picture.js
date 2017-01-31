const mongoose     = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const Schema       = mongoose.Schema;

const PictureSchema = new Schema({
    url        : {
        type    : String,
        required: true
    },
    description: {
        type   : String,
        default: ''
    },
    followers  : [{
        type: Schema.Types.ObjectId,
        ref : 'User'
    }]
});
PictureSchema.plugin(findOrCreate);

module.exports = mongoose.model('Picture', PictureSchema);

