# 🚀 Blog API with Media Upload (Node.js + Express + MongoDB + Cloudinary)

A full-featured REST API for creating, managing, and retrieving blogs with media upload support using Cloudinary.

---

## 📌 Features

* 🔐 User Authentication (JWT)
* 📝 Create, Update, Delete Blogs
* 📷 Upload Images & Videos (Cloudinary)
* 📂 Media Management
* 👤 User-based Authorization
* ☁️ Cloud Storage Integration

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Cloudinary
* Multer
* JWT Authentication
* bcrypt.js

---

## 📁 Project Structure

```
.
├── config/
│   └── db.js
├── controllers/
│   ├── blogController.js
│   ├── mediaController.js
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── HttpError.js
│   └── uploadMiddleware.js
├── models/
│   ├── blogModel.js
│   ├── mediaModel.js
│   └── userModel.js
├── routes/
│   ├── blogRoutes.js
│   ├── mediaRoutes.js
│   └── userRoutes.js
├── utils/
│   └── cloudinary.js
├── .env
├── index.js
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚀 Installation & Setup

```bash
npm install
```

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

**POST** `/api/users/register`

```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
```

---

### Login User

**POST** `/api/users/login`

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

---

## 📝 Blog APIs

### Create Blog

**POST** `/api/blogs`

* Requires JWT Token
* Body: `form-data`

| Key        | Type |
| ---------- | ---- |
| title      | Text |
| body       | Text |
| tags       | Text |
| coverImage | File |

---

### Get All Blogs

**GET** `/api/blogs`

---

### Get Blog by ID

**GET** `/api/blogs/:id`

---

### Update Blog

**PUT** `/api/blogs/:id`

---

### Delete Blog

**DELETE** `/api/blogs/:id`

---

## 📷 Media Upload API

### Upload Media

**POST** `/api/media/upload`

* Requires JWT Token
* Body: `form-data`

| Key   | Type |
| ----- | ---- |
| files | File |

---

## 📸 Screenshots

### 1. User Add

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d8c3a1d4-6e63-4f93-9cf3-86ff8b498055" />


---

### 2. Blog Add

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c9faf1a5-6e87-4c30-9343-d8ff0e73f63a" />


---

### 3. Get All Blogs

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f37450fd-2790-4772-a2f3-f5965c31158c" />


---

## 🧠 Notes

* Do NOT manually set `Content-Type` when using `form-data` in Postman
* Always include `Authorization: Bearer <token>` for protected routes
* Media is stored in Cloudinary under `blog_uploads`

---

## 📬 Future Improvements

* Refresh Tokens
* Role-based Authorization
* Comments & Likes System
* Pagination & Search
* Frontend Integration (React)

---

## 👨‍💻 Author

Made with ❤️ by Brij
