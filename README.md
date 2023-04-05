This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Installation

To run the application, first clone this repository to your local machine:

bash
Copy code
git clone https://github.com/Sahid-321/NextJs-blog.git
Then, navigate to the project directory and install the dependencies:

bash
Copy code
cd NextJs-blog
npm install
Usage
To start the application in development mode, run the following command:

bash
Copy code
npm run dev
This will start the NextJS development server at http://localhost:3000. You can then view the application in your web browser.

## Features

Authentication: The application uses NextAuth.js library for authentication, Users can sign in using email and password and also able to  create a new account using their name, email address and password.
Post Article: Users can post new articles to the blog. Users can add a title, content for each article.
Edit Article: Users can edit their own articles after they've been posted. Users can edit the title, content, of each article.
Delete Article: Users can delete their own articles. Deleted articles are removed from the blog permanently.
Comment: Users can leave comments on articles. Comments are displayed below each article, along with the name of the user who left the comment.
Manage Articles: Super-admin users can manage articles of all users. They can edit and delete articles of any user.
Search Functionality: Users can search for blog posts based on their title and content. Results are displayed in real-time as the user types their query.
Please note that the Manage Articles feature is only available to super-admin users. To become a super-admin user, you must manually set your role field to super-admin in the database.