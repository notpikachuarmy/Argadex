// pokedex.js
const misPokes = [
    // --- PLANTILLA VACÍA PARA COPIAR Y PEGAR ---
    {
        id: "1",
        num: 1,
        name: "Pitalant",
        category: "Fruto Trompa",
        types: ["Planta"],
        stats: { hp: 70, att: 65, def: 60, spA: 25, spD: 45, spe: 50 },
        abilities: [{ type: "Habilidad 1", id: "OVERGROW" },
                    { type: "Habilidad 2", id: "HARVEST" },
                    { type: "Oculta", id: "ROUGHSKIN" }],
        flavor: "Su piel es rica en vitaminas y está cubierta de pequeñas protuberancias que imitan a la pitaya. Aunque es lento, su embestida es sorprendentemente poderosa.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [{ id: "2", name: "Pitaderm", method: "Lv. 16" }]
        },
        moves: {
            level: [{ lv: "1", id: "TACKLE" },
                    { lv: "1", id: "GROWL" },
                    { lv: "6", id: "LEAFAGE" },
                    { lv: "7", id: "ABSORB" },
                    { lv: "12", id: "DRAGONBREATH" },
                    { lv: "15", id: "RAZORLEAF" },
                    { lv: "18", id: "STOMP" },
                    { lv: "21", id: "MEGADRAIN" },
                    { lv: "23", id: "BITE" },
                    { lv: "24", id: "BODYSLAM" },
                    { lv: "28", id: "GIGADRAIN" },
                    { lv: "28", id: "SLAM" },
                    { lv: "30", id: "EARTHQUAKE" },
                    { lv: "32", id: "ZENHEADBUTT" },
                    { lv: "33", id: "SYNTHESIS" },
                    { lv: "38", id: "DRAGONPULSE" },
                    { lv: "41", id: "GIGADRAIN" },],
            tutor: [
    { id: "ATTRACT" }, { id: "BLOCK" }, { id: "BULLDOZE" }, { id: "BULLETSEED" }, 
    { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CUT" }, { id: "DOUBLETEAM" }, 
    { id: "EARTHPOWER" }, { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, 
    { id: "FACADE" }, { id: "FLASH" }, { id: "FRENZYPLANT" }, { id: "FRUSTRATION" }, 
    { id: "GIGADRAIN" }, { id: "GIGAIMPACT" }, { id: "GRASSKNOT" }, { id: "GRASSPLEDGE" }, 
    { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONHEAD" }, 
    { id: "IRONTAIL" }, { id: "LIGHTSCREEN" }, { id: "MIMIC" }, { id: "MUDSLAP" }, 
    { id: "NATURALGIFT" }, { id: "NATUREPOWER" }, { id: "OUTRAGE" }, { id: "PROTECT" }, 
    { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROAR" }, 
    { id: "ROCKCLIMB" }, { id: "ROCKPOLISH" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, 
    { id: "ROCKTOMB" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SANDSTORM" }, 
    { id: "SECRETPOWER" }, { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
    { id: "SOLARBEAM" }, { id: "STEALTHROCK" }, { id: "STOMPINGTANTRUM" }, { id: "STONEEDGE" }, 
    { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SUPERPOWER" }, 
    { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "SYNTHESIS" }, { id: "WORKUP" }, 
    { id: "WORRYSEED" }, { id: "TAKEDOWN" }, { id: "SCARYFACE" }, { id: "TRAILBLAZE" }, 
    { id: "MAGICALLEAF" }, { id: "MUDSHOT" }, { id: "ZENHEADBUTT" }, { id: "BODYSLAM" }, 
    { id: "ROCKBLAST" }, { id: "BODYPRESS" }, { id: "IRONDEFENSE" }, { id: "CRUNCH" }, 
    { id: "HYPERVOICE" }, { id: "HEAVYSLAM" }, { id: "AMNESIA" }, { id: "GRASSYTERRAIN" }, 
    { id: "LEAFSTORM" }, { id: "SANDTOMB" }, { id: "SMACKDOWN" }, { id: "HIGHHORSEPOWER" }, 
    { id: "GRASSYGLIDE" }, { id: "DOUBLEEDGE" }, { id: "SCORCHINGSANDS" }, { id: "CURSE" }, 
    { id: "HARDPRESS" }], 
          egg: []
        }
    },
{
        id: "2",
        num: 2,
        name: "Pitaderm",
        category: "Fruto Elefante",
        types: ["Planta", "Dragón"], // Mapeado de GRASS, DRAGON
        stats: { hp: 85, att: 85, def: 75, spA: 40, spD: 65, spe: 65 },
        abilities: [
            { type: "Habilidad 1", id: "OVERGROW" },
            { type: "Habilidad 2", id: "HARVEST" },
            { type: "Oculta", id: "ROUGHSKIN" }
        ],
        flavor: "Al evolucionar, su energía dracónica aumenta. Las escamas de su lomo se vuelven tan duras como la piedra, protegiéndolo de depredadores.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "1", name: "Pitalant", method: "Lv. 16" },
            evos: [{ id: "3", name: "Pitaraka", method: "Lv. 36" }]
        },
        moves: {
            level: [
                { lv: "1", id: "TACKLE" },
                { lv: "1", id: "GROWL" },
                { lv: "1", id: "LEAFAGE" },
                { lv: "1", id: "DRAGONBREATH" },
                { lv: "17", id: "DRAGONCLAW" },
                { lv: "21", id: "GIGADRAIN" },
                { lv: "22", id: "MAGICALLEAF" },
                { lv: "22", id: "BITE" },
                { lv: "28", id: "SLAM" },
                { lv: "30", id: "BODYSLAM" },
                { lv: "31", id: "EARTHQUAKE" },
                { lv: "32", id: "ZENHEADBUTT" },
                { lv: "33", id: "SYNTHESIS" },
                { lv: "35", id: "MEGADRAIN" },
                { lv: "38", id: "DRAGONPULSE" },
                { lv: "41", id: "GIGADRAIN" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "BLOCK" }, { id: "BULLDOZE" }, { id: "BULLETSEED" }, 
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CUT" }, { id: "DOUBLETEAM" }, 
                { id: "EARTHPOWER" }, { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, 
                { id: "FACADE" }, { id: "FLASH" }, { id: "FRENZYPLANT" }, { id: "FRUSTRATION" }, 
                { id: "GIGADRAIN" }, { id: "GIGAIMPACT" }, { id: "GRASSKNOT" }, { id: "GRASSPLEDGE" }, 
                { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONHEAD" }, 
                { id: "IRONTAIL" }, { id: "LIGHTSCREEN" }, { id: "MIMIC" }, { id: "MUDSLAP" }, 
                { id: "NATURALGIFT" }, { id: "NATUREPOWER" }, { id: "OUTRAGE" }, { id: "PROTECT" }, 
                { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROAR" }, 
                { id: "ROCKCLIMB" }, { id: "ROCKPOLISH" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, 
                { id: "ROCKTOMB" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SANDSTORM" }, 
                { id: "SECRETPOWER" }, { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
                { id: "SOLARBEAM" }, { id: "STEALTHROCK" }, { id: "STOMPINGTANTRUM" }, { id: "STONEEDGE" }, 
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SUPERPOWER" }, 
                { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "SYNTHESIS" }, { id: "WORKUP" }, 
                { id: "WORRYSEED" }, { id: "TAKEDOWN" }, { id: "SCARYFACE" }, { id: "TRAILBLAZE" }, 
                { id: "MAGICALLEAF" }, { id: "MUDSHOT" }, { id: "ZENHEADBUTT" }, { id: "BODYSLAM" }, 
                { id: "ROCKBLAST" }, { id: "BODYPRESS" }, { id: "IRONDEFENSE" }, { id: "CRUNCH" }, 
                { id: "HYPERVOICE" }, { id: "HEAVYSLAM" }, { id: "AMNESIA" }, { id: "GRASSYTERRAIN" }, 
                { id: "LEAFSTORM" }, { id: "SANDTOMB" }, { id: "SMACKDOWN" }, { id: "HIGHHORSEPOWER" }, 
                { id: "GRASSYGLIDE" }, { id: "DOUBLEEDGE" }, { id: "SCORCHINGSANDS" }, { id: "CURSE" }, 
                { id: "HARDPRESS" }
            ],
            egg: []
        }
    },
  {
        id: "3",
        num: 3,
        name: "Pitaraka",
        category: "Fruto Elefante",
        types: ["Planta", "Dragón"],
        stats: { hp: 105, att: 115, def: 95, spA: 55, spD: 85, spe: 75 },
        abilities: [
            { type: "Habilidad 1", id: "OVERGROW" },
            { type: "Habilidad 2", id: "HARVEST" },
            { type: "Oculta", id: "ROUGHSKIN" }
        ],
        flavor: "Vive en densas selvas, protegiendo las fuentes de agua de las mismas para que los Pokémon más débiles puedan hidratarse. Sus extremidades delanteras parecen alas, pero las usa para golpear con una fuerza devastadora.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "2", name: "Pitaderm", method: "Lv. 36" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "DRAGONDANCE" },
                { lv: "1", id: "TROPKICK" },
                { lv: "1", id: "WOODHAMMER" },
                { lv: "1", id: "DRAGONCLAW" },
                { lv: "1", id: "OUTRAGE" },
                { lv: "17", id: "DRAGONCLAW" },
                { lv: "21", id: "GIGADRAIN" },
                { lv: "22", id: "MAGICALLEAF" },
                { lv: "22", id: "BITE" },
                { lv: "28", id: "SLAM" },
                { lv: "30", id: "BODYSLAM" },
                { lv: "32", id: "ZENHEADBUTT" },
                { lv: "33", id: "SYNTHESIS" },
                { lv: "35", id: "MEGADRAIN" },
                { lv: "37", id: "EARTHQUAKE" },
                { lv: "38", id: "DRAGONPULSE" },
                { lv: "41", id: "GIGADRAIN" },
                { lv: "42", id: "HORNLEECH" },
                { lv: "48", id: "DRAGONRUSH" },
                { lv: "55", id: "SOLARBLADE" },
                { lv: "62", id: "LEAFSTORM" },
                { lv: "65", id: "HEADLONGRUSH" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "BLOCK" }, { id: "BULLDOZE" }, { id: "BULLETSEED" }, 
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CUT" }, { id: "DOUBLETEAM" }, 
                { id: "EARTHPOWER" }, { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, 
                { id: "FACADE" }, { id: "FLASH" }, { id: "FRENZYPLANT" }, { id: "FRUSTRATION" }, 
                { id: "GIGADRAIN" }, { id: "GIGAIMPACT" }, { id: "GRASSKNOT" }, { id: "GRASSPLEDGE" }, 
                { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONHEAD" }, 
                { id: "IRONTAIL" }, { id: "LIGHTSCREEN" }, { id: "MIMIC" }, { id: "MUDSLAP" }, 
                { id: "NATURALGIFT" }, { id: "NATUREPOWER" }, { id: "OUTRAGE" }, { id: "PROTECT" }, 
                { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROAR" }, 
                { id: "ROCKCLIMB" }, { id: "ROCKPOLISH" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, 
                { id: "ROCKTOMB" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SANDSTORM" }, 
                { id: "SECRETPOWER" }, { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
                { id: "SOLARBEAM" }, { id: "STEALTHROCK" }, { id: "STOMPINGTANTRUM" }, { id: "STONEEDGE" }, 
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SUPERPOWER" }, 
                { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "SYNTHESIS" }, { id: "WORKUP" }, 
                { id: "WORRYSEED" }, { id: "TAKEDOWN" }, { id: "SCARYFACE" }, { id: "TRAILBLAZE" }, 
                { id: "MAGICALLEAF" }, { id: "MUDSHOT" }, { id: "ZENHEADBUTT" }, { id: "BODYSLAM" }, 
                { id: "ROCKBLAST" }, { id: "BODYPRESS" }, { id: "IRONDEFENSE" }, { id: "CRUNCH" }, 
                { id: "HYPERVOICE" }, { id: "HEAVYSLAM" }, { id: "AMNESIA" }, { id: "GRASSYTERRAIN" }, 
                { id: "LEAFSTORM" }, { id: "SANDTOMB" }, { id: "SMACKDOWN" }, { id: "HIGHHORSEPOWER" }, 
                { id: "GRASSYGLIDE" }, { id: "DOUBLEEDGE" }, { id: "SCORCHINGSANDS" }, { id: "CURSE" }, 
                { id: "HARDPRESS" }
            ],
            egg: []
        }
    },
    {
        id: "1-comida",
        num: 1,
        name: "Pitalant",
        category: "Fruto Trompa",
        types: ["Planta", "Gourmet"],
        stats: { hp: 70, att: 65, def: 60, spA: 25, spD: 45, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "OVERGROW" },
            { type: "Habilidad 2", id: "HARVEST" },
            { type: "Oculta", id: "ROUGHSKIN" }
        ],
        flavor: "Su piel es rica en vitaminas y está cubierta de pequeñas protuberancias que imitan a la pitaya. Aunque es lento, su embestida es sorprendentemente poderosa.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [{ id: "2", name: "Pitaderm", method: "Lv. 16" }]
        },
        moves: {
            level: [
                { lv: "1", id: "TACKLE" }, { lv: "1", id: "GROWL" }, { lv: "6", id: "LEAFAGE" },
                { lv: "7", id: "ABSORB" }, { lv: "12", id: "DRAGONBREATH" }, { lv: "15", id: "RAZORLEAF" },
                { lv: "18", id: "STOMP" }, { lv: "21", id: "MEGADRAIN" }, { lv: "23", id: "BITE" },
                { lv: "24", id: "BODYSLAM" }, { lv: "28", id: "GIGADRAIN" }, { lv: "28", id: "SLAM" },
                { lv: "30", id: "EARTHQUAKE" }, { lv: "32", id: "ZENHEADBUTT" }, { lv: "33", id: "SYNTHESIS" },
                { lv: "38", id: "DRAGONPULSE" }, { lv: "41", id: "GIGADRAIN" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "BLOCK" }, { id: "BULLDOZE" }, { id: "BULLETSEED" }, 
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CUT" }, { id: "DOUBLETEAM" }, 
                { id: "EARTHPOWER" }, { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, 
                { id: "FACADE" }, { id: "FLASH" }, { id: "FRENZYPLANT" }, { id: "FRUSTRATION" }, 
                { id: "GIGADRAIN" }, { id: "GIGAIMPACT" }, { id: "GRASSKNOT" }, { id: "GRASSPLEDGE" }, 
                { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONHEAD" }, 
                { id: "IRONTAIL" }, { id: "LIGHTSCREEN" }, { id: "MIMIC" }, { id: "MUDSLAP" }, 
                { id: "NATURALGIFT" }, { id: "NATUREPOWER" }, { id: "OUTRAGE" }, { id: "PROTECT" }, 
                { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROAR" }, 
                { id: "ROCKCLIMB" }, { id: "ROCKPOLISH" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, 
                { id: "ROCKTOMB" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SANDSTORM" }, 
                { id: "SECRETPOWER" }, { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
                { id: "SOLARBEAM" }, { id: "STEALTHROCK" }, { id: "STOMPINGTANTRUM" }, { id: "STONEEDGE" }, 
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SUPERPOWER" }, 
                { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "SYNTHESIS" }, { id: "WORKUP" }, 
                { id: "WORRYSEED" }, { id: "TAKEDOWN" }, { id: "SCARYFACE" }, { id: "TRAILBLAZE" }, 
                { id: "MAGICALLEAF" }, { id: "MUDSHOT" }, { id: "ZENHEADBUTT" }, { id: "BODYSLAM" }, 
                { id: "ROCKBLAST" }, { id: "BODYPRESS" }, { id: "IRONDEFENSE" }, { id: "CRUNCH" }, 
                { id: "HYPERVOICE" }, { id: "HEAVYSLAM" }, { id: "AMNESIA" }, { id: "GRASSYTERRAIN" }, 
                { id: "LEAFSTORM" }, { id: "SANDTOMB" }, { id: "SMACKDOWN" }, { id: "HIGHHORSEPOWER" }, 
                { id: "GRASSYGLIDE" }, { id: "DOUBLEEDGE" }, { id: "SCORCHINGSANDS" }, { id: "CURSE" }, 
                { id: "HARDPRESS" }
            ],
            egg: []
        }
    },
    {
        id: "2-comida",
        num: 2,
        name: "Pitaderm",
        category: "Fruto Elefante",
        types: ["Gourmet", "Dragón"],
        stats: { hp: 85, att: 85, def: 75, spA: 40, spD: 65, spe: 65 },
        abilities: [
            { type: "Habilidad 1", id: "OVERGROW" },
            { type: "Habilidad 2", id: "HARVEST" },
            { type: "Oculta", id: "ROUGHSKIN" }
        ],
        flavor: "Al evolucionar, su energía dracónica aumenta. Las escamas de su lomo se vuelven tan duras como la piedra, protegiéndolo de depredadores.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "1", name: "Pitalant", method: "Lv. 16" },
            evos: [{ id: "3", name: "Pitaraka", method: "Lv. 36" }]
        },
        moves: {
            level: [
                { lv: "1", id: "TACKLE" }, { lv: "1", id: "GROWL" }, { lv: "1", id: "LEAFAGE" },
                { lv: "1", id: "DRAGONBREATH" }, { lv: "17", id: "DRAGONCLAW" }, { lv: "21", id: "GIGADRAIN" },
                { lv: "22", id: "MAGICALLEAF" }, { lv: "22", id: "BITE" }, { lv: "28", id: "SLAM" },
                { lv: "30", id: "BODYSLAM" }, { lv: "31", id: "EARTHQUAKE" }, { lv: "32", id: "ZENHEADBUTT" },
                { lv: "33", id: "SYNTHESIS" }, { lv: "35", id: "MEGADRAIN" }, { lv: "38", id: "DRAGONPULSE" },
                { lv: "41", id: "GIGADRAIN" }
            ],
            tutor: [
                /* Mismos que Pitalant */
                { id: "ATTRACT" }, { id: "BLOCK" }, { id: "BULLDOZE" }, { id: "BULLETSEED" }, 
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CUT" }, { id: "DOUBLETEAM" }, 
                { id: "EARTHPOWER" }, { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, 
                { id: "FACADE" }, { id: "FLASH" }, { id: "FRENZYPLANT" }, { id: "FRUSTRATION" }, 
                { id: "GIGADRAIN" }, { id: "GIGAIMPACT" }, { id: "GRASSKNOT" }, { id: "GRASSPLEDGE" }, 
                { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONHEAD" }, 
                { id: "IRONTAIL" }, { id: "LIGHTSCREEN" }, { id: "MIMIC" }, { id: "MUDSLAP" }, 
                { id: "NATURALGIFT" }, { id: "NATUREPOWER" }, { id: "OUTRAGE" }, { id: "PROTECT" }, 
                { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROAR" }, 
                { id: "ROCKCLIMB" }, { id: "ROCKPOLISH" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, 
                { id: "ROCKTOMB" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SANDSTORM" }, 
                { id: "SECRETPOWER" }, { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
                { id: "SOLARBEAM" }, { id: "STEALTHROCK" }, { id: "STOMPINGTANTRUM" }, { id: "STONEEDGE" }, 
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SUPERPOWER" }, 
                { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "SYNTHESIS" }, { id: "WORKUP" }, 
                { id: "WORRYSEED" }, { id: "TAKEDOWN" }, { id: "SCARYFACE" }, { id: "TRAILBLAZE" }, 
                { id: "MAGICALLEAF" }, { id: "MUDSHOT" }, { id: "ZENHEADBUTT" }, { id: "BODYSLAM" }, 
                { id: "ROCKBLAST" }, { id: "BODYPRESS" }, { id: "IRONDEFENSE" }, { id: "CRUNCH" }, 
                { id: "HYPERVOICE" }, { id: "HEAVYSLAM" }, { id: "AMNESIA" }, { id: "GRASSYTERRAIN" }, 
                { id: "LEAFSTORM" }, { id: "SANDTOMB" }, { id: "SMACKDOWN" }, { id: "HIGHHORSEPOWER" }, 
                { id: "GRASSYGLIDE" }, { id: "DOUBLEEDGE" }, { id: "SCORCHINGSANDS" }, { id: "CURSE" }, 
                { id: "HARDPRESS" }
            ],
            egg: []
        }
    },
    {
        id: "3-comida",
        num: 3,
        name: "Pitaraka",
        category: "Fruto Elefante",
        types: ["Gourmet", "Dragón"],
        stats: { hp: 105, att: 115, def: 95, spA: 55, spD: 85, spe: 75 },
        abilities: [
            { type: "Habilidad 1", id: "OVERGROW" },
            { type: "Habilidad 2", id: "HARVEST" },
            { type: "Oculta", id: "ROUGHSKIN" }
        ],
        flavor: "Vive en densas selvas, protegiendo las fuentes de agua de las mismas para que los Pokémon más débiles puedan hidratarse. Sus extremidades delanteras parecen alas, pero las usa para golpear con una fuerza devastadora.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "2", name: "Pitaderm", method: "Lv. 36" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "DRAGONDANCE" }, { lv: "1", id: "TROPKICK" }, { lv: "1", id: "WOODHAMMER" },
                { lv: "1", id: "DRAGONCLAW" }, { lv: "1", id: "OUTRAGE" }, { lv: "17", id: "DRAGONCLAW" },
                { lv: "21", id: "GIGADRAIN" }, { lv: "22", id: "MAGICALLEAF" }, { lv: "22", id: "BITE" },
                { lv: "28", id: "SLAM" }, { lv: "30", id: "BODYSLAM" }, { lv: "32", id: "ZENHEADBUTT" },
                { lv: "33", id: "SYNTHESIS" }, { lv: "35", id: "MEGADRAIN" }, { lv: "37", id: "EARTHQUAKE" },
                { lv: "38", id: "DRAGONPULSE" }, { lv: "41", id: "GIGADRAIN" }, { lv: "42", id: "HORNLEECH" },
                { lv: "48", id: "DRAGONRUSH" }, { lv: "55", id: "SOLARBLADE" }, { lv: "62", id: "LEAFSTORM" },
                { lv: "65", id: "HEADLONGRUSH" }
            ],
            tutor: [
                /* Mismos que anteriores */
                { id: "ATTRACT" }, { id: "BLOCK" }, { id: "BULLDOZE" }, { id: "BULLETSEED" }, 
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CUT" }, { id: "DOUBLETEAM" }, 
                { id: "EARTHPOWER" }, { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, 
                { id: "FACADE" }, { id: "FLASH" }, { id: "FRENZYPLANT" }, { id: "FRUSTRATION" }, 
                { id: "GIGADRAIN" }, { id: "GIGAIMPACT" }, { id: "GRASSKNOT" }, { id: "GRASSPLEDGE" }, 
                { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONHEAD" }, 
                { id: "IRONTAIL" }, { id: "LIGHTSCREEN" }, { id: "MIMIC" }, { id: "MUDSLAP" }, 
                { id: "NATURALGIFT" }, { id: "NATUREPOWER" }, { id: "OUTRAGE" }, { id: "PROTECT" }, 
                { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROAR" }, 
                { id: "ROCKCLIMB" }, { id: "ROCKPOLISH" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, 
                { id: "ROCKTOMB" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SANDSTORM" }, 
                { id: "SECRETPOWER" }, { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
                { id: "SOLARBEAM" }, { id: "STEALTHROCK" }, { id: "STOMPINGTANTRUM" }, { id: "STONEEDGE" }, 
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SUPERPOWER" }, 
                { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "SYNTHESIS" }, { id: "WORKUP" }, 
                { id: "WORRYSEED" }, { id: "TAKEDOWN" }, { id: "SCARYFACE" }, { id: "TRAILBLAZE" }, 
                { id: "MAGICALLEAF" }, { id: "MUDSHOT" }, { id: "ZENHEADBUTT" }, { id: "BODYSLAM" }, 
                { id: "ROCKBLAST" }, { id: "BODYPRESS" }, { id: "IRONDEFENSE" }, { id: "CRUNCH" }, 
                { id: "HYPERVOICE" }, { id: "HEAVYSLAM" }, { id: "AMNESIA" }, { id: "GRASSYTERRAIN" }, 
                { id: "LEAFSTORM" }, { id: "SANDTOMB" }, { id: "SMACKDOWN" }, { id: "HIGHHORSEPOWER" }, 
                { id: "GRASSYGLIDE" }, { id: "DOUBLEEDGE" }, { id: "SCORCHINGSANDS" }, { id: "CURSE" }, 
                { id: "HARDPRESS" }
            ],
            egg: []
        }
    },
    {
        id: "4",
        num: 4,
        name: "Sisagua",
        category: "Melodía",
        types: ["Agua"],
        stats: { hp: 50, att: 44, def: 50, spA: 65, spD: 62, spe: 55 },
        abilities: [
            { type: "Habilidad 1", id: "TORRENT" },
            { type: "Habilidad 2", id: "DAZZLING" },
            { type: "Oculta", id: "LIQUIDVOICE" }
        ],
        flavor: "Su cola emite un sonido suave cuando el viento sopla a través de ella. Se dice que su música puede calmar hasta el mar más bravo.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [{ id: "5", name: "Serenaja", method: "Lv. 16" }]
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" },
                { lv: "1", id: "GROWL" },
                { lv: "6", id: "WATERGUN" },
                { lv: "9", id: "SING" },
                { lv: "12", id: "DISARMINGVOICE" },
                { lv: "15", id: "WATERPULSE" },
                { lv: "18", id: "CONFUSERAY" },
                { lv: "21", id: "AQUARING" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "CALMMIND" }, { id: "CHARM" }, { id: "CONFIDE" }, 
                { id: "DAZZLINGGLEAM" }, { id: "DISARMINGVOICE" }, { id: "DOUBLETEAM" }, { id: "DRAININGKISS" }, 
                { id: "ECHOEDVOICE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "HELPINGHAND" }, 
                { id: "HYPERVOICE" }, { id: "ICYWIND" }, { id: "LIGHTSCREEN" }, { id: "LIQUIDATION" }, 
                { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" }, { id: "ROUND" }, 
                { id: "SAFEGUARD" }, { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "SUBSTITUTE" }, 
                { id: "SURF" }, { id: "SWAGGER" }, { id: "WATERFALL" }, { id: "WATERPULSE" }
            ],
            egg: []
        }
    },
    {
        id: "5",
        num: 5,
        name: "Serenaja",
        category: "Coralino",
        types: ["Agua", "Hada"],
        stats: { hp: 65, att: 54, def: 65, spA: 85, spD: 82, spe: 74 },
        abilities: [
            { type: "Habilidad 1", id: "TORRENT" },
            { type: "Habilidad 2", id: "DAZZLING" },
            { type: "Oculta", id: "LIQUIDVOICE" }
        ],
        flavor: "Los corales de su cuerpo actúan como cámaras de resonancia. Su canto es tan perfecto que otros Pokémon se reúnen a su alrededor solo para escucharlo.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "4", name: "Sisagua", method: "Lv. 16" },
            evos: [{ id: "6", name: "Sinfobra", method: "Lv. 36" }]
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" },
                { lv: "1", id: "GROWL" },
                { lv: "1", id: "WATERGUN" },
                { lv: "1", id: "SING" },
                { lv: "17", id: "DRAININGKISS" },
                { lv: "22", id: "BUBBLEBEAM" },
                { lv: "28", id: "HYPERVOICE" },
                { lv: "32", id: "SAFEGUARD" },
                { lv: "38", id: "MOONBLAST" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "CALMMIND" }, { id: "CHARM" }, { id: "CONFIDE" }, 
                { id: "DAZZLINGGLEAM" }, { id: "DISARMINGVOICE" }, { id: "DOUBLETEAM" }, { id: "DRAININGKISS" }, 
                { id: "ECHOEDVOICE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "HELPINGHAND" }, 
                { id: "HYPERVOICE" }, { id: "ICEBEAM" }, { id: "ICYWIND" }, { id: "LIGHTSCREEN" }, 
                { id: "LIQUIDATION" }, { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" }, 
                { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
                { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" }, { id: "WATERFALL" }, 
                { id: "WATERPULSE" }
            ],
            egg: []
        }
    },
    {
        id: "6",
        num: 6,
        name: "Sinfobra",
        category: "Encantador",
        types: ["Agua", "Hada"],
        stats: { hp: 80, att: 60, def: 75, spA: 116, spD: 114, spe: 85 },
        abilities: [
            { type: "Habilidad 1", id: "TORRENT" },
            { type: "Habilidad 2", id: "DAZZLING" },
            { type: "Oculta", id: "LIQUIDVOICE" }
        ],
        flavor: "Su anatomía coralina funciona como un complejo instrumento de viento. Al erguirse, emite una frecuencia mística que apacigua el espíritu de quienes la rodean.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "5", name: "Serenaja", method: "Lv. 36" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "PERISHSONG" },
                { lv: "1", id: "SPARKLINGARIA" },
                { lv: "1", id: "MOONBLAST" },
                { lv: "1", id: "CALMMIND" },
                { lv: "1", id: "CAPTIVATE" },
                { lv: "42", id: "HYDROPUMP" },
                { lv: "48", id: "ALLURINGVOICE" },
                { lv: "55", id: "DAZZLINGGLEAM" },
                { lv: "62", id: "HYDROSTEAM" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "CALMMIND" }, { id: "CHARM" }, { id: "CONFIDE" }, 
                { id: "DAZZLINGGLEAM" }, { id: "DISARMINGVOICE" }, { id: "DOUBLETEAM" }, { id: "DRAININGKISS" }, 
                { id: "ECHOEDVOICE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "GIGADRAIN" }, 
                { id: "GIGAIMPACT" }, { id: "HELPINGHAND" }, { id: "HYPERBEAM" }, { id: "HYPERVOICE" }, 
                { id: "ICEBEAM" }, { id: "ICYWIND" }, { id: "LIGHTSCREEN" }, { id: "LIQUIDATION" }, 
                { id: "MISTYTERRAIN" }, { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" }, 
                { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SLEEPTALK" }, { id: "SNORE" }, 
                { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" }, { id: "TRIPLEAXEL" }, 
                { id: "WATERFALL" }, { id: "WATERPULSE" }, { id: "HYDROCANNON" }, { id: "WATERPLEDGE" }
            ],
            egg: []
        }
    },
];

