# 📰 QuickBlog

QuickBlog is a full-stack blog application where users can write and comment on blogs, and an admin can manage, publish, and approve content. It features AI-generated blog descriptions using Google Gemini, supports image upload via ImageKit, and is built with the MERN stack (MongoDB, Express, React, Node.js).

---

## ✨ Features

### 👥 Users
- Write and post blogs
- Automatically generate blog descriptions with **Gemini AI**
- Post comments on blogs
- View all published blogs

### 🔐 Admin
- Secure login with JWT
- Approve comments
- Publish/unpublish blogs
- Delete any blog or comment

---

## 🧰 Tech Stack

### 🚀 Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- Toast notifications

### 🛠 Backend
- Node.js (Express)
- MongoDB (Mongoose)
- JWT for admin auth
- Google Gemini API (blog description)
- ImageKit (for blog image uploads)
- dotenv, cors

---
## 🔧 Project Structure
client/ – React frontend

server/ – Express + MongoDB backend

.env.example files for safe config setup
