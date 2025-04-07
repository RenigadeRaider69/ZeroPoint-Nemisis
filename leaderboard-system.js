// leaderboard-system.js

// Players Array (Initial Player Data)
const players = [
    { name: "Player1", rank: "Gold 3", skillRating: 1250, matchesPlayed: 100, wins: 55 },
    { name: "Player2", rank: "Diamond 1", skillRating: 1450, matchesPlayed: 150, wins: 95 },
    { name: "Player3", rank: "Silver 1", skillRating: 750, matchesPlayed: 70, wins: 30 },
    { name: "Player4", rank: "Platinum 2", skillRating: 1300, matchesPlayed: 120, wins: 80 },
    { name: "Player5", rank: "Bronze 2", skillRating: 400, matchesPlayed: 20, wins: 5 },
];

// Sort Leaderboard by Skill Rating in Descending Order
function sortLeaderboard() {
    return players.sort((a, b) => b.skillRating - a.skillRating);
}

// Display Leaderboard in the Console
function displayLeaderboard() {
    console.log("🏆 Leaderboard:");
    const sortedPlayers = sortLeaderboard();
    sortedPlayers.forEach((player, index) => {
        console.log(`#${index + 1}: ${player.name} | Rank: ${player.rank} | Skill Rating: ${player.skillRating} | Wins: ${player.wins} | Matches Played: ${player.matchesPlayed}`);
    });
}

// Update Player Stats After a Match
function updatePlayerStats(playerName, matchOutcome) {
    const player = players.find(p => p.name === playerName);
    if (player) {
        player.matchesPlayed += 1;
        if (matchOutcome === "win") {
            player.wins += 1;
            player.skillRating += 25; // Skill rating increases on a win
        } else if (matchOutcome === "lose") {
            player.skillRating -= 15; // Skill rating decreases on a loss
        }

        // Ensure skill rating does not go below zero
        if (player.skillRating < 0) {
            player.skillRating = 0;
        }

        console.log(`✅ Stats updated for ${player.name}: Skill Rating: ${player.skillRating}, Matches Played: ${player.matchesPlayed}, Wins: ${player.wins}`);
    } else {
        console.log("❌ Player not found.");
    }
}

// Add a New Player to the Leaderboard
function addNewPlayer(playerName) {
    if (!players.some(p => p.name === playerName)) {
        players.push({
            name: playerName,
            rank: "Bronze 3",
            skillRating: 100,
            matchesPlayed: 0,
            wins: 0,
        });
        console.log(`🔹 New Player added: ${playerName}`);
    } else {
        console.log(`❌ Player ${playerName} already exists.`);
    }
}

// Determine Rank Based on Skill Rating
function determineRank(skillRating
