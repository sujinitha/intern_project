function loadPage(page) {
    const content = document.getElementById("content");

    const pages = {
        "profile": "<h1>My Profile</h1><p>View and edit your profile details here.</p>",
        "home": "<h1>Dashboard</h1><p>Overview of activities.</p>",
        "xray": "<h1>X-ray Captioning</h1><p>Upload and process X-rays.</p>",
        "reports": "<h1>View Reports</h1><p>Check medical reports.</p>",
        "create-patient": "<h1>Create Patient</h1><p>Register a new patient.</p>",
        "create-admin": "<h1>Create Admin</h1><p>Add a new administrator.</p>"
    };

    content.innerHTML = pages[page] || "<h1>Page Not Found</h1>";
}

function logout() {
    alert("Logging out...");
    window.location.href = "login.html";
}
