// pages/api/hello.js
import nc from "next-connect";
const mongoose = require("mongoose")
import ArticleModel from "../models/articleModel";

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
        const data = await ArticleModel.find({})
        res.status(200).send(data);
    })
    .post(async (req, res) => {
        const { name, email, title, details } = req.body
        try {
            const data = new ArticleModel({ name: name, email: email, title: title, details: details });
            await data.save();
            res.status(201).send({ msg: 'data posted' });
        } catch (error) {
            console.log(error);
            res.status(400).send("something error")
        }
    })


export default handler;