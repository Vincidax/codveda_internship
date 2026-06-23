const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Post = require("../models/Post");

module.exports = {
  Query: {
    users: async () => await User.find(),

    posts: async () => await Post.find().populate("author"),

    post: async (_, { id }) => await Post.findById(id).populate("author"),
  },

  Mutation: {
    register: async (_, args) => {
      const hashed = await bcrypt.hash(args.password, 10);

      const user = await User.create({
        username: args.username,
        email: args.email,
        password: hashed,
      });

      return user;
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) throw new Error("User not found");

      const match = await bcrypt.compare(password, user.password);

      if (!match) throw new Error("Invalid credentials");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      return {
        token,
        user,
      };
    },

    createPost: async (_, { title, content }, context) => {
      if (!context.user) throw new Error("Unauthorized");

      const post = await Post.create({
        title,
        content,
        author: context.user.id,
      });

      return await post.populate("author");
    },

    updatePost: async (_, { id, title, content }, context) => {
      if (!context.user) throw new Error("Unauthorized");

      return await Post.findByIdAndUpdate(
        id,
        { title, content },
        { new: true },
      ).populate("author");
    },

    deletePost: async (_, { id }, context) => {
      if (!context.user) throw new Error("Unauthorized");

      await Post.findByIdAndDelete(id);

      return "Post deleted";
    },
  },
};
