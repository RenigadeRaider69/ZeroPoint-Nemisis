// Guild System

// Guilds Array
const guilds = [];

// Create a Guild
function createGuild(guildName, guildLeader) {
    const newGuild = {
        name: guildName,
        leader: guildLeader,
        members: [guildLeader],
        activityLog: [],
        level: 1,
        xp: 0,
        xpToNextLevel: 1000, // XP required to level up
    };
    guilds.push(newGuild);
    console.log(`🏰 Guild Created: ${guildName} | Leader: ${guildLeader}`);
}

// Add Member to Guild
function addMemberToGuild(guildName, memberName) {
    const guild = guilds.find(g => g.name === guildName);
    if (guild) {
        if (!guild.members.includes(memberName)) {
            guild.members.push(memberName);
            guild.activityLog.push(`${memberName} joined the guild.`);
            console.log(`✅ ${memberName} added to guild: ${guildName}`);
        } else {
            console.log(`❌ ${memberName} is already a member of guild: ${guildName}`);
        }
    } else {
        console.log("❌ Guild not found.");
    }
}

// Remove Member from Guild
function removeMemberFromGuild(guildName, memberName) {
    const guild = guilds.find(g => g.name === guildName);
    if (guild) {
        const index = guild.members.indexOf(memberName);
        if (index > -1) {
            guild.members.splice(index, 1);
            guild.activityLog.push(`${memberName} left the guild.`);
            console.log(`✅ ${memberName} removed from guild: ${guildName}`);
        } else {
            console.log(`❌ ${memberName} is not a member of guild: ${guildName}`);
        }
    } else {
        console.log("❌ Guild not found.");
    }
}

// Add XP to Guild
function addXPToGuild(guildName, xpAmount) {
    const guild = guilds.find(g => g.name === guildName);
    if (guild) {
        guild.xp += xpAmount;
        guild.activityLog.push(`Guild gained ${xpAmount} XP.`);
        console.log(`🌟 ${guild.name} gained ${xpAmount} XP.`);
        checkGuildLevelUp(guild);
    } else {
        console.log("❌ Guild not found.");
    }
}

// Check for Guild Level Up
function checkGuildLevelUp(guild) {
    while (guild.xp >= guild.xpToNextLevel) {
        guild.xp -= guild.xpToNextLevel;
        guild.level += 1;
        guild.xpToNextLevel = Math.floor(guild.xpToNextLevel * 1.2); // Increase XP requirement for next level
        guild.activityLog.push(`Guild leveled up to Level ${guild.level}!`);
        console.log(`🎉 ${guild.name} leveled up to Level ${guild.level}!`);
    }
}

// Log Guild Activity
function logGuildActivity(guildName) {
    const guild = guilds.find(g => g.name === guildName);
    if (guild) {
        console.log(`📜 Activity Log for Guild: ${guild.name}`);
        guild.activityLog.forEach((log, index) => {
            console.log(`#${index + 1}: ${log}`);
        });
    } else {
        console.log("❌ Guild not found.");
    }
}

// Display Guild Information
function displayGuildInfo(guildName) {
    const guild = guilds.find(g => g.name === guildName);
    if (guild) {
        console.log(`🏰 Guild: ${guild.name}`);
        console.log(`👑 Leader: ${guild.leader}`);
        console.log(`👥 Members: ${guild.members.join(", ")}`);
        console.log(`🎖️ Level: ${guild.level}`);
        console.log(`✨ XP: ${guild.xp} / ${guild.xpToNextLevel}`);
    } else {
        console.log("❌ Guild not found.");
    }
}

// Example Usage
createGuild("Knights of Valor", "Leader1");
addMemberToGuild("Knights of Valor", "Member1");
addMemberToGuild("Knights of Valor", "Member2");
addXPToGuild("Knights of Valor", 500);
addXPToGuild("Knights of Valor", 600); // This will trigger a level up
logGuildActivity("Knights of Valor");
displayGuildInfo("Knights of Valor");
