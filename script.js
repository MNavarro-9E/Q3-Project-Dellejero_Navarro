const fareMatrix = {
    "North Avenue": { "Quezon Avenue": 13, "GMA-Kamuning": 16, "Araneta Center-Cubao": 20, "Santolan-Annapolis": 24, "Ortigas": 28, "Shaw Boulevard": 32, "Boni": 36, "Guadalupe": 40, "Buendia": 44, "Ayala": 48, "Magallanes": 52, "Taft Avenue": 56 },
    "Quezon Avenue": { "GMA-Kamuning": 13, "Araneta Center-Cubao": 16, "Santolan-Annapolis": 20, "Ortigas": 24, "Shaw Boulevard": 28, "Boni": 32, "Guadalupe": 36, "Buendia": 40, "Ayala": 44, "Magallanes": 48, "Taft Avenue": 52 },
    "GMA-Kamuning": { "Araneta Center-Cubao": 13, "Santolan-Annapolis": 16, "Ortigas": 20, "Shaw Boulevard": 24, "Boni": 28, "Guadalupe": 32, "Buendia": 36, "Ayala": 40, "Magallanes": 44, "Taft Avenue": 48 },
    "Araneta Center-Cubao": { "Santolan-Annapolis": 13, "Ortigas": 16, "Shaw Boulevard": 20, "Boni": 24, "Guadalupe": 28, "Buendia": 32, "Ayala": 36, "Magallanes": 40, "Taft Avenue": 44 },
    "Santolan-Annapolis": { "Ortigas": 13, "Shaw Boulevard": 16, "Boni": 20, "Guadalupe": 24, "Buendia": 28, "Ayala": 32, "Magallanes": 36, "Taft Avenue": 40 },
    "Ortigas": { "Shaw Boulevard": 13, "Boni": 16, "Guadalupe": 20, "Buendia": 24, "Ayala": 28, "Magallanes": 32, "Taft Avenue": 36 },
    "Shaw Boulevard": { "Boni": 13, "Guadalupe": 16, "Buendia": 20, "Ayala": 24, "Magallanes": 28, "Taft Avenue": 32 },
    "Boni": { "Guadalupe": 13, "Buendia": 16, "Ayala": 20, "Magallanes": 24, "Taft Avenue": 28 },
    "Guadalupe": { "Buendia": 13, "Ayala": 16, "Magallanes": 20, "Taft Avenue": 24 },
    "Buendia": { "Ayala": 13, "Magallanes": 16, "Taft Avenue": 20 },
    "Ayala": { "Magallanes": 13, "Taft Avenue": 16 },
    "Magallanes": { "Taft Avenue": 13 }
};

function calculateFare(type) {
    let from = document.getElementById("fromStation").value;
    let to = document.getElementById("toStation").value;
    let fareDisplay = document.querySelector(".fare-amount");

    if (from === "" || to === "" || from === to) {
        fareDisplay.innerText = "Enter valid stations";
        return;
    }

    let fare = fareMatrix[from]?.[to] || fareMatrix[to]?.[from] || 50;

    if (type === "discounted") {
        fare *= 0.9; 
    }

    fareDisplay.innerText = fare.toFixed(2);
}
