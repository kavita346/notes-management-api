# Notes Management API

This is a simple Notes Management API built using Node.js, Express.js, and MongoDB.

## 📌 Features
- Create, Read, Update, and Delete (CRUD) notes
- Filter notes by title
- MongoDB Atlas for database management

## 🚀 Project struture
![image](https://github.com/user-attachments/assets/195c44f9-4c80-4cf7-9bcf-f8e84e8d9952)


## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```
git clone https://github.com/kavita346/notes-management-api.git
```
```
cd notes-management-api
```
### 2️⃣ Install Dependencies
```
npm install
```
### 3️⃣ Setup Environment Variables
Create a .env file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string

PORT=5000
```

### 4️⃣ Start the Server
```
npm run 
```
The server will run at: http://localhost:5000

## 🔥 API Endpoints

| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| POST   | `/api/notes`        | Create a new note                 |
| GET    | `/api/notes`        | Get all notes                     |
| GET    | `/api/notes/:id`    | Get a specific note               |
| GET    | `/api/notes?title=` | Get notes filtered by title       |
| PUT    | `/api/notes/:id`    | Update a note                     |
| DELETE | `/api/notes/:id`    | Delete a note                     |

📌 Example API Requests

1️⃣ Create a Note (POST)

Request:
   
   ```
   POST /api/notes
   ```
```
{
  "title": "Learn Node.js",
  "content": "Practice building APIs using Express.js and MongoDB"
}
```

###  Response:
A successful note creation returns a message along with the created note's details.

- **Message:** "Note created successfully"
- **Note ID:** `605c72a8e2e8b620c8e0d9d3`
- **Title:** Learn Node.js
- **Content:** Practice building APIs using Express.js and MongoDB
- **Created At:** 2025-03-25T12:00:00.000Z
- **Updated At:** 2025-03-25T12:00:00.000Z


2️⃣ Get All Notes (GET)

Request:

```
  GET /api/notes
```
###  Response:

- **ID:** `605c72a8e2e8b620c8e0d9d3`
- **Title:** Learn Node.js
- **Content:** Practice building APIs using Express.js and MongoDB
- **Created At:** 2025-03-25T12:00:00.000Z
- **Updated At:** 2025-03-25T12:00:00.000Z

- **ID:** `65ecd00883bfd0a0f590c1`
- **Title:** Express Node.js
- **Content:**  Learn routing, middleware, and request handling
- **Created At:** 2025-03-26T12:02:24.012Z
- **Updated At:** 2025-03-26T12:02:24.012Z 

🎯 Done! Now your API is ready to use. 🚀




