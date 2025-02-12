// dummy data
const applications = [
    { name: "John Doe", bloodType: "O+", hospital: "City Hospital", age: 30, governorate: "Beirut" },
    { name: "Jane Smith", bloodType: "A-", hospital: "County Hospital", age: 25, governorate: "Mount Lebanon" },
    { name: "Sam Wilson", bloodType: "B+", hospital: "Regional Clinic", age: 40, governorate: "North Lebanon" },
    { name: "Lisa Brown", bloodType: "AB-", hospital: "Community Health", age: 35, governorate: "Nabatiyeh" },
    { name: "Tom White", bloodType: "O-", hospital: "Metro Hospital", age: 50, governorate: "South Lebanon" },
    { name: "Emily Davis", bloodType: "A+", hospital: "Downtown Medical Center", age: 28, governorate: "Akkar" },
    { name: "Michael Johnson", bloodType: "B-", hospital: "Green Valley Hospital", age: 45, governorate: "Baalbeck-Hermel" },
    { name: "Sarah Miller", bloodType: "O+", hospital: "Central Clinic", age: 32, governorate: "Keserwen-Jbeil" },
    { name: "David Wilson", bloodType: "AB+", hospital: "Suburban Health Center", age: 29, governorate: "Beqaa" },
    { name: "Anna Taylor", bloodType: "O-", hospital: "Regional Medical Center", age: 37, governorate: "Mount Lebanon" },
    { name: "James Anderson", bloodType: "B+", hospital: "Coastal Hospital", age: 41, governorate: "North Lebanon" },
    { name: "Sophia Martinez", bloodType: "A-", hospital: "Hillside Clinic", age: 33, governorate: "Nabatiyeh" },
    { name: "Daniel White", bloodType: "O+", hospital: "Sunnyvale Hospital", age: 48, governorate: "Beirut" },
    { name: "Grace Harris", bloodType: "AB-", hospital: "Lakeside Clinic", age: 27, governorate: "Akkar" },
    { name: "Benjamin Moore", bloodType: "B-", hospital: "Northern Medical Center", age: 39, governorate: "Baalbeck-Hermel" },
    { name: "Olivia Clark", bloodType: "A+", hospital: "Eastside Health Center", age: 31, governorate: "Keserwen-Jbeil" },
    { name: "Ethan Lewis", bloodType: "O-", hospital: "Downtown Hospital", age: 44, governorate: "South Lebanon" },
    { name: "Charlotte Hall", bloodType: "B+", hospital: "Parkview Clinic", age: 26, governorate: "Mount Lebanon" },
    { name: "Liam Young", bloodType: "A-", hospital: "Western Regional Hospital", age: 36, governorate: "North Lebanon" },
    { name: "Amelia Scott", bloodType: "AB+", hospital: "Sunrise Medical Center", age: 42, governorate: "Beqaa" },
    { name: "Noah Adams", bloodType: "O+", hospital: "Valley View Hospital", age: 34, governorate: "Keserwen-Jbeil" },
    { name: "Chloe Carter", bloodType: "B-", hospital: "Central City Clinic", age: 30, governorate: "Nabatiyeh" },
    { name: "Mason Evans", bloodType: "A+", hospital: "Silver Lake Hospital", age: 50, governorate: "Akkar" },
    { name: "Ella Turner", bloodType: "AB-", hospital: "Highland Health Center", age: 38, governorate: "Baalbeck-Hermel" },
    { name: "William Perez", bloodType: "O-", hospital: "Broadway Medical Center", age: 46, governorate: "South Lebanon" }
];

