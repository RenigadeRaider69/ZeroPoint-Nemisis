// Adaptive AI Bots System

// Configuration
const botProfiles = [
    { name: "Bot Alpha", difficulty: "easy", aggression: 2, accuracy: 50 },
    { name: "Bot Beta", difficulty: "medium", aggression: 5, accuracy: 70 },
    { name: "Bot Omega", difficulty: "hard", aggression: 8, accuracy: 90 },
];

// Create AI Bot
function createBot(difficulty) {
    const bot = botProfiles.find(bot => bot.difficulty === difficulty);
    if (bot) {
        console.log(`🤖 AI Bot Created: ${bot.name} | Difficulty: ${bot.difficulty}`);
        return { ...bot };
    } else {
        console.log("❌ Difficulty level not recognized. Creating easy bot by default.");
        return { name: "Default Bot", difficulty: "easy", aggression: 2, accuracy: 50 };
    }
}

// Update Bot Behavior Based on Player Skill
function adaptBotToPlayer(playerSkill) {
    if (playerSkill < 50) {
        return createBot("easy");
    } else if (playerSkill >= 50 && playerSkill < 80) {
        return createBot("medium");
    } else {
        return createBot("hard");
    }
}

// Simulate AI Bot Behavior
function simulateBotAction(bot) {
    console.log(`🤖 ${bot.name} is taking action...`);
    const action = Math.random() < bot.accuracy / 100 ? "Hit" : "Miss";
    console.log(`🎯 ${bot.name} ${action}! (Aggression: ${bot.aggression})`);
}

// Example Usage
const playerSkill = 75; // Simulate player skill level
const bot = adaptBotToPlayer(playerSkill);
simulateBotAction(bot);
