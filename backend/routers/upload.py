from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from fastapi.responses import FileResponse
from database import conn, cursor
import os
import shutil

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload")
async def upload_file(
    name: str = Form(...),
    email: str = Form(...),
    file: UploadFile = File(...)
):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    file_size = os.path.getsize(file_path)

    query = """
    INSERT INTO files
    (
        uploader_name,
        uploader_email,
        original_filename,
        stored_filename,
        file_size,
        file_type
    )
    VALUES (%s,%s,%s,%s,%s,%s)
    """

    values = (
        name,
        email,
        file.filename,
        file.filename,
        file_size,
        file.content_type
    )

    cursor.execute(query, values)
    conn.commit()

    return {"message": "File Uploaded Successfully"}

@router.get("/files")
def get_files():
    cursor.execute("""
        SELECT *
        FROM files
        ORDER BY upload_time DESC
    """)
    files = cursor.fetchall()
    return {"files": files}

@router.get("/download/{filename}")
def download_file(filename: str):
    file_path = os.path.join(UPLOAD_FOLDER, filename)
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(
        path=file_path,
        filename=filename,
        media_type="application/octet-stream"
    )

@router.delete("/delete/{id}")
def delete_file(id: int):
    cursor.execute(
        "SELECT stored_filename FROM files WHERE id = %s",
        (id,)
    )
    file = cursor.fetchone()
    if file is None:
        raise HTTPException(status_code=404, detail="File not found")

    filename = file["stored_filename"]
    file_path = os.path.join(UPLOAD_FOLDER, filename)

    if os.path.exists(file_path):
        os.remove(file_path)

    cursor.execute(
        "DELETE FROM files WHERE id = %s",
        (id,)
    )
    conn.commit()

    return {"message": "File deleted successfully"}