// Function to render application cards
function renderApplications(appList) {
    const applicationList = document.getElementById("applicationList");

    
    applicationList.innerHTML = ""; // Clear existing content

    appList.forEach(app => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${app.name}</h3>
            <p><strong>Blood Type:</strong> ${app.bloodType}</p>
            <p><strong>Age:</strong> ${app.age}</p>
            <p><strong>Hospital:</strong> ${app.hospital}</p>
            <p><strong>Governorate:</strong> ${app.governorate}</p>

            <button class="elgButton" data-bloodType="${app.bloodType}">Check Eligibility</button>
        `;
        applicationList.appendChild(card);
    });
}


// Initial rendering of all applications
renderApplications(applications);

// Event listeners for filters
document.getElementById("bloodTypeFilter").addEventListener("change", filterApplications);
document.getElementById("governorateFilter").addEventListener("change", filterApplications);
document.getElementById("nameFilter").addEventListener("input", filterApplications);
document.getElementById("hospitalFilter").addEventListener("input", filterApplications);
document.getElementById("ageFilter").addEventListener("input", filterApplications);


// Filter function
function filterApplications() {
    const bloodType = document.getElementById("bloodTypeFilter").value.toLowerCase();
    const governorate = document.getElementById("governorateFilter").value.toLowerCase();
    const name = document.getElementById("nameFilter").value.toLowerCase();
    const hospital = document.getElementById("hospitalFilter").value.toLowerCase();
    const age = document.getElementById("ageFilter").value;

    const filteredApplications = applications.filter(app => {
        return (
            (bloodType === "" || app.bloodType.toLowerCase() === bloodType) &&
            (governorate === "" || app.governorate.toLowerCase() === governorate) &&
            (name === "" || app.name.toLowerCase().includes(name)) &&
            (hospital === "" || app.hospital.toLowerCase().includes(hospital)) &&
            (age === "" || app.age === parseInt(age))
        );
    });

    renderApplications(filteredApplications);
}

const bloodQuestion = document.getElementById("bloodtypeQuestion");

// Show modal when "Check Eligibility" is clicked
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("elgButton")) {
        bloodQuestion.innerText = `Is your blood type ${event.target.dataset.bloodtype} or O?`
        const modal = document.getElementById("eligibilityModal");
        modal.style.display = "block";
        document.getElementById("eligibilityForm").reset(); // Reset the form
        document.getElementById("eligibilityResult").classList.add("hidden"); // Hide result
    }
});

// Close modal
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("eligibilityModal").style.display = "none";
});

// Handle form submission
document.getElementById("eligibilityForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    // Positive criteria (should be "yes")
    const compatibleBlood = form.compatibleBlood.value === "yes";
    const healthyToday = form.healthyToday.value === "yes";

    // Negative criteria (should be "no")
    const recentDonation = form.recentDonation.value === "no";
    const chronicIllness = form.chronicIllness.value === "no";
    const bloodDisease = form.bloodDisease.value === "no";
    const chronicMedicine = form.chronicMedicine.value === "no";
    const allergy = form.allergy.value === "no";
    const antibiotics = form.antibiotics.value === "no";
    const recentPlasmaDonation = form.recentPlasmaDonation.value === "no";
    const vaccination = form.vaccination.value === "no";
    const wholeBloodDonation = form.wholeBloodDonation.value === "no";
    const pregnant = form.pregnant.value === "no";
    const surgery = form.surgery.value === "no";
    const tattoo = form.tattoo.value === "no";
    const hivTest = form.hivTest.value === "no";

    // Calculate eligibility score
    const positiveCriteria = compatibleBlood + healthyToday;
    const negativeCriteria = recentDonation + chronicIllness + bloodDisease + chronicMedicine + allergy + antibiotics + recentPlasmaDonation + vaccination + wholeBloodDonation + pregnant + surgery + tattoo + hivTest;

    const totalCriteria = positiveCriteria + negativeCriteria;
    const resultDiv = document.getElementById("eligibilityResult");
    resultDiv.classList.remove("hidden");

    // Check if the user meets the minimum required criteria
    if (totalCriteria === 15) {
        resultDiv.innerHTML = `
            <p style="color: green;">You are eligible to donate blood!</p>
            <p>Contact this hospital: +961 123 456</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <p style="color: red;">Unfortunately, you are not eligible to donate blood.</p>
        `;
    }
});
