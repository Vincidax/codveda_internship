const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User]
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User

    login(email: String!, password: String!): AuthPayload

    createPost(title: String!, content: String!): Post

    updatePost(id: ID!, title: String, content: String): Post

    deletePost(id: ID!): String
  }
`;
