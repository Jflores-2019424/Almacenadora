'use strict';

const Storage = require("../models/storage.model");

const createStorage = async(req, res) =>{
    const {nombreTarea} = req.body;
    try{
        let storage = await Storage.findOne({nombreTarea: nombreTarea})
        if(storage){
            return res.status(400).send({
                message: "Ya existe una tarea con este nombre",
                ok: false,
                storage: storage
            });
        }
        storage = new Storage(req.body);

        storage = await storage.save();
    }catch(err){
        throw new Error(err);
    }
};

const readStorage = async(req, res) =>{
    try{
        const storage = await Storage.find();

        if(!storage){
            res.status(400).send({
                message:"No existen tareas guardadas"
            })
        }else{
            res.status(200).send({
                storage: storage
            })
        }
    }catch(err){
        res.status(404).send({
            message:"No se pudo listar las tareas ",
            err
        });
    }
};

const updateStorage = async(req, res) =>{
    try{
        const id = req.params.id;
        const storageEdit =  {...req.body};

        const storageComplete = await Storage.findByIdAndUpdate(id, storageEdit, {
            new: true
        });
        if(storageComplete){
            return res.status(200).send({
                message: 'Tarea actualizada correctamente',
                storageComplete
            })
        }else{
            res.status(404).send({
                message:"Esta tarea no existe"
            })
        }
    }catch(err){
        throw new Error(err);
    }
};

const deleteStorage = async(req, res) =>{
     try{
        const id = req.params.id;
        const storageDelete = await Storage.findByIdAndDelete(id);
         return res.status(200).send({
            message:"Tarea eliminada correctamente", storageDelete
         })
     }catch(err){
        throw new Error(err);
     }
};

module.exports = {
    createStorage,
    readStorage,
    updateStorage,
    deleteStorage
}