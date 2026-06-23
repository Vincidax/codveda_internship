# GraphQL Blog API

A full-featured GraphQL API built with Node.js, Express, Apollo Server, MongoDB, Mongoose, and JWT Authentication. This project demonstrates modern GraphQL development practices including queries, mutations, authentication, authorization, and database integration.

## Features

- User Registration
- User Login with JWT Authentication
- Protected Routes and Mutations
- Create Posts
- View All Posts
- View Single Post
- Update Posts
- Delete Posts
- MongoDB Database Integration
- Apollo GraphQL Server
- GraphQL Queries and Mutations
- Environment Variable Configuration

## Tech Stack

### Backend

- Node.js
- Express.js
- Apollo Server
- GraphQL
- MongoDB
- Mongoose

### Authentication

- JSON Web Tokens (JWT)
- bcryptjs

### Development Tools

- Nodemon
- dotenv

---

## Project Structure

```text
graphql-blog-api/
│
├── config/
│   └── db.js
│
├── graphql/
│   ├── resolvers.js
│   └── typeDefs.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── User.js
│   └── Post.js
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/graphql-blog-api.git
cd graphql-blog-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

#### MongoDB Atlas Example

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/graphql_blog
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Expected output:

```bash
MongoDB Connected
Server running at http://localhost:5000/graphql
```

---

## GraphQL Endpoint

```text
http://localhost:5000/graphql
```

Open the endpoint in your browser to access Apollo Sandbox.

---

## GraphQL Schema

### User

```graphql
type User {
  id: ID!
  username: String!
  email: String!
}
```

### Post

```graphql
type Post {
  id: ID!
  title: String!
  content: String!
  author: User
}
```

### Authentication

```graphql
type AuthPayload {
  token: String!
  user: User!
}
```

---

## Available Queries

### Get All Users

```graphql
query {
  users {
    id
    username
    email
  }
}
```

### Get All Posts

```graphql
query {
  posts {
    id
    title
    content
    author {
      username
      email
    }
  }
}
```

### Get Single Post

```graphql
query {
  post(id: "POST_ID") {
    id
    title
    content
  }
}
```

---

## Available Mutations

### Register User

```graphql
mutation {
  register(
    username: "vincent"
    email: "vincent@gmail.com"
    password: "123456"
  ) {
    id
    username
    email
  }
}
```

### Login User

```graphql
mutation {
  login(email: "vincent@gmail.com", password: "123456") {
    token
    user {
      username
      email
    }
  }
}
```

### Create Post

```graphql
mutation {
  createPost(
    title: "GraphQL Introduction"
    content: "Learning GraphQL with Apollo Server"
  ) {
    id
    title
    content
  }
}
```

### Update Post

```graphql
mutation {
  updatePost(
    id: "POST_ID"
    title: "Updated Title"
    content: "Updated Content"
  ) {
    id
    title
    content
  }
}
```

### Delete Post

```graphql
mutation {
  deletePost(id: "POST_ID")
}
```

---

## Authentication

Protected mutations require a valid JWT token.

### Apollo Sandbox Headers

```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

Add the token to the Headers section before executing protected operations.

---

## Database Collections

### Users Collection

```json
{
  "_id": "...",
  "username": "vincent",
  "email": "vincent@gmail.com"
}
```

### Posts Collection

```json
{
  "_id": "...",
  "title": "GraphQL Introduction",
  "content": "Learning GraphQL",
  "author": "USER_ID"
}
```

---

## API Testing

The API can be tested using:

- Apollo Sandbox
- Postman
- Insomnia
- GraphQL Playground

---

## Learning Objectives Achieved

- GraphQL Server Setup
- Apollo Server Integration
- GraphQL Schema Design
- Queries and Mutations
- Resolver Functions
- JWT Authentication
- Authorization Middleware
- MongoDB Integration
- Mongoose Models
- Environment Variable Management
- API Testing

---

## Author

**Vincent Dushime**

Software Engineer

- GitHub: https://github.com/Vincidax
- Email: vincentdx18@gmail.com

---

## License

This project is licensed under the MIT License.
