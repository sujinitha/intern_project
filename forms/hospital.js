document.getElementById("hospitalForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    let hospitals = JSON.parse(localStorage.getItem("hospitals")) || [];

    let newHospital = {
        name: document.getElementById("hospitalName").value.trim(),
        id: document.getElementById("hospitalID").value.trim(),
        type: document.getElementById("hospitalType").value,
        accreditation: document.getElementById("accreditation").value,
        bedCapacity: document.getElementById("bedCapacity").value,
        establishedDate: document.getElementById("establishedDate").value
    };

    // Validation: Ensure no empty values
    if (newHospital.name === "" || newHospital.id === "" || newHospital.establishedDate === "") {
        alert("Please fill in all required fields.");
        return;
    }

    hospitals.push(newHospital);
    localStorage.setItem("hospitals", JSON.stringify(hospitals));

    alert("Hospital Registered Successfully!");
    window.location.href = "/dashboard/superadmin_dashboard.html";
});

// Back Button Functionality
document.getElementById("back").addEventListener("click", function() {
    window.history.back();
});
