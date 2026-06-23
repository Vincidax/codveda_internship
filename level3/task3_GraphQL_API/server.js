require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const connectDB = require("./config/db");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const auth = require("./middleware/auth");

const app = express();

async function startServer() {
  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      user: auth(req),
    }),
  });

  await server.start();

  server.applyMiddleware({
    app,
  });

  app.listen(5000, () => {
    console.log(`Server running at http://localhost:5000${server.graphqlPath}`);
  });
}

startServer();
