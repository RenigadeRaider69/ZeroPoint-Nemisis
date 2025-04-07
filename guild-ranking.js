// Guild Ranking System

// Guilds Array (for example purposes)
const guilds = [
    { name: "Knights of Valor", level: 5, xp: 3200, members: 18 },
    { name: "Shadow Legion", level: 8, xp: 6700, members: 12 },
    { name: "Phoenix Order", level: 6, xp: 4500, members: 25 },
    { name: "Silver Wolves", level: 4, xp: 2900, members: 15 }
];

// Sort Guilds by Rank
function sortGuildsByRank() {
    const rankedGuilds = [...guilds].sort((a, b) => {
        if (b.level === a.level) {
            return b.xp - a.xp; // If levels are equal, compare XP
        }
        return b.level - a.level; // Otherwise, compare levels
    });
    return rankedGuilds;
}

// Display Guild Rankings
function displayGuildRankings() {
    console.log("🏆 Guild Rankings:");
    const rankedGuilds = sortGuildsByRank();
    rankedGuilds.forEach((guild, index) => {
        console.log(`#${index + 1}: ${guild.name} | Level: ${guild.level} | XP: ${guild.xp} | Members: ${guild.members}`);
    });
}

// Update Guild Information
function updateGuildInfo(guildName, xpGained, newMembersCount) {
    const guild = guilds.find(g => g.name === guildName);
    if (guild) {
        guild.xp += xpGained;
        guild.members += newMembersCount;
        checkGuildLevelUp(guild);
        console.log(`✅ Guild updated: ${guild.name} | XP: ${guild.xp} | Members: ${guild.members}`);
    } else {
        console.log("❌ Guild not found.");
    }
}

// Check for Guild Level Up
function checkGuildLevelUp(guild) {
    const xpThresholds = [1000, 3000, 5000, 8000, 12000]; // Example XP thresholds for levels
    while (guild.level < xpThresholds.length && guild.xp >= xpThresholds[guild.level]) {
        guild.level += 1;
        console.log(`🎉 ${guild.name} leveled up to Level ${guild.level}!`);
    }
}

// Example Usage
displayGuildRankings();
updateGuildInfo("Knights of Valor", 800, 2); // Add XP and members
displayGuildRankings();
