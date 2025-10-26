// Step 1: Define outfit arrays
const tops = ["👕","👚","👔","🧥","👗"];
const bottoms = ["👖","🩳","🧵","🩰","🩲"];
const accessories = ["🕶️","🎩","⌚","🎒","💍"];

// Step 2: Select DOM elements
const outfitDiv = document.getElementById("outfit");
const generateBtn = document.getElementById("generateBtn");

// Step 3: Function to generate random outfit
function getRandomOutfit() {
    outfitDiv.classList.add("fade");
    setTimeout(() => {
        const top = tops[Math.floor(Math.random() * tops.length)];
        const bottom = bottoms[Math.floor(Math.random() * bottoms.length)];
        const accessory = accessories[Math.floor(Math.random() * accessories.length)];
        outfitDiv.innerHTML = `${top} ${bottom} ${accessory}`;
        outfitDiv.classList.remove("fade");
    }, 300);
}

// Step 4: Add click event to button
generateBtn.addEventListener("click", getRandomOutfit);

