# MERN CRUD App

A full-stack MERN (MongoDB, Express.js, React, Node.js) CRUD application that allows you to create, read, update, and delete user data. The frontend is built using React with Vite and Material-UI, and the backend uses Express with MongoDB.

---

## 📁 Project Structure

```
mern-crud-app-client/   # React Frontend (Vite) 
├── public/           
├── src
|    ├── assets
|    ├── components
|    ├── functions
|    ├── App.css
|    ├── App.jsx
|    ├── index.css
|    └── main.jsx
├── .env
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```
---
```
mern-crud-app-client/    # Express Backend (API)
├── public/           
├── src
|    ├── assets
|    ├── components
|    ├── functions
|    ├── App.css
|    ├── App.jsx
|    ├── index.css
|    └── main.jsx
├── .env
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Features

- ✅ Add new users
- ✅ View users in a table
- ✅ Edit user details
- ✅ Delete users with confirmation
- ✅ Upload profile pictures (via multer)
- ✅ Form validation (frontend & backend)
- ✅ Responsive UI with Material-UI (MUI)

---

## 📦 Technologies Used

### Frontend (client/)
- React `^19.x`
- React Router DOM `^7.x`
- Axios `^1.x`
- Material UI (MUI) `^7.x`
- Vite `^7.x`

### Backend (server/)
- Node.js
- Express.js `^5.x`
- MongoDB with Mongoose `^8.x`
- Express Validator `^7.x`
- Multer (for file uploads)
- dotenv (for environment variables)
- CORS
- Nodemon (for development)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

Frontend
```bash
git clone https://github.com/Dushan-456/MERN-CRUD-App-Client
cd MERN-CRUD-App-Client
```

Backend
```bash
git clone https://github.com/Dushan-456/MERN-CRUD-App-Server
cd MERN-CRUD-App-Server
```

---

### 2. Set Up the Backend 

Backend
```bash
cd MERN-CRUD-App-Server
npm install
```

#### Create a `.env` file

Backend
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### Start the backend

```bash
npm run dev   # Starts server with nodemon
```

---

### 3. Set Up the Frontend

Frontend
```bash
cd MERN-CRUD-App-Client
npm install
```

#### Create a `.env` file

Frontend
```env
VITE_BASE_URL=your_base_url
```

#### Start the frontend

```bash
npm run dev
```

Frontend runs at: [http://localhost:5173](http://localhost:5173)  
Backend runs at: [http://localhost:5000](http://localhost:5000)

---

## 📂 API Endpoints

| Method | Endpoint             | Description          |
|--------|----------------------|----------------------|
| POST   | /user/create-user    | Create a new user    |
| GET    | /user/all-user       | Get all users        |
| PUT    | /user/update-user/:id| Update user by ID    |
| DELETE | /user/delete-user/:id| Delete user by ID    |

> Base URL: `http://localhost:5000`

---

## 📌 Notes

- React uses **Vite** for fast builds and HMR.
- File upload is handled via `multer`
- User input is validated both on frontend and backend.
- `process.env` is used only on the backend. Vite does **not support** `process.env` in the frontend unless prefixed with `VITE_`.

---

## 🛠 Future Improvements

- Add JWT Authentication
- Implement pagination and search
- Add unit and integration tests

---

## 📸 Screenshot

> _(Add a screenshot of your app UI here)_

---

## 🧑‍💻 Author

**Navodya Dushan**  
[GitHub](https://github.com/Dushan-456)  
[Email](mailto:navodyadushan123@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.