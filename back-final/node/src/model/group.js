const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    members: [{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        balance: {
            type: Number,
            default: 0
        }
    }]
})


const Group = mongoose.model('Group', groupSchema);

module.exports = Group