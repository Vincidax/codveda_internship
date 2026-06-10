# Simple CRUD API (Node.js + Express)

A lightweight REST API built with **Node.js and Express** that demonstrates basic CRUD operations (Create, Read, Update, Delete) on a `products` resource using in-memory storage.

---

## 🚀 Features

- Create a product
- Get all products
- Get a single product by ID
- Update a product
- Delete a product
- Proper HTTP status codes
- Basic error handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Nodemon (development)

---

## 📁 Project Structure

simple-crud-api/
│── server.js
│── package.json
│── README.md

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Vincidax/codveda_internship.git
cd codveda_internship/level1/Task2_Simple_REST_API
```

### Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Server runs on:
http://localhost:3000

---

## 📌 API Endpoints

Base URL:
http://localhost:3000/api/products

### GET all products

GET /api/products

### GET product by ID

GET /api/products/:id

### CREATE product

POST /api/products
Content-Type: application/json

{
"name": "Laptop",
"price": 1000
}

### UPDATE product

PUT /api/products/:id
Content-Type: application/json

{
"name": "Updated Laptop",
"price": 1200
}

### DELETE product

DELETE /api/products/:id

---

## 🧪 Example Response

{
"id": 1,
"name": "Laptop",
"price": 1000
}

---

## ❌ Error Handling

- 400 → Bad Request
- 404 → Not Found
- 500 → Server Error

---

## 👨‍💻 Author

Vincent DUSHIME
GitHub: https://github.com/Vincidax

---

## 📌 License

MIT
