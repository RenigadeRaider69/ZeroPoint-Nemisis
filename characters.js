// Full Character Roster (43 Total)
const characters = [
    {
        name: "Voire",
        role: "DPS",
        lore: "The Harbinger of Chaos, Voire roams the battlefields with unmatched precision and deadly dual pistols.",
        primaryFire: { type: "Rapid Barrage", damage: 15, sound: "voire_rapid_barrage.mp3" },
        secondaryFire: { type: "Piercing Shot", damage: 50, sound: "voire_piercing_shot.mp3" },
        ultimate: {
            name: "Bullet Requiem",
            effect: "Locks onto up to five enemies and delivers devastating simultaneous shots.",
            sound: "voire_bullet_requiem.mp3",
            voiceLine: "Your fate is sealed!"
        },
        abilitiesVoiceLines: [
            { ability: "Rapid Barrage", line: "I never miss!" },
            { ability: "Piercing Shot", line: "Right through the heart!" }
        ],
        killEffect: {
            animation: "red_glow_spinning_pistols",
            sound: "kill_voire_effect.mp3",
            description: "Pistols glow red and spin dynamically after every kill."
        }
    },
    {
        name: "Orion",
        role: "DPS",
        lore: "The Celestial Archer, Orion protects balance in the universe, firing arrows infused with starlight.",
        primaryFire: { type: "Starburst Arrows", damage: 40, sound: "orion_starburst.mp3" },
        secondaryFire: { type: "Astral Snare", damage: 0, effect: "Creates a gravity well trapping enemies for 2 seconds.", sound: "orion_astral_snare.mp3" },
        ultimate: {
            name: "Galactic Shot",
            effect: "Charges a massive arrow that pierces all enemies in a straight line.",
            sound: "orion_galactic_shot.mp3",
            voiceLine: "Witness the power of the cosmos!"
        },
        abilitiesVoiceLines: [
            { ability: "Starburst Arrows", line: "Light will guide my aim!" },
            { ability: "Astral Snare", line: "Nowhere to run!" }
        ],
        killEffect: {
            animation: "star_particle_burst",
            sound: "kill_orion_effect.mp3",
            description: "A burst of star particles surrounds Orion, forming constellations after every kill."
        }
    },
    {
        name: "Shadowlord",
        role: "DPS",
        lore: "A ruler of the Shadow Dominion, Shadowlord's powers strike fear into the hearts of all enemies.",
        primaryFire: { type: "Shadow Bolts", damage: 30, sound: "shadowlord_shadow_bolts.mp3" },
        secondaryFire: { type: "Dark Slash", damage: 60, sound: "shadowlord_dark_slash.mp3" },
        ultimate: {
            name: "Eclipse Overload",
            effect: "Envelops the battlefield in darkness and deals damage to all enemies in range.",
            sound: "shadowlord_eclipse_overload.mp3",
            voiceLine: "Embrace the void!"
        },
        abilitiesVoiceLines: [
            { ability: "Shadow Bolts", line: "The shadows will claim you!" },
            { ability: "Dark Slash", line: "Feel my wrath!" }
        ],
        killEffect: {
            animation: "dark_aura_explosion",
            sound: "kill_shadowlord_effect.mp3",
            description: "Dark aura explodes around Shadowlord after each kill."
            {
        name: "Thunderstrike",
        role: "DPS",
        lore: "Thunderstrike channels the raw power of storms, striking fear into foes with electrifying speed and precision.",
        primaryFire: { type: "Lightning Bolt", damage: 25, sound: "thunderstrike_lightning_bolt.mp3" },
        secondaryFire: { type: "Thunder Shock", damage: 50, sound: "thunderstrike_thunder_shock.mp3" },
        ultimate: {
            name: "Storm Surge",
            effect: "Summons a massive storm, dealing area damage to enemies caught in the vortex.",
            sound: "thunderstrike_storm_surge.mp3",
            voiceLine: "The storm answers my call!"
        },
        abilitiesVoiceLines: [
            { ability: "Lightning Bolt", line: "Feel the strike of lightning!" },
            { ability: "Thunder Shock", line: "Shockwave incoming!" }
        ],
        killEffect: {
            animation: "electrical_discharge_effect",
            sound: "kill_thunderstrike_effect.mp3",
            description: "Electric sparks burst out after each kill, dazzling the battlefield."
        }
    },
    {
        name: "Inferno",
        role: "DPS",
        lore: "Inferno commands the blazing fury of fire, engulfing enemies in flames that leave nothing but ashes.",
        primaryFire: { type: "Fire Blast", damage: 35, sound: "inferno_fire_blast.mp3" },
        secondaryFire: { type: "Flame Barrage", damage: 60, sound: "inferno_flame_barrage.mp3" },
        ultimate: {
            name: "Blazing Eruption",
            effect: "Triggers a fiery eruption, spreading flames across the battlefield.",
            sound: "inferno_blazing_eruption.mp3",
            voiceLine: "Burn them to cinders!"
        },
        abilitiesVoiceLines: [
            { ability: "Fire Blast", line: "Heat of the moment!" },
            { ability: "Flame Barrage", line: "Feel the heat!" }
        ],
        killEffect: {
            animation: "flame_explosion_effect",
            sound: "kill_inferno_effect.mp3",
            description: "An explosive burst of fire consumes the area after every kill."
        }
    },
    {
        name: "Phantom",
        role: "DPS",
        lore: "Silent and deadly, Phantom moves through the shadows, eliminating enemies without a trace.",
        primaryFire: { type: "Shadow Dart", damage: 20, sound: "phantom_shadow_dart.mp3" },
        secondaryFire: { type: "Cloaked Strike", damage: 45, sound: "phantom_cloaked_strike.mp3" },
        ultimate: {
            name: "Spectral Veil",
            effect: "Turns invisible and deals massive damage upon ambushing enemies.",
            sound: "phantom_spectral_veil.mp3",
            voiceLine: "You’ll never see me coming!"
        },
        abilitiesVoiceLines: [
            { ability: "Shadow Dart", line: "Invisible but deadly!" },
            { ability: "Cloaked Strike", line: "From the shadows!" }
        ],
        killEffect: {
            animation: "shadow_dispersion_effect",
            sound: "kill_phantom_effect.mp3",
            description: "A spectral ripple dissolves enemies upon each kill."
        }
    },

        
    

        
    

 

