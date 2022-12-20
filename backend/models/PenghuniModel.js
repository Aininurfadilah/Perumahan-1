const mongoose = require("mongoose")

const penghuniSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    telp:{
        type: String,
        required: true
    },
    rumah:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const penghuniModel = mongoose.model("penghuni", penghuniSchema);

module.exports = penghuniModel;