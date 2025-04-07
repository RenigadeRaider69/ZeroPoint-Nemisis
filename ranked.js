// Ranked System

// Player Rankings Array
const playerRankings = [];

// Add Player to Rankings
function addPlayerToRankings(player) {
    playerRankings.push(player);
    console.log(`🔹 Player added: ${player.name} | Rank: ${player.rank} | Skill Rating: ${player.skillRating}`);
}

// Update Player Rank
function updatePlayerRank(playerName, matchOutcome) {
    const player = playerRankings.find(p => p.name === playerName);
    if (player) {
        if (matchOutcome === "win") {
            player.skillRating += 25; // Increase skill rating on win
        } else if (matchOutcome === "lose") {
            player.skillRating -= 15; // Decrease skill rating on loss
        }

        // Update rank based on skill rating thresholds
        player.rank = determineRank(player.skillRating);

        console.log(`✅ ${player.name}'s rank updated: ${player.rank} | Skill Rating: ${player.skillRating}`);
    } else {
        console.log("❌ Player not found.");
    }
}

// Determine Player Rank Based on Skill Rating
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
addPlayerToRankings({ name: "Player1", rank: "Bronze 3", skillRating: 150 });
addPlayerToRankings({ name: "Player2", rank: "Silver 1", skillRating: 500 });
addPlayerToRankings({ name: "Player3", rank: "Gold 2", skillRating: 750 });
addPlayerToRankings({ name: "Player4", rank: "Platinum 3", skillRating: 900 });
addPlayerToRankings({ name: "Player5", rank: "Diamond 1", skillRating: 1400 });
updatePlayerRank("Player1", "win");
updatePlayerRank("Player5", "lose");
displayLeaderboard();
