# Weborik Test

A full-stack test project using **React (Vite)** for frontend and **Node.js + Express + MySQL** for backend.

---

## 🔧 Requirements

- Node.js & npm
- MySQL
- Git

---

## 📦 Setup Guide

### 🚀 1. Clone the Repo

```bash
git clone https://github.com/mirzaibtisam41/weborik-test.git
cd weborik-test
```

---

### 📁 2. Backend Setup

Go to the `backend/` folder:

```bash
cd backend
```

Create a `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=my_database
PORT=5000
```

Install packages:

```bash
npm install
```

Start the backend server:

```bash
npm run dev
```

✅ This will:

- Create database if it doesn't exist
- Create `users` table
- Insert default admin user

---

### 💻 3. Frontend Setup

Go to the `frontend/` folder:

```bash
cd ../frontend
```

Create a `.env` file:

```
VITE_SERVER_URL=http://localhost:5000/api
```

Install packages:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

---

## 🔐 Default Admin Credentials

```
Email:    admin@example.com
Password: admin123
```

---

## 📬 API Base URL

```
http://localhost:5000/api
```

---

## ✅ Tech Stack

- React + Vite
- Node.js + Express
- MySQL
- Axios, bcrypt, yup, react-hook-form, react-toastify

---

## 🙌 Author

**Mirza Ibtisam**  
GitHub: [@mirzaibtisam41](https://github.com/mirzaibtisam41)
