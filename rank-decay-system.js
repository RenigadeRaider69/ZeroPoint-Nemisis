// Rank Decay System

// Configuration
const decayThreshold = 7; // Days of inactivity before decay starts
const decayAmount = 25; // Skill rating points lost per decay cycle
const minimumRankSkill = 100; // Minimum skill rating to prevent dropping out of Bronze 3

// Player Rankings Array
const playerRankings = [];

// Add Player to Rankings
function addPlayerToRankings(player) {
    player.lastPlayed = new Date(); // Set the last played date to now
    playerRankings.push(player);
    console.log(`🔹 Player added: ${player.name} | Rank: ${player.rank} | Skill Rating: ${player.skillRating}`);
}

// Check for Rank Decay
function applyRankDecay() {
    const today = new Date();
    playerRankings.forEach(player => {
        const daysInactive = Math.floor((today - new Date(player.lastPlayed)) / (1000 * 60 * 60 * 24));
        if (daysInactive > decayThreshold) {
            const decayCycles = Math.floor(daysInactive / decayThreshold);
            const totalDecay = decayCycles * decayAmount;
            player.skillRating = Math.max(player.skillRating - totalDecay, minimumRankSkill);
            player.rank = determineRank(player.skillRating); // Update rank after decay
            console.log(`⚠️ ${player.name}'s rank decayed: ${player.rank} | Skill Rating: ${player.skillRating} (Inactive for ${daysInactive} days)`);
        }
    });
}

// Update Player Activity
function updatePlayerActivity(playerName) {
    const player = playerRankings.find(p => p.name === playerName);
    if (player) {
        player.lastPlayed = new Date();
        console.log(`✅ ${player.name}'s activity updated. No rank decay will apply.`);
    } else {
        console.log("❌ Player not found.");
    }
}

// Determine Player Rank Based on Skill Rating (Reused from ranked.js)
function determineRank(skillRating) {
    if (skillRating >= 2000) return "Celestial 1";
    if (skillRating >= 1900) return "Celestial 2";
    if (skillRating >= 1800) return "Celestial 3";
    if (skillRating >= 1700) return "Grandmaster 1";
    if (skillRating >= 1600) return "Grandmaster 2";
    if (skillRating >= 1500) return "Grandmaster 3";
    if (skillRating >= 1400) return "Diamond 1";
    if (skillRating >= 1300) return "Diamond 2";
    if (skillRating >= 1200) return "Diamond 3";
    if (skillRating >= 1100) return "Platinum 1";
    if (skillRating >= 1000) return "Platinum 2";
    if (skillRating >= 900) return "Platinum 3";
    if (skillRating >= 800) return "Gold 1";
    if (skillRating >= 700) return "Gold 2";
    if (skillRating >= 600) return "Gold 3";
    if (skillRating >= 500) return "Silver 1";
    if (skillRating >= 400) return "Silver 2";
    if (skillRating >= 300) return "Silver 3";
    if (skillRating >= 200) return "Bronze 1";
    if (skillRating >= 100) return "Bronze 2";
    return "Bronze 3"; // Default rank for skill ratings below 100
}

// Display Leaderboard
function displayLeaderboard() {
    console.log("🏆 Leaderboard:");
    const sortedRankings = [...playerRankings].sort((a, b) => b.skillRating - a.skillRating);
    sortedRankings.forEach((player, index) => {
        console.log(`#${index + 1}: ${player.name} | Rank: ${player.rank} | Skill Rating: ${player.skillRating}`);
    });
}

// Example Usage
addPlayerToRankings({ name: "Player1", rank: "Silver 1", skillRating: 500 });
addPlayerToRankings({ name: "Player2", rank: "Gold 2", skillRating: 750 });
addPlayerToRankings({ name: "Player3", rank: "Platinum 3", skillRating: 900 });
applyRankDecay(); // Simulate rank decay check
updatePlayerActivity("Player1"); // Simulate activity update
applyRankDecay(); // Recheck decay after updating activity
displayLeaderboard();
