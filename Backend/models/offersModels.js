const mongoose = require('mongoose');

const offersSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title value']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    image: {
        type: String,
        default: ""
    }


},
{
    timestamps: true
}
)

module.exports = mongoose.model('Offer',offersSchema)