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
    {
        name: "Blaze Phantom",
        role: "DPS",
        lore: "Blaze Phantom is a fiery rogue, igniting the battlefield with explosive speed and burning attacks.",
        primaryFire: { type: "Inferno Shot", damage: 30, sound: "blaze_phantom_inferno_shot.mp3" },
        secondaryFire: { type: "Fire Nova", damage: 60, sound: "blaze_phantom_fire_nova.mp3" },
        ultimate: {
            name: "Hellstorm",
            effect: "Summons a wave of flames that sweeps across the battlefield.",
            sound: "blaze_phantom_hellstorm.mp3",
            voiceLine: "Feel the heat!"
        },
        abilitiesVoiceLines: [
            { ability: "Inferno Shot", line: "Burn, baby, burn!" },
            { ability: "Fire Nova", line: "Blaze a trail!" }
        ],
        killEffect: {
            animation: "flame_burst_effect",
            sound: "kill_blaze_phantom_effect.mp3",
            description: "A fiery explosion consumes defeated enemies in flames."
        }
    },
    {
        name: "Frost Archer",
        role: "DPS",
        lore: "Frost Archer wields the chilling power of ice, freezing enemies in their tracks with precision.",
        primaryFire: { type: "Ice Arrow", damage: 25, sound: "frost_archer_ice_arrow.mp3" },
        secondaryFire: { type: "Freezing Shot", damage: 40, sound: "frost_archer_freezing_shot.mp3" },
        ultimate: {
            name: "Frozen Barrage",
            effect: "Unleashes a storm of icy arrows, freezing all enemies in range.",
            sound: "frost_archer_frozen_barrage.mp3",
            voiceLine: "Winter is coming!"
        },
        abilitiesVoiceLines: [
            { ability: "Ice Arrow", line: "Cold as ice!" },
            { ability: "Freezing Shot", line: "Chill out!" }
        ],
        killEffect: {
            animation: "frost_shatter_effect",
            sound: "kill_frost_archer_effect.mp3",
            description: "Frozen enemies shatter dramatically upon death."
        }
    },
    {
        name: "Venom Warden",
        role: "DPS",
        lore: "Venom Warden controls the toxic powers of nature, poisoning enemies and rendering them helpless.",
        primaryFire: { type: "Venom Spit", damage: 20, sound: "venom_warden_venom_spit.mp3" },
        secondaryFire: { type: "Toxic Cloud", damage: 50, sound: "venom_warden_toxic_cloud.mp3" },
        ultimate: {
            name: "Deadly Toxin",
            effect: "Covers the battlefield in poison, dealing damage over time to all enemies.",
            sound: "venom_warden_deadly_toxin.mp3",
            voiceLine: "The poison runs deep."
        },
        abilitiesVoiceLines: [
            { ability: "Venom Spit", line: "Feel the sting!" },
            { ability: "Toxic Cloud", line: "Nature strikes back!" }
        ],
        killEffect: {
            animation: "poison_cloud_effect",
            sound: "kill_venom_warden_effect.mp3",
            description: "Enemies dissolve into a cloud of green venom after defeat."
        }
    },
    {
        name: "Solar Scorcher",
        role: "DPS",
        lore: "Harnessing the intensity of the sun, Solar Scorcher incinerates foes with blinding heat and radiant blasts.",
        primaryFire: { type: "Solar Ray", damage: 35, sound: "solar_scorcher_solar_ray.mp3" },
        secondaryFire: { type: "Blazing Wave", damage: 50, sound: "solar_scorcher_blazing_wave.mp3" },
        ultimate: {
            name: "Supernova Burst",
            effect: "Detonates a sun-like explosion that deals massive area damage.",
            sound: "solar_scorcher_supernova_burst.mp3",
            voiceLine: "Feel the wrath of the sun!"
        },
        abilitiesVoiceLines: [
            { ability: "Solar Ray", line: "Blazing hot!" },
            { ability: "Blazing Wave", line: "Feel the burn!" }
        ],
        killEffect: {
            animation: "solar_flare_effect",
            sound: "kill_solar_scorcher_effect.mp3",
            description: "A blinding solar flare erupts after each kill, illuminating the battlefield."
        }
    },
    {
        name: "Nightblade",
        role: "DPS",
        lore: "A master assassin, Nightblade moves silently through the battlefield, cutting down foes with lethal precision.",
        primaryFire: { type: "Shadow Slash", damage: 30, sound: "nightblade_shadow_slash.mp3" },
        secondaryFire: { type: "Silent Strike", damage: 45, sound: "nightblade_silent_strike.mp3" },
        ultimate: {
            name: "Death’s Dance",
            effect: "Unleashes a flurry of blade strikes, damaging all enemies in range.",
            sound: "nightblade_deaths_dance.mp3",
            voiceLine: "Death is but a whisper!"
        },
        abilitiesVoiceLines: [
            { ability: "Shadow Slash", line: "Strike from the shadows!" },
            { ability: "Silent Strike", line: "The end is near!" }
        ],
        killEffect: {
            animation: "blade_vanish_effect",
            sound: "kill_nightblade_effect.mp3",
            description: "Enemies disintegrate into shadow particles upon defeat."
        }
    },
    {
        name: "Wild Gunner",
        role: "DPS",
        lore: "An unpredictable sharpshooter, Wild Gunner thrives in the chaos of battle, landing improbable shots with style.",
        primaryFire: { type: "Ricochet Shot", damage: 25, sound: "wild_gunner_ricochet_shot.mp3" },
        secondaryFire: { type: "Explosive Shell", damage: 50, sound: "wild_gunner_explosive_shell.mp3" },
        ultimate: {
            name: "Bullet Storm",
            effect: "Unleashes a barrage of bullets that hit all enemies in range.",
            sound: "wild_gunner_bullet_storm.mp3",
            voiceLine: "Guns blazing!"
        },
        abilitiesVoiceLines: [
            { ability: "Ricochet Shot", line: "Bounced but deadly!" },
            { ability: "Explosive Shell", line: "Heads up!" }
        ],
        killEffect: {
            animation: "bullet_spark_effect",
            sound: "kill_wild_gunner_effect.mp3",
            description: "An explosive burst of bullets ricochets wildly after each kill."
        }
    },
    {
        name: "Arcane Archer",
        role: "DPS",
        lore: "The Arcane Archer channels mystical energy into every arrow, bending reality itself to her will.",
        primaryFire: { type: "Mystic Arrow", damage: 30, sound: "arcane_archer_mystic_arrow.mp3" },
        secondaryFire: { type: "Reality Breaker", damage: 55, sound: "arcane_archer_reality_breaker.mp3" },
        ultimate: {
            name: "Celestial Rain",
            effect: "Summons a torrent of magical arrows that pierce all enemies within range.",
            sound: "arcane_archer_celestial_rain.mp3",
            voiceLine: "Let the heavens rain down!"
        },
        abilitiesVoiceLines: [
            { ability: "Mystic Arrow", line: "The stars guide my aim!" },
            { ability: "Reality Breaker", line: "Bend to my will!" }
        ],
        killEffect: {
            animation: "arcane_glow_effect",
            sound: "kill_arcane_archer_effect.mp3",
            description: "Enemies vanish into a swirl of glowing magical particles upon defeat."
        }
    },
    {
        name: "Chaos Swordsman",
        role: "DPS",
        lore: "Wielding twin blades charged with chaotic energy, the Chaos Swordsman thrives in the heat of battle.",
        primaryFire: { type: "Twin Slash", damage: 25, sound: "chaos_swordsman_twin_slash.mp3" },
        secondaryFire: { type: "Chaotic Charge", damage: 50, sound: "chaos_swordsman_chaotic_charge.mp3" },
        ultimate: {
            name: "Blade Tempest",
            effect: "Unleashes a storm of chaotic slashes, hitting all enemies in the vicinity.",
            sound: "chaos_swordsman_blade_tempest.mp3",
            voiceLine: "Feel the chaos within!"
        },
        abilitiesVoiceLines: [
            { ability: "Twin Slash", line: "Double the pain!" },
            { ability: "Chaotic Charge", line: "Charge and conquer!" }
        ],
        killEffect: {
            animation: "chaos_blast_effect",
            sound: "kill_chaos_swordsman_effect.mp3",
            description: "A chaotic explosion ripples outward after each kill, distorting the battlefield."
        }
    },
    {
        name: "Venom Warden",
        role: "DPS",
        lore: "Venom Warden controls the toxic powers of nature, poisoning enemies and rendering them helpless.",
        primaryFire: { type: "Venom Spit", damage: 20, sound: "venom_warden_venom_spit.mp3" },
        secondaryFire: { type: "Toxic Cloud", damage: 50, sound: "venom_warden_toxic_cloud.mp3" },
        ultimate: {
            name: "Deadly Toxin",
            effect: "Covers the battlefield in poison, dealing damage over time to all enemies.",
            sound: "venom_warden_deadly_toxin.mp3",
            voiceLine: "The poison runs deep."
        },
        abilitiesVoiceLines: [
            { ability: "Venom Spit", line: "Feel the sting!" },
            { ability: "Toxic Cloud", line: "Nature strikes back!" }
        ],
        killEffect: {
            animation: "poison_cloud_effect",
            sound: "kill_venom_warden_effect.mp3",
            description: "Enemies dissolve into a cloud of green venom after defeat."
        }
    },
    {
        name: "Steel Guardian",
        role: "Tank",
        lore: "A formidable protector, Steel Guardian is a living fortress, defending allies against the fiercest attacks.",
        primaryFire: { type: "Heavy Slam", damage: 15, sound: "steel_guardian_heavy_slam.mp3" },
        secondaryFire: { type: "Shield Charge", damage: 25, sound: "steel_guardian_shield_charge.mp3" },
        ultimate: {
            name: "Fortress Mode",
            effect: "Activates an indestructible shield that absorbs all damage for 10 seconds.",
            sound: "steel_guardian_fortress_mode.mp3",
            voiceLine: "You cannot break me!"
        },
        abilitiesVoiceLines: [
            { ability: "Heavy Slam", line: "Defend and conquer!" },
            { ability: "Shield Charge", line: "Charging forward!" }
        ],
        killEffect: {
            animation: "metal_shield_glow_effect",
            sound: "kill_steel_guardian_effect.mp3",
            description: "Enemies are thrown backward upon defeat, leaving sparks flying."
        }
    },
    {
        name: "Mystic Healer",
        role: "Healer",
        lore: "Mystic Healer channels the powers of light and healing, revitalizing allies and purifying the battlefield.",
        primaryFire: { type: "Healing Wave", damage: 0, sound: "mystic_healer_healing_wave.mp3" },
        secondaryFire: { type: "Purify Blast", damage: 20, sound: "mystic_healer_purify_blast.mp3" },
        ultimate: {
            name: "Sanctuary",
            effect: "Creates a healing zone that restores health to all allies within range.",
            sound: "mystic_healer_sanctuary.mp3",
            voiceLine: "Let the light guide you!"
        },
        abilitiesVoiceLines: [
            { ability: "Healing Wave", line: "Healing light!" },
            { ability: "Purify Blast", line: "Be cleansed!" }
        ],
        killEffect: {
            animation: "light_wave_effect",
            sound: "kill_mystic_healer_effect.mp3",
            description: "Enemies struck by Purify Blast dissolve in radiant light."
        }
    },
    {
        name: "Blizzard Titan",
        role: "Tank",
        lore: "Blizzard Titan commands the icy forces of nature, shielding allies with frosty barriers and devastating enemies.",
        primaryFire: { type: "Frozen Slam", damage: 30, sound: "blizzard_titan_frozen_slam.mp3" },
        secondaryFire: { type: "Ice Wall", damage: 0, effect: "Creates an impenetrable wall of ice.", sound: "blizzard_titan_ice_wall.mp3" },
        ultimate: {
            name: "Avalanche",
            effect: "Unleashes a massive snowstorm that slows and damages all enemies in range.",
            sound: "blizzard_titan_avalanche.mp3",
            voiceLine: "Winter has come!"
        },
        abilitiesVoiceLines: [
            { ability: "Frozen Slam", line: "Ice to meet you!" },
            { ability: "Ice Wall", line: "Shield of frost!" }
        ],
        killEffect: {
            animation: "snow_explosion_effect",
            sound: "kill_blizzard_titan_effect.mp3",
            description: "Enemies freeze solid and shatter upon defeat."
        }
    },
    {
        name: "Solar Sentinel",
        role: "Tank",
        lore: "A radiant guardian infused with the sun's energy, Solar Sentinel shields allies and scorches enemies with celestial power.",
        primaryFire: { type: "Solar Slam", damage: 30, sound: "solar_sentinel_solar_slam.mp3" },
        secondaryFire: { type: "Radiant Barrier", damage: 0, effect: "Blocks incoming projectiles and heals nearby allies.", sound: "solar_sentinel_radiant_barrier.mp3" },
        ultimate: {
            name: "Solar Flare",
            effect: "Releases a blinding burst of sunlight, stunning enemies and healing allies.",
            sound: "solar_sentinel_solar_flare.mp3",
            voiceLine: "Behold the sun’s wrath!"
        },
        abilitiesVoiceLines: [
            { ability: "Solar Slam", line: "Feel the heat of justice!" },
            { ability: "Radiant Barrier", line: "The sun protects us!" }
        ],
        killEffect: {
            animation: "light_burst_effect",
            sound: "kill_solar_sentinel_effect.mp3",
            description: "Enemies disintegrate into particles of light upon defeat."
        }
    },
    {
        name: "Nightshade",
        role: "DPS",
        lore: "A deadly assassin who moves like a whisper in the darkness, Nightshade deals lethal poison damage and disorients enemies.",
        primaryFire: { type: "Poison Daggers", damage: 20, sound: "nightshade_poison_daggers.mp3" },
        secondaryFire: { type: "Venom Bomb", damage: 40, sound: "nightshade_venom_bomb.mp3" },
        ultimate: {
            name: "Shadow Frenzy",
            effect: "Enters a frenzy, attacking multiple enemies with rapid poison strikes.",
            sound: "nightshade_shadow_frenzy.mp3",
            voiceLine: "The shadows embrace me!"
        },
        abilitiesVoiceLines: [
            { ability: "Poison Daggers", line: "A deadly dose!" },
            { ability: "Venom Bomb", line: "One drop is all it takes!" }
        ],
        killEffect: {
            animation: "shadow_poison_effect",
            sound: "kill_nightshade_effect.mp3",
            description: "A burst of shadowy venom engulfs defeated enemies."
        }
    },
    {
        name: "Celestial Sage",
        role: "Healer",
        lore: "A wise and mystical healer who channels the energies of the cosmos to protect and revitalize their allies.",
        primaryFire: { type: "Starlight Stream", damage: 0, sound: "celestial_sage_starlight_stream.mp3" },
        secondaryFire: { type: "Cosmic Bolt", damage: 25, sound: "celestial_sage_cosmic_bolt.mp3" },
        ultimate: {
            name: "Astral Harmony",
            effect: "Aligns the stars, healing all allies and boosting their abilities temporarily.",
            sound: "celestial_sage_astral_harmony.mp3",
            voiceLine: "The cosmos is our guide!"
        },
        abilitiesVoiceLines: [
            { ability: "Starlight Stream", line: "Let the stars heal you!" },
            { ability: "Cosmic Bolt", line: "A spark of the infinite!" }
        ],
        killEffect: {
            animation: "cosmic_glow_effect",
            sound: "kill_celestial_sage_effect.mp3",
            description: "Enemies dissolve into twinkling stardust upon defeat."
        }
    },
    {
        name: "Crimson Reaper",
        role: "DPS",
        lore: "The harbinger of death, Crimson Reaper wields a scythe infused with blood magic, draining the life of enemies.",
        primaryFire: { type: "Blood Slash", damage: 35, sound: "crimson_reaper_blood_slash.mp3" },
        secondaryFire: { type: "Life Siphon", damage: 20, effect: "Restores health based on damage dealt.", sound: "crimson_reaper_life_siphon.mp3" },
        ultimate: {
            name: "Death’s Harvest",
            effect: "Spreads a cursed field that drains health from all enemies within range.",
            sound: "crimson_reaper_deaths_harvest.mp3",
            voiceLine: "Reap what you sow!"
        },
        abilitiesVoiceLines: [
            { ability: "Blood Slash", line: "Your life is mine!" },
            { ability: "Life Siphon", line: "Feel the drain!" }
        ],
        killEffect: {
            animation: "blood_aura_effect",
            sound: "kill_crimson_reaper_effect.mp3",
            description: "Defeated enemies dissolve into a mist of blood."
        }
    },
    {
        name: "Stormcaller",
        role: "DPS",
        lore: "Master of thunder and lightning, Stormcaller unleashes destructive storms upon the battlefield.",
        primaryFire: { type: "Lightning Strike", damage: 25, sound: "stormcaller_lightning_strike.mp3" },
        secondaryFire: { type: "Thunder Clap", damage: 50, sound: "stormcaller_thunder_clap.mp3" },
        ultimate: {
            name: "Tempest Fury",
            effect: "Summons a massive storm that deals area damage over time and slows enemies.",
            sound: "stormcaller_tempest_fury.mp3",
            voiceLine: "The storm rises!"
        },
        abilitiesVoiceLines: [
            { ability: "Lightning Strike", line: "The storm strikes true!" },
            { ability: "Thunder Clap", line: "Feel the thunder!" }
        ],
        killEffect: {
            animation: "storm_blast_effect",
            sound: "kill_stormcaller_effect.mp3",
            description: "Enemies are struck by lightning and evaporate into sparks."
        }
    },
    {
        name: "Iron Titan",
        role: "Tank",
        lore: "An unstoppable force, Iron Titan crushes enemies with overwhelming strength and impenetrable armor.",
        primaryFire: { type: "Titan Punch", damage: 30, sound: "iron_titan_titan_punch.mp3" },
        secondaryFire: { type: "Ground Quake", damage: 40, sound: "iron_titan_ground_quake.mp3" },
        ultimate: {
            name: "Unyielding Fury",
            effect: "Becomes invincible for 8 seconds, dealing massive area damage with every attack.",
            sound: "iron_titan_unyielding_fury.mp3",
            voiceLine: "You cannot break me!"
        },
        abilitiesVoiceLines: [
            { ability: "Titan Punch", line: "Strength beyond measure!" },
            { ability: "Ground Quake", line: "Feel the earth shake!" }
        ],
        killEffect: {
            animation: "shattering_ground_effect",
            sound: "kill_iron_titan_effect.mp3",
            description: "Enemies are smashed into the ground, leaving cracks and debris behind."
        }
    },
    {
        name: "Void Stalker",
        role: "DPS",
        lore: "A mysterious hunter from another dimension, Void Stalker bends reality to ambush foes and vanish into the shadows.",
        primaryFire: { type: "Void Blast", damage: 25, sound: "void_stalker_void_blast.mp3" },
        secondaryFire: { type: "Phase Shift", damage: 0, effect: "Teleports a short distance while becoming untargetable.", sound: "void_stalker_phase_shift.mp3" },
        ultimate: {
            name: "Eclipse Strike",
            effect: "Summons the power of the void to strike all enemies in its path.",
            sound: "void_stalker_eclipse_strike.mp3",
            voiceLine: "The void hungers!"
        },
        abilitiesVoiceLines: [
            { ability: "Void Blast", line: "Step into the abyss!" },
            { ability: "Phase Shift", line: "You can't touch me!" }
        ],
        killEffect: {
            animation: "void_explosion_effect",
            sound: "kill_void_stalker_effect.mp3",
            description: "Enemies dissolve into swirling void particles upon defeat."
        }
    },
    {
        name: "Pyroclasm",
        role: "Tank",
        lore: "Forged in the heart of a volcano, Pyroclasm unleashes molten fury to decimate enemies and shield allies.",
        primaryFire: { type: "Lava Burst", damage: 30, sound: "pyroclasm_lava_burst.mp3" },
        secondaryFire: { type: "Magma Shield", damage: 0, effect: "Blocks incoming projectiles with a molten barrier.", sound: "pyroclasm_magma_shield.mp3" },
        ultimate: {
            name: "Volcanic Eruption",
            effect: "Erupts lava across the battlefield, dealing massive area damage over time.",
            sound: "pyroclasm_volcanic_eruption.mp3",
            voiceLine: "Feel the earth’s fury!"
        },
        abilitiesVoiceLines: [
            { ability: "Lava Burst", line: "Burn like the sun!" },
            { ability: "Magma Shield", line: "I am the mountain!" }
        ],
        killEffect: {
            animation: "lava_explosion_effect",
            sound: "kill_pyroclasm_effect.mp3",
            description: "Defeated enemies are consumed by a burst of molten lava."
        }
    },
    {
        name: "Spectral Guardian",
        role: "Tank",
        lore: "A spectral warrior bound by a curse, Spectral Guardian protects allies with ethereal shields and powerful strikes.",
        primaryFire: { type: "Spirit Strike", damage: 20, sound: "spectral_guardian_spirit_strike.mp3" },
        secondaryFire: { type: "Wraith Shield", damage: 0, effect: "Creates an energy barrier that absorbs damage.", sound: "spectral_guardian_wraith_shield.mp3" },
        ultimate: {
            name: "Ethereal Vortex",
            effect: "Summons a ghostly vortex that pulls enemies inward and deals damage over time.",
            sound: "spectral_guardian_ethereal_vortex.mp3",
            voiceLine: "The spirits are restless!"
        },
        abilitiesVoiceLines: [
            { ability: "Spirit Strike", line: "Feel the power of the beyond!" },
            { ability: "Wraith Shield", line: "No harm will come to them!" }
        ],
        killEffect: {
            animation: "spectral_shimmer_effect",
            sound: "kill_spectral_guardian_effect.mp3",
            description: "Enemies fade into spectral energy upon defeat."
        }
    },
    {
        name: "Lunar Vanguard",
        role: "Tank",
        lore: "A celestial protector empowered by the moon’s energy, Lunar Vanguard shields allies and reflects enemy attacks.",
        primaryFire: { type: "Moonlight Slash", damage: 20, sound: "lunar_vanguard_moonlight_slash.mp3" },
        secondaryFire: { type: "Astral Shield", damage: 0, effect: "Creates a shimmering barrier that deflects projectiles.", sound: "lunar_vanguard_astral_shield.mp3" },
        ultimate: {
            name: "Lunar Eclipse",
            effect: "Unleashes a surge of lunar energy, stunning enemies and buffing allies.",
            sound: "lunar_vanguard_lunar_eclipse.mp3",
            voiceLine: "The moon watches over us!"
        },
        abilitiesVoiceLines: [
            { ability: "Moonlight Slash", line: "Strike under the moonlight!" },
            { ability: "Astral Shield", line: "The stars protect us!" }
        ],
        killEffect: {
            animation: "moonlight_glow_effect",
            sound: "kill_lunar_vanguard_effect.mp3",
            description: "Defeated enemies dissolve into a pale moonlight."
        }
    },
    {
        name: "Chaos Ruler",
        role: "DPS",
        lore: "Chaos incarnate, Chaos Ruler bends reality to his will, creating unpredictable havoc wherever he goes.",
        primaryFire: { type: "Warp Blast", damage: 30, sound: "chaos_ruler_warp_blast.mp3" },
        secondaryFire: { type: "Reality Shift", damage: 20, effect: "Disorients enemies and swaps their positions randomly.", sound: "chaos_ruler_reality_shift.mp3" },
        ultimate: {
            name: "Anomaly Burst",
            effect: "Detonates a chaotic anomaly, damaging all enemies and scrambling their controls temporarily.",
            sound: "chaos_ruler_anomaly_burst.mp3",
            voiceLine: "Bow before chaos!"
        },
        abilitiesVoiceLines: [
            { ability: "Warp Blast", line: "Nothing escapes chaos!" },
            { ability: "Reality Shift", line: "The world bends to my will!" }
        ],
        killEffect: {
            animation: "chaotic_explosion_effect",
            sound: "kill_chaos_ruler_effect.mp3",
            description: "Defeated enemies disintegrate into warped fragments of reality."
        }
    },
    {
        name: "Radiant Healer",
        role: "Healer",
        lore: "A divine figure who channels radiant energy to heal allies and purge darkness from the battlefield.",
        primaryFire: { type: "Light Stream", damage: 0, sound: "radiant_healer_light_stream.mp3" },
        secondaryFire: { type: "Purging Beam", damage: 25, sound: "radiant_healer_purging_beam.mp3" },
        ultimate: {
            name: "Holy Radiance",
            effect: "Bathes the battlefield in radiant light, restoring health to allies and damaging enemies caught in the glow.",
            sound: "radiant_healer_holy_radiance.mp3",
            voiceLine: "Let the light cleanse your soul!"
        },
        abilitiesVoiceLines: [
            { ability: "Light Stream", line: "Healing light upon you!" },
            { ability: "Purging Beam", line: "The darkness fades!" }
        ],
        killEffect: {
            animation: "radiant_glow_effect",
            sound: "kill_radiant_healer_effect.mp3",
            description: "Enemies vanish in radiant beams upon defeat."
        }
    },
    {
        name: "Tempest Warden",
        role: "Tank",
        lore: "Master of turbulent winds, Tempest Warden defends allies by redirecting attacks with gale force and sweeping away enemies.",
        primaryFire: { type: "Cyclone Strike", damage: 25, sound: "tempest_warden_cyclone_strike.mp3" },
        secondaryFire: { type: "Wind Barrier", damage: 0, effect: "Creates a gust of wind that deflects projectiles.", sound: "tempest_warden_wind_barrier.mp3" },
        ultimate: {
            name: "Hurricane Overload",
            effect: "Summons a massive storm that sweeps enemies off their feet, stunning and damaging them.",
            sound: "tempest_warden_hurricane_overload.mp3",
            voiceLine: "The storm answers my call!"
        },
        abilitiesVoiceLines: [
            { ability: "Cyclone Strike", line: "Feel the winds of destruction!" },
            { ability: "Wind Barrier", line: "You cannot touch us!" }
        ],
        killEffect: {
            animation: "gust_surge_effect",
            sound: "kill_tempest_warden_effect.mp3",
            description: "Enemies are scattered like leaves on the wind upon defeat."
        }
    },
    {
        name: "Ember Fist",
        role: "DPS",
        lore: "Ember Fist channels the primal power of fire through devastating melee attacks, leaving the battlefield ablaze.",
        primaryFire: { type: "Infernal Punch", damage: 35, sound: "ember_fist_infernal_punch.mp3" },
        secondaryFire: { type: "Flame Wave", damage: 50, sound: "ember_fist_flame_wave.mp3" },
        ultimate: {
            name: "Molten Fury",
            effect: "Ignites the ground, dealing massive damage to all enemies caught in the flames.",
            sound: "ember_fist_molten_fury.mp3",
            voiceLine: "Feel the fury of fire!"
        },
        abilitiesVoiceLines: [
            { ability: "Infernal Punch", line: "The heat is on!" },
            { ability: "Flame Wave", line: "Burn it all down!" }
        ],
        killEffect: {
            animation: "fireburst_effect",
            sound: "kill_ember_fist_effect.mp3",
            description: "Enemies burst into flames upon defeat, leaving scorched ground behind."
        }
    },
    {
        name: "Azure Mystic",
        role: "Healer",
        lore: "Azure Mystic wields the tranquil energy of water to heal allies and wash away enemy strength.",
        primaryFire: { type: "Healing Stream", damage: 0, sound: "azure_mystic_healing_stream.mp3" },
        secondaryFire: { type: "Tidal Blast", damage: 30, sound: "azure_mystic_tidal_blast.mp3" },
        ultimate: {
            name: "Ocean’s Grace",
            effect: "Summons a wave of healing water that revitalizes allies and slows enemies.",
            sound: "azure_mystic_oceans_grace.mp3",
            voiceLine: "The tides turn in our favor!"
        },
        abilitiesVoiceLines: [
            { ability: "Healing Stream", line: "Flow with the current!" },
            { ability: "Tidal Blast", line: "Crash upon them!" }
        ],
        killEffect: {
            animation: "water_surge_effect",
            sound: "kill_azure_mystic_effect.mp3",
            description: "Enemies are swept away by a surge of water upon defeat."
        }
    },
    {
        name: "Shadow Enchantress",
        role: "DPS",
        lore: "A sorceress who wields the power of shadows, Shadow Enchantress manipulates darkness to ensnare and destroy her enemies.",
        primaryFire: { type: "Dark Pulse", damage: 30, sound: "shadow_enchantress_dark_pulse.mp3" },
        secondaryFire: { type: "Shadow Bind", damage: 0, effect: "Immobilizes enemies in an area for 3 seconds.", sound: "shadow_enchantress_shadow_bind.mp3" },
        ultimate: {
            name: "Nightfall",
            effect: "Shrouds the battlefield in darkness, dealing damage over time to all enemies.",
            sound: "shadow_enchantress_nightfall.mp3",
            voiceLine: "The night consumes you!"
        },
        abilitiesVoiceLines: [
            { ability: "Dark Pulse", line: "Feel the sting of shadows!" },
            { ability: "Shadow Bind", line: "You cannot escape!" }
        ],
        killEffect: {
            animation: "shadow_dissolve_effect",
            sound: "kill_shadow_enchantress_effect.mp3",
            description: "Enemies are consumed by darkness upon defeat."
        }
    },
    {
        name: "Titan Breaker",
        role: "Tank",
        lore: "A warrior of immense strength, Titan Breaker smashes through enemy defenses and shatters their ranks.",
        primaryFire: { type: "Colossal Slam", damage: 35, sound: "titan_breaker_colossal_slam.mp3" },
        secondaryFire: { type: "Earth Shatter", damage: 50, sound: "titan_breaker_earth_shatter.mp3" },
        ultimate: {
            name: "Wrath of the Colossus",
            effect: "Unleashes a powerful ground quake that damages and stuns all enemies in range.",
            sound: "titan_breaker_wrath_of_the_colossus.mp3",
            voiceLine: "Feel the wrath of the earth!"
        },
        abilitiesVoiceLines: [
            { ability: "Colossal Slam", line: "Strength unmatched!" },
            { ability: "Earth Shatter", line: "The ground will tremble!" }
        ],
        killEffect: {
            animation: "earth_crack_effect",
            sound: "kill_titan_breaker_effect.mp3",
            description: "Enemies are smashed into the ground, leaving cracks and debris."
        }
    },
    {
        name: "Starlight Guardian",
        role: "Healer",
        lore: "A celestial being who channels starlight to heal allies and guide them to victory.",
        primaryFire: { type: "Healing Light", damage: 0, sound: "starlight_guardian_healing_light.mp3" },
        secondaryFire: { type: "Guiding Beam", damage: 30, sound: "starlight_guardian_guiding_beam.mp3" },
        ultimate: {
            name: "Nova Shield",
            effect: "Surrounds all allies with a radiant shield that absorbs damage for 10 seconds.",
            sound: "starlight_guardian_nova_shield.mp3",
            voiceLine: "The stars protect you!"
        },
        abilitiesVoiceLines: [
            { ability: "Healing Light", line: "Bathe in the starlight!" },
            { ability: "Guiding Beam", line: "Follow the light!" }
        ],
        killEffect: {
            animation: "starlight_flash_effect",
            sound: "kill_starlight_guardian_effect.mp3",
            description: "Enemies fade into radiant starlight upon defeat."
        }
    },
    {
        name: "Frozen Sentinel",
        role: "Tank",
        lore: "An ancient warrior encased in ice, Frozen Sentinel uses frost powers to shield allies and freeze enemies in place.",
        primaryFire: { type: "Ice Slam", damage: 30, sound: "frozen_sentinel_ice_slam.mp3" },
        secondaryFire: { type: "Glacial Wall", damage: 0, effect: "Creates an icy barrier that absorbs damage.", sound: "frozen_sentinel_glacial_wall.mp3" },
        ultimate: {
            name: "Blizzard Sphere",
            effect: "Summons a sphere of icy winds that slows and damages all enemies within range.",
            sound: "frozen_sentinel_blizzard_sphere.mp3",
            voiceLine: "Feel the chill of eternity!"
        },
        abilitiesVoiceLines: [
            { ability: "Ice Slam", line: "Shatter upon impact!" },
            { ability: "Glacial Wall", line: "Protected by frost!" }
        ],
        killEffect: {
            animation: "icy_crack_effect",
            sound: "kill_frozen_sentinel_effect.mp3",
            description: "Enemies freeze solid and shatter upon defeat."
        }
    },
    {
        name: "Phoenix Avenger",
        role: "DPS",
        lore: "Born from the ashes, Phoenix Avenger wields the power of flame and rebirth to dominate the battlefield.",
        primaryFire: { type: "Fire Bolt", damage: 30, sound: "phoenix_avenger_fire_bolt.mp3" },
        secondaryFire: { type: "Ash Burst", damage: 50, sound: "phoenix_avenger_ash_burst.mp3" },
        ultimate: {
            name: "Rebirth Inferno",
            effect: "Enters a state of rebirth, dealing massive damage to enemies and healing allies.",
            sound: "phoenix_avenger_rebirth_inferno.mp3",
            voiceLine: "The fire never dies!"
        },
        abilitiesVoiceLines: [
            { ability: "Fire Bolt", line: "Burn through the ashes!" },
            { ability: "Ash Burst", line: "Rise and ignite!" }
        ],
        killEffect: {
            animation: "flame_phoenix_effect",
            sound: "kill_phoenix_avenger_effect.mp3",
            description: "Defeated enemies are engulfed in flames, leaving behind glowing embers."
        }
    },
    {
        name: "Astral Vanguard",
        role: "Tank",
        lore: "A celestial protector from a faraway realm, Astral Vanguard uses cosmic energy to safeguard allies and repel foes.",
        primaryFire: { type: "Cosmic Strike", damage: 25, sound: "astral_vanguard_cosmic_strike.mp3" },
        secondaryFire: { type: "Nebula Barrier", damage: 0, effect: "Creates a shimmering nebula that absorbs projectiles.", sound: "astral_vanguard_nebula_barrier.mp3" },
        ultimate: {
            name: "Galactic Burst",
            effect: "Unleashes a surge of cosmic energy that damages enemies and buffs allies.",
            sound: "astral_vanguard_galactic_burst.mp3",
            voiceLine: "The stars guide our path!"
        },
        abilitiesVoiceLines: [
            { ability: "Cosmic Strike", line: "Strength of the stars!" },
            { ability: "Nebula Barrier", line: "Cosmic defense activated!" }
        ],
        killEffect: {
            animation: "stellar_explosion_effect",
            sound: "kill_astral_vanguard_effect.mp3",
            description: "Enemies dissolve into starlight upon defeat."
        }
    },
    {
        name: "Firestorm Berserker",
        role: "DPS",
        lore: "Fueled by rage and flames, Firestorm Berserker destroys everything in their path with relentless fiery assaults.",
        primaryFire: { type: "Inferno Strike", damage: 35, sound: "firestorm_berserker_inferno_strike.mp3" },
        secondaryFire: { type: "Blazing Charge", damage: 50, sound: "firestorm_berserker_blazing_charge.mp3" },
        ultimate: {
            name: "Flame Frenzy",
            effect: "Enters a berserk state, rapidly attacking enemies with fiery bursts.",
            sound: "firestorm_berserker_flame_frenzy.mp3",
            voiceLine: "Burn them all!"
        },
        abilitiesVoiceLines: [
            { ability: "Inferno Strike", line: "Feel the heat of my rage!" },
            { ability: "Blazing Charge", line: "Flames consume everything!" }
        ],
        killEffect: {
            animation: "firestorm_explosion_effect",
            sound: "kill_firestorm_berserker_effect.mp3",
            description: "Enemies erupt into flames and explode into ash upon defeat."
        }
    },
    {
        name: "Twilight Sorcerer",
        role: "DPS",
        lore: "Wielding the power of dusk and dawn, Twilight Sorcerer bends light and shadow to devastate foes and aid allies.",
        primaryFire: { type: "Light Shard", damage: 25, sound: "twilight_sorcerer_light_shard.mp3" },
        secondaryFire: { type: "Shadow Surge", damage: 40, sound: "twilight_sorcerer_shadow_surge.mp3" },
        ultimate: {
            name: "Eclipse Wave",
            effect: "Unleashes the combined powers of light and shadow in a devastating wave.",
            sound: "twilight_sorcerer_eclipse_wave.mp3",
            voiceLine: "The balance shifts in my favor!"
        },
        abilitiesVoiceLines: [
            { ability: "Light Shard", line: "Let the dawn pierce your soul!" },
            { ability: "Shadow Surge", line: "Shadows overwhelm you!" }
        ],
        killEffect: {
            animation: "twilight_burst_effect",
            sound: "kill_twilight_sorcerer_effect.mp3",
            description: "Defeated enemies dissolve into swirling light and shadow particles."
        }
    },
    {
        name: "Crystal Sentinel",
        role: "Tank",
        lore: "A living embodiment of crystalline energy, Crystal Sentinel shields allies and impales enemies with dazzling spikes.",
        primaryFire: { type: "Crystal Slash", damage: 30, sound: "crystal_sentinel_crystal_slash.mp3" },
        secondaryFire: { type: "Barrier Shard", damage: 0, effect: "Creates a shield of crystals to block attacks.", sound: "crystal_sentinel_barrier_shard.mp3" },
        ultimate: {
            name: "Prismatic Surge",
            effect: "Summons a wave of crystal spikes that damage all enemies in range.",
            sound: "crystal_sentinel_prismatic_surge.mp3",
            voiceLine: "Witness the brilliance of the crystal!"
        },
        abilitiesVoiceLines: [
            { ability: "Crystal Slash", line: "Sharp and true!" },
            { ability: "Barrier Shard", line: "Protected by brilliance!" }
        ],
        killEffect: {
            animation: "crystal_shatter_effect",
            sound: "kill_crystal_sentinel_effect.mp3",
            description: "Enemies shatter into fragments of crystal upon defeat."
        }
    },
    {
        name: "Stormbringer",
        role: "Tank",
        lore: "A master of elemental storms, Stormbringer wields thunder and lightning to protect allies and devastate enemies.",
        primaryFire: { type: "Thunder Slam", damage: 30, sound: "stormbringer_thunder_slam.mp3" },
        secondaryFire: { type: "Electric Barrier", damage: 0, effect: "Generates a charged barrier that absorbs damage.", sound: "stormbringer_electric_barrier.mp3" },
        ultimate: {
            name: "Storm Barrage",
            effect: "Unleashes a torrent of lightning strikes, dealing massive area damage.",
            sound: "stormbringer_storm_barrage.mp3",
            voiceLine: "The storm obeys my command!"
        },
        abilitiesVoiceLines: [
            { ability: "Thunder Slam", line: "Feel the force of the storm!" },
            { ability: "Electric Barrier", line: "The storm will shield us!" }
        ],
        killEffect: {
            animation: "electric_surge_effect",
            sound: "kill_stormbringer_effect.mp3",
            description: "Enemies are struck by lightning and vaporized into sparks."
        }
    },
    {
        name: "Celestial Monarch",
        role: "Healer",
        lore: "Ruler of the cosmic realms, Celestial Monarch uses divine powers to heal allies and annihilate evil with celestial energy.",
        primaryFire: { type: "Radiant Beam", damage: 20, sound: "celestial_monarch_radiant_beam.mp3" },
        secondaryFire: { type: "Starburst Wave", damage: 50, sound: "celestial_monarch_starburst_wave.mp3" },
        ultimate: {
            name: "Divine Ascent",
            effect: "Ascends to a celestial form, massively boosting healing and dealing damage to enemies.",
            sound: "celestial_monarch_divine_ascent.mp3",
            voiceLine: "Bow to the heavens!"
        },
        abilitiesVoiceLines: [
            { ability: "Radiant Beam", line: "Light pierces all shadows!" },
            { ability: "Starburst Wave", line: "The stars align for victory!" }
        ],
        killEffect: {
            animation: "heavenly_glow_effect",
            sound: "kill_celestial_monarch_effect.mp3",
            description: "Enemies dissolve into radiant stardust upon defeat."
        }
    }
];

        
    

        
    

 

