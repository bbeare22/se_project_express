# 👕 What To Wear (WTWR) — Backend API

A RESTful backend for the **What To Wear** app — a full-stack project from TripleTen's Software Engineering Program.  
Built with **Express**, **MongoDB**, and **JWT authentication**.

---

## 🚀 Overview

This backend powers the **WTWR weather app**, allowing users to:
- Register and log in with secure JWT-based authentication  
- Manage clothing items (create, like/unlike, delete)  
- Retrieve and update user profiles  
- Connect with the front-end client for full-stack functionality

---

## 🧰 Tech Stack

- **Node.js / Express**
- **MongoDB / Mongoose**
- **JWT Authentication**
- **Celebrate / Joi** (input validation)
- **Winston** (logging)
- **dotenv** for environment config

---

## ⚙️ Installation & Setup

### 1️⃣ Clone and Install Dependencies

```bash
git clone https://github.com/bbeare22/se_project_express
cd se_project_express-main
npm install
```

### 2️⃣ Environment Variables

Create a `.env` file in the project root with the following keys:

```bash
PORT=3001
MONGO_URL=mongodb://127.0.0.1:27017/wtwr_db
JWT_SECRET=your-production-secret
JWT_SECRET_DEV=your-dev-secret
NODE_ENV=development
```

### 3️⃣ Start the Server

**Development mode (with nodemon):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run at [http://localhost:3001](http://localhost:3001).

---

## 📦 Project Structure

```
se_project_express-main/
├── app.js                 # Main entry
├── controllers/           # Request handlers
│   ├── clothingItems.js
│   └── users.js
├── errors/                # Custom error classes
├── middlewares/           # Auth, validation, logging, etc.
├── models/                # Mongoose schemas (User, ClothingItem)
├── routes/                # Express routers
│   ├── clothingItems.js
│   └── index.js
├── utils/                 # Config and helper utilities
└── .env.example           # Environment variable reference
```

---

## 🔑 API Endpoints

### 👤 Users
| Method | Endpoint | Description |
|---------|-----------|-------------|
| `GET` | `/users/me` | Get current user profile |
| `PATCH` | `/users/me` | Update user info |

### 👕 Clothing Items
| Method | Endpoint | Description |
|---------|-----------|-------------|
| `POST` | `/items` | Create new clothing item (auth required) |
| `DELETE` | `/items/:itemId` | Delete clothing item (auth required) |
| `PUT` | `/items/:itemId/likes` | Like item (auth required) |
| `DELETE` | `/items/:itemId/likes` | Unlike item (auth required) |

---

## 🔒 Security & Validation

- **JWT-based authentication**
- **Input validation** with Celebrate/Joi
- **Password hashing** with bcryptjs
- **CORS** middleware configured
- **Error handling** via centralized middleware
- **Custom error classes** for clear API responses

---

## 🧾 Example .env

```bash
PORT=3001
MONGO_URL=mongodb://127.0.0.1:27017/wtwr_db
JWT_SECRET=supersecretkey
NODE_ENV=production
```

---

## 🧠 Developer Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start with nodemon for development |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |

---

## 🧩 Dependencies

**Production:**
bcryptjs, celebrate, cors, dotenv, express, express-winston, jsonwebtoken, mongoose, validator, winston

**Dev:**
eslint, eslint-config-airbnb-base, eslint-config-prettier, eslint-plugin-import, nodemon, prettier

---

## 🧪 API Testing

Use **Postman** or **cURL** to test endpoints:  
Example:
```bash
curl -X GET http://localhost:3001/users/me -H "Authorization: Bearer <token>"
```

---

✨ *WTWR Backend — designed to keep your wardrobe weather-ready.*
