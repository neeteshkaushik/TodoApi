const mongoose = require('mongoose');
const TaskModel = require('../models/Task');

const getAllTasks = async(req,res)=>{
    try {
        const task = await TaskModel.find({});
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error})
    }
}

const getTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const task = await TaskModel.findOne({_id:id});
        if(!task)
        return res.status(404).json({msg:`No task with id : ${id}`})
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error})
    }
}

const createTask = async(req,res)=>{
    try {
        const task = await TaskModel.create(req.body)
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error})
    }
}

const updateTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const task = await TaskModel.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true});
        if(!task)
        return res.status(404).json({msg:`No task with id : ${id}`})
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error})
    }
}

const deleteTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const task = await TaskModel.findOneAndDelete({_id:id});
        if(!task)
        return res.status(404).json({msg:`No task with id : ${id}`})
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {getAllTasks,getTask,createTask,updateTask,deleteTask}