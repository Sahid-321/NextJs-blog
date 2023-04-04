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
    const { page = 1 } = req.query;
    const {limit = 3} = req.query;

    const skip = (page - 1) * limit;

    try {
        const total = await ArticleModel.countDocuments();
        const data = await ArticleModel.find({})
            .skip(skip)
            .limit(limit)
            .exec();

        if (!data.length) {
            return res.status(404).json({ message: `No articles found for page ${page}` });
        }

        res.status(200).json({
            page,
            limit,
            total,
            data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
})
    .post(async (req, res) => {
        const { name, email, title, details, role } = req.body
        console.log(role,"api role");
        try {
            const data = new ArticleModel({ name: name, email: email, title: title, details: details, role:role });
            await data.save();
            res.status(201).send({ msg: 'data posted' });
        } catch (error) {
            console.log(error);
            res.status(400).send("something error")
        }
    })

    .put(async (req, res) => {
        const { id } = req.query; 
        const { title, details } = req.body;
        try {
          const updatedArticle = await ArticleModel.findOneAndUpdate(
            { _id: id },
            { title, details },
            { new: true }
          );
          res.status(200).send(updatedArticle);
        } catch (error) {
          console.log(error);
          res.status(400).send("something error");
        }
      })
      .delete(async (req, res) => {
        const { id } = req.query; 
        try {
          await ArticleModel.findByIdAndDelete(id);
          res.status(200).send({ msg: "Article deleted successfully" });
        } catch (error) {
          console.log(error);
          res.status(400).send("something error");
        }
      });

export default handler;