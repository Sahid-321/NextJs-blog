// pages/api/hello.js
import nc from "next-connect";
const mongoose = require("mongoose")
import ChatModel from "../models/chatModel";

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
        const {id} = req.query;
        try {
            const data = await ChatModel.find({articleId:id})

            if (!data.length) {
                return res.status(404).json({ message: `No chats found}` });
            }

            res.status(200).json(data);
           // res.send("hello chat")
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    })
    .post(async (req, res) => {
       // const {id} = req.query;
        const {  user, title, articleId } = req.body
        try {
            const data = new ChatModel({ user: user, title:title, articleId:articleId });
            await data.save();
            res.status(201).send({ msg: 'data posted' });
        } catch (error) {
            console.log(error);
            res.status(400).send("something error")
        }
    })



export default handler;