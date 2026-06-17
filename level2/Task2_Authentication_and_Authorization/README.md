# Task 2: Authentication and Authorization (JWT)

## 📌 Project Overview

This is a Node.js + Express backend project that implements user authentication and authorization using:

- JWT (JSON Web Tokens)
- bcrypt password hashing
- Role-based access control (User/Admin)
- Secure protected routes

---

## 🚀 Features

- User Signup
- User Login
- Password hashing with bcryptjs
- JWT authentication
- HTTP-only cookie token storage
- Role-based authorization (admin/user)
- Protected routes middleware

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcryptjs
- cookie-parser
- cors
- dotenv

---

## 📁 Project Structure

project-root/
├── controllers/
│ └── authController.js
├── middleware/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── server.js
├── .env
├── .gitignore
└── package.json

---

## ⚙️ Installation

### 1. Clone repository

```bash
git clone https://github.com/Vincidax/codveda_internship
cd level2/task2_authentication_and_authorization
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

You have to create the Mongodb credentials before running server.
Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

---

## 🔐 Authentication Flow

### Signup

- User registers
- Password is hashed using bcrypt
- Stored in MongoDB

### Login

- User provides email & password
- Password is verified
- JWT token is generated
- Token stored in HTTP-only cookie

---

## 🛡️ Protected Routes

| Route    | Access              |
| -------- | ------------------- |
| /profile | Authenticated users |
| /admin   | Admin only          |

---

## 📡 API Endpoints

### Auth Routes

- POST `/api/auth/signup`
- POST `/api/auth/login`
- GET `/api/auth/profile`
- GET `/api/auth/admin`

---

## 🧪 Testing

Use Postman or Thunder Client:

1. Signup user
2. Login user
3. Access protected routes

---

## 👨‍💻 Author

Vincent DUSHIME
