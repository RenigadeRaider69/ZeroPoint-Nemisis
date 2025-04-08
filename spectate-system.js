// spectate-system.js

// Players and Game Data
const players = [
    { id: 1, name: "Player1", isAlive: true, position: { x: 0, y: 0, z: 0 } },
    { id: 2, name: "Player2", isAlive: true, position: { x: 10, y: 0, z: 5 } },
    { id: 3, name: "Player3", isAlive: true, position: { x: -15, y: 0, z: -10 } },
    { id: 4, name: "Player4", isAlive: true, position: { x: 5, y: 0, z: 15 } }
];

let spectating = false; // Tracks if the player is spectating
let respawnTimer = 10; // Countdown timer for respawning

// Function to Handle Player Death
function handlePlayerDeath(deadPlayerId, killerId) {
    const deadPlayer = players.find(player => player.id === deadPlayerId);
    const killerPlayer = players.find(player => player.id === killerId);

    if (deadPlayer) {
        deadPlayer.isAlive = false; // Mark the dead player as no longer alive
        console.log(`💀 ${deadPlayer.name} has died!`);
        
        // Begin spectate mode to watch the kill
        startSpectateKillView(killerPlayer, deadPlayer);
    }
}

// Start Kill View Spectating
function startSpectateKillView(killerPlayer, deadPlayer) {
    spectating = true;

    if (killerPlayer) {
        console.log(`🎥 Spectating how ${deadPlayer.name} was killed by ${killerPlayer.name}.`);
        updateSpectatorCamera(killerPlayer.position); // Move camera to killer's position

        // Start respawn timer
        startRespawnTimer(deadPlayer.id);
    } else {
        console.log("❌ Killer not found. Cannot spectate the kill.");
    }
}

// Update Spectator Camera (Simulated)
function updateSpectatorCamera(position) {
    console.log(`📍 Camera moved to killer's position: X=${position.x}, Y=${position.y}, Z=${position.z}`);
    // Add camera movement logic here (e.g., game engine camera updates)
}

// Start Respawn Timer
function startRespawnTimer(playerId) {
    console.log(`⏳ Respawn countdown for Player${playerId} starts now.`);
    const timerInterval = setInterval(() => {
        respawnTimer--;
        console.log(`Respawning in ${respawnTimer} seconds...`);

        if (respawnTimer <= 0) {
            clearInterval(timerInterval);
            respawnPlayer(playerId);
        }
    }, 1000);
}

// Respawn the Player
function respawnPlayer(playerId) {
    const player = players.find(p => p.id === playerId);

    if (player) {
        player.isAlive = true;
        respawnTimer = 10; // Reset the timer
        spectating = false; // Stop spectating mode
        console.log(`🚶 Player${playerId} has respawned and re-entered the game.`);
        updateSpectatorCamera(player.position); // Reset camera to player's position
    } else {
        console.log("❌ Player not found for respawn.");
    }
}

// Example Usage
handlePlayerDeath(1, 2); // Player1 dies, killed by Player2
