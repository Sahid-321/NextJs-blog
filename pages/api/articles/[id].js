// In a file named `articles.js`

const articles = [
    {
      id: 1,
      title: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Dolor Sit Amet",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      title: "Consectetur Adipiscing Elit",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
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
  