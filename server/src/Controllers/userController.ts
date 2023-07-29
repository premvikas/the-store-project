import express from 'express';
import userModel from '../Models/User';
import { Validator } from 'node-input-validator';

export const getUsers = async (req :express.Request,res: express.Response) => {
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }  catch(err){
        console.log("getSellersList",{err})
        return res.status(500).json({error: err})
    }
}

export const createUser = async (req : any, res: express.Response) => {
    try{

        const v = new Validator(req.body, {
            emailId: 'required|email',
            firstName: 'required',
            lastName: 'required'
          });

        const matched = await v.check();

        if (!matched) {
            return res.status(422).send(v.errors);
          }

        const resp = await userModel.create(req.body);
        res.status(200).json(resp);
    } catch(err){
        console.log("err", err)
        res.json(err);
    }
}
