const uploadForm = document.getElementById("uploadForm");
const userForm = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const fileInput = document.getElementById("file");

uploadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const file = fileInput.files[0];

    if (!name || !email || !file) {
        alert("Please fill all the fields.");
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("file", file);

    try {
        const response = await fetch("http://127.0.0.1:8000/upload", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        alert(data.message);

        uploadForm.reset();
        userForm.reset();

        loadFiles();
    } catch (error) {
        console.error(error);
        alert("Upload Failed");
    }
});

async function loadFiles() {
    try {
        const response = await fetch("http://127.0.0.1:8000/files");

        if (!response.ok) {
            throw new Error("Failed to fetch files");
        }

        const data = await response.json();
        const table = document.getElementById("fileTable");

        table.innerHTML = "";

        if (data.files.length === 0) {
            table.innerHTML = `
                <tr>
                    <td colspan="4">No files uploaded yet.</td>
                </tr>
            `;
            return;
        }

        data.files.forEach(file => {
            table.innerHTML += `
                <tr>
                    <td>${file.original_filename}</td>
                    <td>${file.uploader_name}</td>
                    <td>
                        <button onclick="downloadFile('${file.stored_filename}')">
                            Download
                        </button>
                    </td>
                    <td>
                        <button onclick="deleteFile(${file.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

function downloadFile(filename) {
    window.open(
        `http://127.0.0.1:8000/download/${filename}`,
        "_blank"
    );
}

async function deleteFile(id) {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) {
        return;
    }

    try {
        const response = await fetch(
            `http://127.0.0.1:8000/delete/${id}`,
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        alert(data.message);

        loadFiles();
    } catch (error) {
        console.error(error);
        alert("Failed to delete file.");
    }
}

loadFiles();
