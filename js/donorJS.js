document.addEventListener("DOMContentLoaded", () => {
    const donorData = [
        { name: "John Doe", age: 30, bloodType: "A+", city: "Beirut", governorate: "Beirut" },
        { name: "Jane Smith", age: 25, bloodType: "O-", city: "Tripoli", governorate: "North Lebanon" },
        { name: "Sam Wilson", age: 40, bloodType: "B+", city: "Sidon", governorate: "South Lebanon" },
        { name: "Lisa Brown", age: 35, bloodType: "AB-", city: "Byblos", governorate: "Keserwen-Jbeil" },
        { name: "Tom White", age: 50, bloodType: "O-", city: "Beirut", governorate: "Beirut" },
        { name: "Emily Davis", age: 28, bloodType: "A+", city: "Zahle", governorate: "Beqaa" },
    ];

    const donorCardsContainer = document.getElementById("donorCards");
    const hiddenSection = document.querySelector(".hiddenSection");
    const formTitle = hiddenSection.querySelector("h2");
    const closeModalButton = hiddenSection.querySelector(".close-modal");

    // Function to generate donor cards dynamically
    function generateDonorCards(data) {
        donorCardsContainer.innerHTML = ""; // Clear previous cards
        data.forEach((donor) => {
            const card = document.createElement("div");
            card.className = "card";
            card.dataset.name = donor.name;

            card.innerHTML = `
                <img src="./assets/profile.jpg" alt="Profile photo of ${donor.name}">
                <h3>${donor.name}</h3>
                <p>Age: ${donor.age}</p>
                <p>Blood Type: ${donor.bloodType}</p>
                <p>City: ${donor.city}</p>
                <p>Governorate: ${donor.governorate}</p>
                <button class="donorButton" data-name="${donor.name}">Contact Donor</button>
            `;
            donorCardsContainer.appendChild(card);
        });

        // Add event listeners to each button
        const donorButtons = document.querySelectorAll(".donorButton");
        donorButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const donorName = button.dataset.name;
                formTitle.textContent = `Contact ${donorName}`;
                hiddenSection.classList.add("visible");
            });
        });
    }

    // Close modal
    closeModalButton.addEventListener("click", () => {
        hiddenSection.classList.remove("visible");
    });

    // Filter function
    function filterCards() {
        const nameValue = nameFilter.value.toLowerCase();
        const ageValue = ageFilter.value;
        const bloodTypeValue = bloodTypeFilter.value;
        const cityValue = cityFilter.value.toLowerCase();

        const filteredData = donorData.filter((donor) => {
            const matchesName = donor.name.toLowerCase().includes(nameValue) || nameValue === "";
            const matchesAge = donor.age.toString() === ageValue || ageValue === "";
            const matchesBloodType = donor.bloodType === bloodTypeValue || bloodTypeValue === "";
            const matchesCity = donor.city.toLowerCase().includes(cityValue) || cityValue === "";

            return matchesName && matchesAge && matchesBloodType && matchesCity;
        });

        generateDonorCards(filteredData);
    }

    // Event listeners for filters
    nameFilter.addEventListener("input", filterCards);
    ageFilter.addEventListener("input", filterCards);
    bloodTypeFilter.addEventListener("change", filterCards);
    cityFilter.addEventListener("input", filterCards);

    // Initial generation of donor cards
    generateDonorCards(donorData);
});
