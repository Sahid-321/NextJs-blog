// pages/api/hello.js
import nc from "next-connect";
const mongoose = require("mongoose")
import  UserModel  from "../models/userModel";
const bcrypt = require('bcryptjs');

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
 
  .get( async(req, res) => {
    const data = await UserModel.find({})
    res.send(data);
  })
  .post( async(req, res) => {
    try {
        const { email, password, role } = req.body;
        const present = await UserModel.findOne({ email: email });
        if (present) {
          res.status(403).send({ msg: 'User already exists' });
        } else {
          bcrypt.hash(password, 6, async function (err, hash) {
            if (err) {
              console.log(err);
              res.sendStatus(500).send({ msg: 'Something went wrong' });
            } else {
              const data = new UserModel({ email: email, password: hash, role: role });
              await data.save();
              res.status(201).send({ msg: 'Account created successfully' });
            }
          });
        }
      } catch (err) {
        console.log(err);
        res.sendStatus(500).send({ msg: 'Something went wrong' });
      }
  })
  

export default handler;