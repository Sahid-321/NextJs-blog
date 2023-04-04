// In a file named `articles.js`

  import ArticleModel from "../models/articleModel";
  export default function handler(req, res) {
    const {
      query: { id },
    } = req;
  
   
  ArticleModel.findById(id)
  .then(article => {
    if (!article) {
      res.status(404).json({ message: `Article with ID ${id} not found` });
      return;
    }

    res.status(200).json(article);
  })
  .catch(error => {
    res.status(500).json({ message: 'Internal server error' });
    console.error(error);
  });
  }
  