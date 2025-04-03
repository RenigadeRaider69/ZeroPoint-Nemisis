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
        <p>Abilities: ${character.abilities.join(", ")}</p>
        <p>Ultimate: ${character.ultimate}</p>
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

// Full Character Roster
const characters = [
    // DPS (24 Characters)
    { name: "Dracual Master", role: "DPS", abilities: ["Shadow Strike", "Life Drain"], ultimate: "Blood Requiem" },
    { name: "Storm Chaser", role: "DPS", abilities: ["Thunder Dash", "Lightning Bolt"], ultimate: "Storm Surge" },
    // (Add 22 more DPS characters here, each with unique abilities and ultimates)
    
    // Tanks (9 Characters)
    { name: "Iron Sentinel", role: "Tank", abilities: ["Shield Bash", "Fortress"], ultimate: "Iron Wall" },
    { name: "Stone Guardian", role: "Tank", abilities: ["Rock Barrage", "Earthen Grasp"], ultimate: "Earthquake" },
    // (Add 7 more Tank characters here)

    // Healers (8 Characters)
    { name: "Celestial Healer", role: "Healer", abilities: ["Radiant Light", "Blessing Aura"], ultimate: "Divine Restoration" },
    { name: "Forest Mystic", role: "Healer", abilities: ["Nature's Touch", "Healing Vine"], ultimate: "Verdant Renewal" },
    // (Add 6 more Healer characters here)
];

// Select Character Logic
function selectCharacter(characterName) {
    const character = characters.find(c => c.name === characterName);
    if (character) {
        console.log(`✅ Character Selected: ${character.name}`);
        console.log(`Role: ${character.role}`);
        console.log(`Abilities: ${character.abilities.join(", ")}`);
        console.log(`Ultimate: ${character.ultimate}`);
    } else {
        console.log("❌ Character not found.");
    }
}
