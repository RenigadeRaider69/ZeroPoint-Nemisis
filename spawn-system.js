// spawn-system.js

// Spawnable Entities
const entities = [
    { type: "player", name: "Player1", spawnPoint: { x: 0, y: 0, z: 0 }, health: 100 },
    { type: "player", name: "Player2", spawnPoint: { x: 10, y: 0, z: 5 }, health: 100 },
    { type: "npc", name: "Enemy1", spawnPoint: { x: -15, y: 0, z: -10 }, health: 50 },
    { type: "object", name: "HealthPack", spawnPoint: { x: 5, y: 0, z: -5 } }
];

// Render Spawn Points
function renderSpawnPoints(scene) {
    entities.forEach(entity => {
        const spawnMarker = document.createElement("div");
        spawnMarker.classList.add("spawn-marker");
        spawnMarker.style.transform = `translate(${entity.spawnPoint.x}px, ${entity.spawnPoint.y}px, ${entity.spawnPoint.z}px)`;
        spawnMarker.textContent = entity.name;
        scene.appendChild(spawnMarker);
    });
    console.log("Spawn points rendered.");
}

// Spawn an Entity
function spawnEntity(entityType, entityName, spawnLocation) {
    const entity = {
        type: entityType,
        name: entityName,
        spawnPoint: spawnLocation,
        health: 100 // Default health for players and NPCs
    };
    entities.push(entity);
    console.log(`✅ Spawned: ${entityType} - ${entityName} at location (${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z})`);
}

// Remove Entity
function removeEntity(entityName) {
    const index = entities.findIndex(entity => entity.name === entityName);
    if (index !== -1) {
        const removedEntity = entities.splice(index, 1);
        console.log(`❌ Removed: ${removedEntity[0].name}`);
    } else {
        console.log("❌ Entity not found.");
    }
}

// Update Spawn Location
function updateSpawnLocation(entityName, newLocation) {
    const entity = entities.find(e => e.name === entityName);
    if (entity) {
        entity.spawnPoint = newLocation;
        console.log(`📍 Updated spawn location for ${entityName} to (${newLocation.x}, ${newLocation.y}, ${newLocation.z})`);
    } else {
        console.log("❌ Entity not found.");
    }
}

// Example Usage
spawnEntity("player", "Player3", { x: 20, y: 0, z: 10 });
updateSpawnLocation("Enemy1", { x: -20, y: 0, z: -15 });
removeEntity("HealthPack");

// Debug: Render all spawn points
console.log(entities);
