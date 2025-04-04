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
    if (startButton) startButton.addEventListener("click", startGame);
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
        <p>Lore: ${character.lore}</p>
        <p>Primary Fire: ${character.primaryFire.type} (Damage: ${character.primaryFire.damage})</p>
        <p>Secondary Fire: ${character.secondaryFire.type} (Damage: ${character.secondaryFire.damage})</p>
        <p>Ultimate: ${character.ultimate.name} - ${character.ultimate.effect}</p>
        <button onclick="selectCharacter('${character.name}')">Select</button>
    `;
    return card;
}

// Character Selection Logic
function selectCharacter(characterName) {
    const character = characters.find(c => c.name === characterName);
    if (character) {
        console.log(`✅ Character Selected: ${character.name}`);
        console.log(`Role: ${character.role}`);
        console.log(`Lore: ${character.lore}`);
        console.log(`Primary Fire: ${character.primaryFire.type}`);
        console.log(`Secondary Fire: ${character.secondaryFire.type}`);
        console.log(`Ultimate: ${character.ultimate.name}`);
    } else {
        console.log("❌ Character not found.");
    }
}
