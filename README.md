
# Nextjs-blog

The NextJs-blog project is a blogging web application developed using Next.js, a popular React framework. The application allows users to sign up, create new accounts, and post articles to the blog. Users can also edit and delete their own articles, leave comments on other articles, and search for posts based on their titles and content.

Deployed link: https://next-js-blog-sahidjamal.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/Sahid-321/NextJs-blog.git
```

Go to the project directory

```bash
  cd NextJs-blog
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

This will start the NextJS development server at http://localhost:3000. You can then view the application in your web browser.
## Features

- Authentication: The application uses NextAuth.js library for authentication, Users can sign in using email and password and also able to create a new account using their name, email address and password.

- Post Article: Users can post new articles to the blog. Users can add a title, content for each article.

- Edit Article: Users can edit their own articles after they've been posted. Users can edit the title, content, of each article.

- Delete Article: Users can delete their own articles. Deleted articles are removed from the blog permanently.

- Comment: Users can leave comments on articles. Comments are displayed below each article, along with the name of the user who left the comment.

- Manage Articles: Super-admin users can manage articles of all users. They can edit and delete articles of any user.

- Search Functionality: Users can search for blog posts based on their title and content. Results are displayed in real-time as the user types their query.

Please note that the Manage Articles feature is only available to super-admin users. To become a super-admin user, you must manually set your role field to super-admin in the database.

