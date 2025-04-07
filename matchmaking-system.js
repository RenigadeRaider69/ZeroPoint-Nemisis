// Matchmaking System for 6v6 Teams
const players = []; // Array to store player data

// Add Player to Queue
function addPlayer(player) {
    players.push(player);
    console.log(`🔹 Player added: ${player.name} | Skill: ${player.skillRating}`);
    matchPlayers();
}

// Match Players
function matchPlayers() {
    if (players.length >= 12) { // Require 12 players for 6v6
        console.log("🎮 Attempting to match players...");
        const matchedPlayers = players.splice(0, 12); // Take the first 12 players
        createTeams(matchedPlayers);
    } else {
        console.log(`Waiting for more players... (${players.length}/12)`);
    }
}

// Create Balanced Teams
function createTeams(players) {
    // Sort players by skill rating
    players.sort((a, b) => b.skillRating - a.skillRating);

    const team1 = [];
    const team2 = [];

    // Distribute players alternately for balance
    players.forEach((player, index) => {
        if (index % 2 === 0) {
            team1.push(player);
        } else {
            team2.push(player);
        }
    });

    console.log("✅ Teams created!");
    console.log("🔵 Team 1:", team1);
    console.log("🔴 Team 2:", team2);
}

// Example Players
addPlayer({ name: "Player1", skillRating: 80 });
addPlayer({ name: "Player2", skillRating: 95 });
addPlayer({ name: "Player3", skillRating: 70 });
addPlayer({ name: "Player4", skillRating: 85 });
addPlayer({ name: "Player5", skillRating: 60 });
addPlayer({ name: "Player6", skillRating: 90 });
addPlayer({ name: "Player7", skillRating: 75 });
addPlayer({ name: "Player8", skillRating: 65 });
addPlayer({ name: "Player9", skillRating: 88 });
addPlayer({ name: "Player10", skillRating: 72 });
addPlayer({ name: "Player11", skillRating: 80 });
addPlayer({ name: "Player12", skillRating: 68 });
