"use strict";

const { Router } = require("express")
const { 
    createStorage,
    readStorage,
    updateStorage,
    deleteStorage
} = require("../controllers/storage.controller");


const api = Router();

api.post("/create-storage", createStorage);

api.get("/read-storage", readStorage);

api.put("/update-storage/:id", updateStorage);

api.delete("/delete-storage/:id", deleteStorage);

module.exports = api;