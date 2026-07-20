import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mankind@333",
    database="file_uploader_db"
)

cursor = conn.cursor(dictionary=True)