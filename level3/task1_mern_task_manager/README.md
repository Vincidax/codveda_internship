# 🚀 MERN Task Manager App

A full-stack Task Management Web Application built using the MERN stack (MongoDB, Express, React, Node.js).

## 🌐 Live Demo

- Frontend: https://codveda-internship-one.vercel.app/
- Backend: https://backend-merm.onrender.com/

## 📌 Features

- JWT Authentication
- Role-based access (User/Admin)
- CRUD tasks (Create, Read, Update, Delete)
- Search & filter tasks
- Responsive Tailwind CSS UI

## 🧑‍💻 Tech Stack

Frontend: React, Vite, Tailwind CSS  
Backend: Node.js, Express.js  
Database: MongoDB Atlas  
Auth: JWT + bcrypt  
Deployment: Vercel + Render

## ⚙️ Setup (Local)

### Backend

npm install
npm run dev

### Frontend

npm install
npm run dev

## 🔐 Environment Variables

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000

## 🚀 API Endpoints

Auth:

- POST /api/auth/register
- POST /api/auth/login

Tasks:

- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

## 👨‍💻 Author

Vincent DUSHIME
GitHub: https://github.com/Vincidax/codveda_internship/tree/main/level3/task1_mern_task_manager
