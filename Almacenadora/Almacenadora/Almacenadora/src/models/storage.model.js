'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storageSchema = Schema({
    nombreTarea:{
        type: String,
        required: true
    },
    descripcionTarea: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: String,
        required: true
    },
    fechaFinal: {
        type: String,
        required: true
    },
    estadoTarea: {
        type: String,
        required: true
    },
    nombrePersona: {
        type: String,
        required: true
    }
});

module.exports  = mongoose.model("storage", storageSchema)