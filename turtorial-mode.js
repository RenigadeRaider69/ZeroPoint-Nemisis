// tutorial-mode.js

// Tutorial Steps
const tutorialSteps = [
    { id: 1, message: "Welcome to Zero Point: Nemesis! Use the W, A, S, D keys to move around.", action: "movement" },
    { id: 2, message: "Great! Now use the mouse to look around and explore your surroundings.", action: "camera" },
    { id: 3, message: "Move towards the glowing marker to proceed.", action: "reachMarker" },
    { id: 4, message: "Pick up the weapon by moving over it.", action: "pickUpWeapon" },
    { id: 5, message: "Use left mouse click to fire your weapon at the target.", action: "shootTarget" },
    { id: 6, message: "Awesome! You're ready to start your journey. Good luck!", action: "complete" },
];

// Current Step Tracker
let currentStep = 0;

// Display Tutorial Message
function displayMessage(message) {
    const tutorialBox = document.getElementById("tutorial-box");
    tutorialBox.textContent = message;
}

// Proceed to Next Step
function nextStep() {
    currentStep++;
    if (currentStep < tutorialSteps.length) {
        const step = tutorialSteps[currentStep];
        displayMessage(step.message);

        // Trigger specific action (e.g., enable movement, spawn marker, etc.)
        triggerAction(step.action);
    } else {
        displayMessage("Tutorial Complete! You're ready to play.");
        endTutorial();
    }
}

// Trigger Tutorial Action
function triggerAction(action) {
    switch (action) {
        case "movement":
            console.log("Movement enabled. Use W, A, S, D to move.");
            // Enable movement controls here
            break;
        case "camera":
            console.log("Camera control enabled. Use the mouse to look around.");
            // Enable camera controls here
            break;
        case "reachMarker":
            console.log("Spawn a glowing marker for the player to reach.");
            // Code to spawn marker
            break;
        case "pickUpWeapon":
            console.log("Spawn a weapon for the player to pick up.");
            // Code to spawn weapon
            break;
        case "shootTarget":
            console.log("Spawn a target for the player to shoot.");
            // Code to spawn target
            break;
        case "complete":
            console.log("Tutorial complete. Prepare to transition to the game.");
            // Handle tutorial completion
            break;
        default:
            console.log("Unknown action.");
    }
}

// End Tutorial
function endTutorial() {
    const tutorialBox = document.getElementById("tutorial-box");
    tutorialBox.textContent = "Tutorial Finished. Enjoy the game!";
    // Disable tutorial logic, clean up tutorial-related elements
}

// Start Tutorial
function startTutorial() {
    currentStep = 0;
    const step = tutorialSteps[currentStep];
    displayMessage(step.message);

    // Trigger the first action
    triggerAction(step.action);
}

// Example Usage
document.addEventListener("DOMContentLoaded", () => {
    // Add a tutorial UI box
    const tutorialUI = document.createElement("div");
    tutorialUI.id = "tutorial-box";
    tutorialUI.style.position = "absolute";
    tutorialUI.style.bottom = "10%";
    tutorialUI.style.left = "50%";
    tutorialUI.style.transform = "translateX(-50%)";
    tutorialUI.style.padding = "10px 20px";
    tutorialUI.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tutorialUI.style.color = "#fff";
    tutorialUI.style.borderRadius = "5px";
    tutorialUI.style.fontSize = "1.2rem";
    tutorialUI.style.textAlign = "center";
    tutorialUI.style.zIndex = "1000";
    document.body.appendChild(tutorialUI);

    // Start the tutorial
    startTutorial();
});
