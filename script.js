// Game Initialization
document.addEventListener("DOMContentLoaded", () => {
    console.log("🔥 Zero Point: Nemesis initialized!");
    initializeGame();
});

// Initialize Game
function initializeGame() {
    setupEventListeners();
    console.log("🎮 Game setup complete.");
}

// Event Listeners
function setupEventListeners() {
    const startButton = document.getElementById("start-game");
    const shopButton = document.getElementById("shop-button");
    const createGuildButton = document.getElementById("create-guild");

    if (startButton) startButton.addEventListener("click", startGame);
    if (shopButton) shopButton.addEventListener("click", openShop);
    if (createGuildButton) createGuildButton.addEventListener("click", createGuild);
}

// Start Game
function startGame() {
    console.log("🎮 Game Started!");
    loadCharacterSelection();
}

// Load Character Selection
function loadCharacterSelection() {
    const characterSection = document.getElementById("character-display");
    if (characterSection) {
        characterSection.innerHTML = ""; // Clear existing content
        characters.forEach((character) => {
            const charCard = createCharacterCard(character);
            characterSection.appendChild(charCard);
        });
    }
}

// Create Character Card
function createCharacterCard(character) {
    const card = document.createElement("div");
    card.classList.add("character-card");
    card.innerHTML = `
        <h3>${character.name}</h3>
        <p>Role: ${character.role}</p>
        <button onclick="selectCharacter('${character.name}')">Select</button>
    `;
    return card;
}

// Open Shop
function openShop() {
    console.log("🛒 Opening the shop...");
    // Add logic to display the shop interface
}

// Create Guild
function createGuild() {
    console.log("🏰 Guild creation process started...");
    // Add logic to handle guild creation
}

// Example Character Data
const characters = [
    { name: "Dracual Master", role: "DPS" },
    { name: "Iron Sentinel", role: "Tank" },
    { name: "Celestial Healer", role: "Healer" },
];

// Select Character Logic
function selectCharacter(characterName) {
    console.log(`✅ Character Selected: ${characterName}`);
    // Add further logic to proceed with the selected character
}
