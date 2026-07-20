# File Uploader

A simple file upload system built with **FastAPI**, **MySQL**, **HTML**, **CSS**, and **JavaScript**.

## Features

- Upload files
- Store file metadata in MySQL
- Save uploaded files locally
- View uploaded files
- Download files
- Delete files

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- FastAPI
- Python
- MySQL

## Project Structure

```
FileUploader/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── backend/
    ├── main.py
    ├── database.py
    ├── requirements.txt
    ├── uploads/
    └── routers/
        └── upload.py
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend

Open the `frontend` folder using Live Server or any local web server.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /upload | Upload a file |
| GET | /files | Get all uploaded files |
| GET | /download/{filename} | Download a file |
| DELETE | /delete/{id} | Delete a file |

## Future Improvements

- User Authentication (JWT)
- File Preview
- Search Files
- Pagination
- Cloud Storage (AWS S3)