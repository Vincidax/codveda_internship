# Level 2 Task 3: Database Integration (MongoDB + Mongoose)

## 📌 Project Overview

This project is a REST API built with **Node.js, Express, and MongoDB (Mongoose)**.  
It demonstrates CRUD operations, schema validation, indexing, and relationships between collections.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) users
- MongoDB Atlas integration
- Mongoose schema validation
- Indexing for performance optimization
- One-to-many relationship (User → Posts)
- Error handling
- Environment variable support

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

---

## 📁 Project Structure

```
project/
│── config/
│    └── db.js
│── models/
│    ├── User.js
│    └── Post.js
│── controllers/
│    └── userController.js
│── routes/
│    └── userRoutes.js
│── server.js
│── .env
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Vincidax/codveda_internship
cd level2/Task3_Database_Integration
```

### 2. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

---

## ▶️ Run the Project

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

---

## 🌐 API Endpoints

### Users

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| POST   | /api/users     | Create user     |
| GET    | /api/users     | Get all users   |
| GET    | /api/users/:id | Get single user |
| PUT    | /api/users/:id | Update user     |
| DELETE | /api/users/:id | Delete user     |

---

## 🧪 Testing the API

Use **Postman** or **Thunder Client**

### Example Request:

```json
POST /api/users
{
  "name": "Vincent",
  "email": "vincent@example.com",
  "age": 25
}
```

---

## 🧠 Key Concepts Implemented

- Mongoose Schema & Models
- Data validation (required, minlength, etc.)
- Indexing (`unique: true`)
- Relationships (`ref: "Post"`)
- Populate method
- REST API design

---

## 👨‍💻 Author

Vincent DUSHIME

---

## 📜 License

MIT
