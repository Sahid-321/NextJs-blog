// pages/api/hello.js
import nc from "next-connect";
const mongoose = require("mongoose")
import UserModel from "../../models/userModel";
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

    .get(async (req, res) => {
        const data = await UserModel.find({})
        res.send(data);
    })
    .post(async (req, res) => {
        const {  email, password } = req.body
        const user = await UserModel.findOne({ email: email })
        const name = user.name;
        if (user) {
            const hash = user.password
            bcrypt.compare(password, hash, function (err, result) {
                if (err) {
                    console.log(err)
                    res.send(500)
                    res.send({ msg: "Something went wrong" })
                }
                if (result) {

                    //res.status(200)
                    res.status(200).send({ msg: "Login Successfull", email, name })

                } else {
                    res.status(401).send({ msg: "Authentication failed" })
                }
            });

        } else {
            res.status(401).send({ msg: "Authentication failed" })
        }
    })


export default handler;