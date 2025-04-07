// leaderboard-ui.js

// Example Player Data (This can be fetched from a database or API)
const players = [
    { name: "Player1", rank: "Gold 3", skillRating: 1250, matchesPlayed: 100, wins: 55 },
    { name: "Player2", rank: "Diamond 1", skillRating: 1450, matchesPlayed: 150, wins: 95 },
    { name: "Player3", rank: "Silver 1", skillRating: 750, matchesPlayed: 70, wins: 30 },
    { name: "Player4", rank: "Platinum 2", skillRating: 1300, matchesPlayed: 120, wins: 80 },
    { name: "Player5", rank: "Bronze 2", skillRating: 400, matchesPlayed: 20, wins: 5 },
];

// Render Leaderboard
function renderLeaderboard() {
    // Select leaderboard container
    const leaderboardContainer = document.getElementById("leaderboard");

    // Clear previous content
    leaderboardContainer.innerHTML = "";

    // Sort players by skill rating (Descending)
    const sortedPlayers = players.sort((a, b) => b.skillRating - a.skillRating);

    // Create and display leaderboard rows
    sortedPlayers.forEach((player, index) => {
        const row = document.createElement("div");
        row.classList.add("leaderboard-row");

        row.innerHTML = `
            <div class="rank">#${index + 1}</div>
            <div class="name">${player.name}</div>
            <div class="rank-title">${player.rank}</div>
            <div class="skill-rating">Skill Rating: ${player.skillRating}</div>
            <div class="matches-played">Matches: ${player.matchesPlayed}</div>
            <div class="wins">Wins: ${player.wins}</div>
        `;

        leaderboardContainer.appendChild(row);
    });
}

// Call renderLeaderboard on page load
document.addEventListener("DOMContentLoaded", () => {
    renderLeaderboard();
});
