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
  
  export default function handler(req, res) {
    const {
      query: { id },
    } = req;
  
    const article = articles.find((a) => a.id == id);
  
    if (!article) {
      res.status(404).json({ message: `Article with ID ${id} not found` });
      return;
    }
  
    res.status(200).json(article);
  }
  