# 📁 File Uploader

A simple and efficient **File Upload Management System** built using **FastAPI, MySQL, HTML, CSS, and JavaScript**.

The application allows users to upload files, store file metadata in a database, manage uploaded files, and download or delete files through a simple web interface.

---

## 🚀 Features

✅ Upload files through web interface  
✅ Store file metadata in MySQL database  
✅ Save uploaded files locally on the server  
✅ View uploaded files  
✅ Download files  
✅ Delete uploaded files  
✅ REST API based backend using FastAPI  

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- FastAPI
- MySQL
- Uvicorn

### Tools
- Git & GitHub
- VS Code

---

## 📂 Project Structure

```
FileUploader/
│
├── frontend/
│   ├── index.html          # User interface
│   ├── style.css           # Styling
│   └── script.js           # Frontend logic
│
├── backend/
│   │
│   ├── main.py             # FastAPI application entry point
│   ├── database.py         # MySQL database connection
│   ├── requirements.txt    # Python dependencies
│   │
│   ├── routers/
│   │   └── upload.py       # File upload APIs
│   │
│   └── uploads/            # Stored uploaded files
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/RohaanAhmadQuadri/FileUploader.git
```

Move into the project folder:

```bash
cd FileUploader
```

---

# 🔹 Backend Setup

Navigate to backend:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI server:

```bash
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

API documentation:

```
http://127.0.0.1:8000/docs
```

---

# 🔹 Frontend Setup

Open the `frontend` folder.

Run using:

- VS Code Live Server extension

or

- Any local web server

The frontend communicates with the FastAPI backend.

---

# 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload` | Upload a file |
| GET | `/files` | Get all uploaded files |
| GET | `/download/{filename}` | Download a file |
| DELETE | `/delete/{id}` | Delete a file |

---

# 🗄️ Database

The project uses **MySQL** to store file metadata.

Example stored information:

- File ID
- File name
- File path
- Upload date
- File details

---

# 📸 Screenshots

_Add screenshots of your application here_

Example:

```
screenshots/
├── upload-page.png
└── file-list.png
```

---

# 🔮 Future Improvements

- 🔐 User Authentication using JWT
- 👁️ File Preview
- 🔎 Search Files
- 📄 Pagination
- ☁️ Cloud Storage Integration (AWS S3)
- 📊 File Dashboard
- 👥 Multi-user file management

---

# 👨‍💻 Author

**Rohaan Ahmad Quadri**

- GitHub: https://github.com/RohaanAhmadQuadri

---

⭐ If you find this project useful, consider giving it a star!
