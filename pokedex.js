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
    {
        id: "7",
        num: 7,
        name: "Gasger",
        category: "Gas",
        types: ["Fuego"],
        stats: { hp: 45, att: 60, def: 45, spA: 63, spD: 50, spe: 47 },
        abilities: [
            { type: "Habilidad 1", id: "BLAZE" },
            { type: "Habilidad 2", id: "CORROSION" },
            { type: "Oculta", id: "TOXICDEBRIS" }
        ],
        flavor: "Almacena gases inflamables en su estómago. Cuando se siente amenazado, libera una pequeña nube de humo por su lomo para ocultarse y huir.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [{ id: "8", name: "Vaporaxt", method: "Lv. 16" }]
        },
        moves: {
            level: [
                { lv: "1", id: "SCRATCH" },
                { lv: "1", id: "LEER" },
                { lv: "6", id: "EMBER" },
                { lv: "9", id: "SMOG" },
                { lv: "12", id: "FURYSWIPES" },
                { lv: "15", id: "CLEARSMOG" },
                { lv: "18", id: "FLAMEWHEEL" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "CONFIDE" }, { id: "DOUBLETEAM" }, { id: "ENDURE" }, 
                { id: "FACADE" }, { id: "FIREPUNCH" }, { id: "FLAMETHROWER" }, { id: "FLAMECHARGE" }, 
                { id: "FLAREBLITZ" }, { id: "HEATWAVE" }, { id: "HELPINGHAND" }, { id: "OVERHEAT" }, 
                { id: "PROTECT" }, { id: "REST" }, { id: "ROUND" }, { id: "SLEEPTALK" }, 
                { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" }, 
                { id: "WILLOWISP" }, { id: "TOXIC" }, { id: "SLUDGEBOMB" }, { id: "VENOSHOCK" }
            ],
            egg: []
        }
    },
    {
        id: "8",
        num: 8,
        name: "Vaporaxt",
        category: "Mezcla",
        types: ["Fuego", "Veneno"],
        stats: { hp: 60, att: 80, def: 60, spA: 82, spD: 65, spe: 58 },
        abilities: [
            { type: "Habilidad 1", id: "BLAZE" },
            { type: "Habilidad 2", id: "CORROSION" },
            { type: "Oculta", id: "TOXICDEBRIS" }
        ],
        flavor: "Sus pulmones pueden filtrar cualquier sustancia. Experimenta mezclando gases en su interior para crear llamaradas de colores verdosos extremadamente tóxicas.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "7", name: "Gasger", method: "Lv. 16" },
            evos: [{ id: "9", name: "Hazmadger", method: "Lv. 36" }]
        },
        moves: {
            level: [
                { lv: "1", id: "SCRATCH" },
                { lv: "1", id: "LEER" },
                { lv: "1", id: "EMBER" },
                { lv: "1", id: "SMOG" },
                { lv: "17", id: "ACIDSPRAY" },
                { lv: "22", id: "FIRESPIN" },
                { lv: "28", id: "SLASH" },
                { lv: "32", id: "POISONJAB" },
                { lv: "38", id: "LAVAPLUME" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "CONFIDE" }, { id: "DOUBLETEAM" }, { id: "ENDURE" }, 
                { id: "FACADE" }, { id: "FIREPUNCH" }, { id: "FLAMETHROWER" }, { id: "FLAMECHARGE" }, 
                { id: "FLAREBLITZ" }, { id: "HEATWAVE" }, { id: "HELPINGHAND" }, { id: "OVERHEAT" }, 
                { id: "PROTECT" }, { id: "REST" }, { id: "ROUND" }, { id: "SLEEPTALK" }, 
                { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" }, 
                { id: "WILLOWISP" }, { id: "TOXIC" }, { id: "SLUDGEBOMB" }, { id: "VENOSHOCK" },
                { id: "SLUDGEWAVE" }, { id: "ACIDARMOR" }
            ],
            egg: []
        }
    },
    {
        id: "9",
        num: 9,
        name: "Hazmadger",
        category: "Químico",
        types: ["Fuego", "Veneno"],
        stats: { hp: 80, att: 105, def: 75, spA: 110, spD: 85, spe: 75 },
        abilities: [
            { type: "Habilidad 1", id: "BLAZE" },
            { type: "Habilidad 2", id: "CORROSION" },
            { type: "Oculta", id: "TOXICDEBRIS" }
        ],
        flavor: "Posee un sistema digestivo capaz de procesar cualquier veneno para convertirlo en combustible. El aire a su alrededor siempre huele a azufre y químicos quemados.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "8", name: "Vaporaxt", method: "Lv. 36" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "BELCH" },
                { lv: "1", id: "FLAREBLITZ" },
                { lv: "1", id: "GUNKSHOT" },
                { lv: "1", id: "TOXICSPIKES" },
                { lv: "1", id: "SMOKESCREEN" },
                { lv: "42", id: "SLUDGEBOMB" },
                { lv: "48", id: "OVERHEAT" },
                { lv: "55", id: "VENOMDRENCH" },
                { lv: "62", id: "BURNUP" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "CONFIDE" }, { id: "DOUBLETEAM" }, { id: "ENDURE" }, 
                { id: "FACADE" }, { id: "FIREPUNCH" }, { id: "FLAMETHROWER" }, { id: "FLAMECHARGE" }, 
                { id: "FLAREBLITZ" }, { id: "HEATWAVE" }, { id: "HELPINGHAND" }, { id: "OVERHEAT" }, 
                { id: "PROTECT" }, { id: "REST" }, { id: "ROUND" }, { id: "SLEEPTALK" }, 
                { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" }, 
                { id: "WILLOWISP" }, { id: "TOXIC" }, { id: "SLUDGEBOMB" }, { id: "VENOSHOCK" },
                { id: "SLUDGEWAVE" }, { id: "ACIDARMOR" }, { id: "GIGAIMPACT" }, { id: "HYPERBEAM" },
                { id: "GUNKSHOT" }, { id: "BLASTBURN" }, { id: "FIREPLEDGE" }, { id: "POISONJAB" }
            ],
            egg: []
        }
    },
    {
        id: "10",
        num: 10,
        name: "Lapras",
        category: "Transporte",
        types: ["Agua", "Hielo"],
        stats: { hp: 130, att: 85, def: 80, spA: 60, spD: 85, spe: 95 },
        abilities: [
            { type: "Habilidad 1", id: "WATERABSORB" },
            { type: "Habilidad 2", id: "SHELLARMOR" },
            { type: "Oculta", id: "HYDRATION" }
        ],
        flavor: "Está en peligro de extinción. Dicen que, al anochecer, se pone a cantar quejicoso mientras busca a los miembros de su especie que puedan quedar.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: null,
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "GROWL" }, { lv: "1", id: "WATERGUN" },
                { lv: "5", id: "SING" }, { lv: "10", id: "MIST" },
                { lv: "15", id: "LIFEDEW" }, { lv: "20", id: "ICESHARD" },
                { lv: "25", id: "CONFUSERAY" }, { lv: "30", id: "WATERPULSE" },
                { lv: "35", id: "BRINE" }, { lv: "40", id: "BODYSLAM" },
                { lv: "45", id: "ICEBEAM" }, { lv: "50", id: "RAINDANCE" },
                { lv: "55", id: "HYDROPUMP" }, { lv: "60", id: "PERISHSONG" },
                { lv: "65", id: "SHEERCOLD" }
            ],
            tutor: [
                { id: "ANCIENTPOWER" }, { id: "AQUATAIL" }, { id: "ATTRACT" }, { id: "AVALANCHE" },
                { id: "BLIZZARD" }, { id: "BLOCK" }, { id: "BODYPRESS" }, { id: "BODYSLAM" },
                { id: "BRINE" }, { id: "BULLDOZE" }, { id: "CAPTIVATE" }, { id: "CHARM" },
                { id: "CONFIDE" }, { id: "DIVE" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" },
                { id: "DRAGONDANCE" }, { id: "DRAGONPULSE" }, { id: "DREAMEATER" }, { id: "DRILLRUN" },
                { id: "ECHOEDVOICE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "FROSTBREATH" },
                { id: "GIGAIMPACT" }, { id: "HAIL" }, { id: "HEADBUTT" }, { id: "HEALBELL" },
                { id: "HELPINGHAND" }, { id: "HYDROPUMP" }, { id: "HYPERBEAM" }, { id: "HYPERVOICE" },
                { id: "ICEBEAM" }, { id: "ICYWIND" }, { id: "IRONHEAD" }, { id: "IRONTAIL" },
                { id: "LIQUIDATION" }, { id: "MEGAHORN" }, { id: "OUTRAGE" }, { id: "PROTECT" },
                { id: "PSYCHIC" }, { id: "RAINDANCE" }, { id: "REST" }, { id: "ROAR" },
                { id: "ROCKSMASH" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SHOCKWAVE" },
                { id: "SIGNALBEAM" }, { id: "SLEEPTALK" }, { id: "SMARTSTRIKE" }, { id: "SNORE" },
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" },
                { id: "THUNDER" }, { id: "THUNDERBOLT" }, { id: "WATERFALL" }, { id: "WATERPULSE" },
                { id: "WEATHERBALL" }, { id: "WHIRLPOOL" }, { id: "ZENHEADBUTT" }, { id: "TAKEDOWN" },
                { id: "CHILLINGWATER" }, { id: "SNOWSCAPE" }, { id: "REFLECT" }, { id: "EARTHQUAKE" },
                { id: "HAZE" }, { id: "ICICLESPEAR" }, { id: "MUDDYWATER" }, { id: "CURSE" },
                { id: "DRAGONCHEER" }, { id: "ALLURINGVOICE" }, { id: "PSYCHICNOISE" }, { id: "ELECTROSHOT" }
            ],
            egg: [
                { id: "ANCIENTPOWER" }, { id: "CURSE" }, { id: "DRAGONDANCE" }, { id: "FISSURE" },
                { id: "FREEZEDRY" }, { id: "FUTURESIGHT" }, { id: "HORNDRILL" }, { id: "SPARKLINGARIA" },
                { id: "TICKLE" }, { id: "WHIRLPOOL" }
            ]
        }
    },
    {
        id: "10-comida",
        num: 10,
        name: "Lapras",
        category: "Dulce Surcador",
        types: ["Gourmet", "Hada"],
        stats: { hp: 130, att: 75, def: 80, spA: 70, spD: 95, spe: 85 },
        abilities: [
            { type: "Habilidad 1", id: "WATERVEIL" },
            { type: "Habilidad 2", id: "CUTECHARM" },
            { type: "Oculta", id: "HYDRATION" }
        ],
        flavor: "Se dice que su caparazón está hecho de un merengue tan resistente como la piedra. Atrae a los marineros con un aroma a vainilla antes de ayudarlos a cruzar mares de almíbar.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "GROWL" }, { lv: "1", id: "WATERGUN" },
                { lv: "4", id: "SING" }, { lv: "7", id: "MIST" }, { lv: "10", id: "LIFEDEW" },
                { lv: "14", id: "DISARMINGVOICE" }, { lv: "18", id: "CONFUSERAY" },
                { lv: "22", id: "HEALPULSE" }, { lv: "27", id: "DRAININGKISS" },
                { lv: "32", id: "BODYSLAM" }, { lv: "37", id: "MOONBLAST" },
                { lv: "43", id: "PERISHSONG" }, { lv: "47", id: "DAZZLINGGLEAM" }
            ],
            tutor: [
                { id: "ALLYSWITCH" }, { id: "ATTRACT" }, { id: "CALMMIND" }, { id: "CHARM" },
                { id: "CONFIDE" }, { id: "DAZZLINGGLEAM" }, { id: "DOUBLETEAM" }, { id: "DRAININGKISS" },
                { id: "DRAGONPULSE" }, { id: "ECHOEDVOICE" }, { id: "ENCORE" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FALSESWIPE" }, { id: "FLASH" }, { id: "GIGAIMPACT" },
                { id: "HEALBELL" }, { id: "HELPINGHAND" }, { id: "HYPERBEAM" }, { id: "HYPERVOICE" },
                { id: "ICEBEAM" }, { id: "ICYWIND" }, { id: "IRONDEFENSE" }, { id: "LIGHTSCREEN" },
                { id: "MAGICCOAT" }, { id: "MAGICALLEAF" }, { id: "MISTYTERRAIN" }, { id: "OUTRAGE" },
                { id: "PLAYROUGH" }, { id: "PROTECT" }, { id: "PSYCHIC" }, { id: "PSYCHICNOISE" },
                { id: "RAINDANCE" }, { id: "REFLECT" }, { id: "REST" }, { id: "SAFEGUARD" },
                { id: "SLEEPTALK" }, { id: "SMARTSTRIKE" }, { id: "STOMPINGTANTRUM" }, { id: "SUBSTITUTE" },
                { id: "SURF" }, { id: "SWAGGER" }, { id: "THUNDERBOLT" }, { id: "WATERPULSE" },
                { id: "ZENHEADBUTT" }
            ],
            egg: []
        }
    },
    {
        id: "11",
        num: 11,
        name: "Pichu",
        category: "Ratoncito",
        types: ["Eléctrico"],
        stats: { hp: 20, att: 40, def: 15, spA: 60, spD: 35, spe: 35 },
        abilities: [
            { type: "Habilidad 1", id: "STATIC" },
            { type: "Oculta", id: "LIGHTNINGROD" }
        ],
        flavor: "Sigue sin poder contener o retener electricidad. Cuando se asusta, descarga energía de forma accidental. Con todo, a medida que pasa el tiempo va mejorando.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: null,
            evos: [{ id: "12", name: "Pikachu", method: "Felicidad" }]
        },
        moves: {
            level: [
                { lv: "1", id: "THUNDERSHOCK" }, { lv: "1", id: "TAILWHIP" }, { lv: "4", id: "PLAYNICE" },
                { lv: "8", id: "SWEETKISS" }, { lv: "12", id: "NUZZLE" }, { lv: "16", id: "NASTYPLOT" },
                { lv: "20", id: "CHARM" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "BODYSLAM" }, { id: "CAPTIVATE" }, { id: "CHARGEBEAM" },
                { id: "CHARM" }, { id: "CONFIDE" }, { id: "COUNTER" }, { id: "COVET" },
                { id: "DEFENSECURL" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" }, { id: "ECHOEDVOICE" },
                { id: "ELECTRICTERRAIN" }, { id: "ELECTROWEB" }, { id: "ENCORE" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FLASH" }, { id: "FLING" }, { id: "FRUSTRATION" },
                { id: "GRASSKNOT" }, { id: "HEADBUTT" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" },
                { id: "IRONTAIL" }, { id: "LIGHTSCREEN" }, { id: "MAGNETRISE" }, { id: "MEGAKICK" },
                { id: "MEGAPUNCH" }, { id: "MIMIC" }, { id: "MUDSLAP" }, { id: "NASTYPLOT" },
                { id: "NATURALGIFT" }, { id: "PLAYROUGH" }, { id: "PROTECT" }, { id: "RAINDANCE" },
                { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" }, { id: "REVERSAL" },
                { id: "ROLLOUT" }, { id: "ROUND" }, { id: "SECRETPOWER" }, { id: "SEISMICTOSS" },
                { id: "SHOCKWAVE" }, { id: "SIGNALBEAM" }, { id: "SLEEPTALK" }, { id: "SNORE" },
                { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" }, { id: "SWIFT" },
                { id: "THUNDER" }, { id: "THUNDERBOLT" }, { id: "THUNDERPUNCH" }, { id: "THUNDERWAVE" },
                { id: "UPROAR" }, { id: "VOLTSWITCH" }, { id: "WILDCHARGE" }, { id: "TAKEDOWN" },
                { id: "DISARMINGVOICE" }, { id: "TRAILBLAZE" }, { id: "ELECTROBALL" }, { id: "CHARGE" }
            ],
            egg: [
                { id: "CHARGE" }, { id: "DISARMINGVOICE" }, { id: "ELECTRICTERRAIN" }, { id: "ENCORE" },
                { id: "FAKEOUT" }, { id: "FLAIL" }, { id: "PRESENT" }, { id: "REVERSAL" },
                { id: "THUNDERPUNCH" }, { id: "TICKLE" }, { id: "WISH" }
            ]
        }
    },
    {
        id: "11-jagara",
        num: 11,
        name: "Pichu",
        category: "Ratoncito",
        types: ["Planta"],
        stats: { hp: 20, att: 40, def: 15, spA: 60, spD: 35, spe: 35 },
        abilities: [
            { type: "Habilidad 1", id: "LEAFGUARD" },
            { type: "Habilidad 2", id: "NATURALCURE" },
            { type: "Oculta", id: "GRASSYSURGE" }
        ],
        flavor: "Sigue sin poder contener o retener electricidad. Cuando se asusta, descarga energía de forma accidental. Con todo, a medida que pasa el tiempo va mejorando.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [{ id: "12-jagara", name: "Pikachu", method: "Felicidad" }]
        },
        moves: {
            level: [
                { lv: "1", id: "TAILWHIP" }, { lv: "1", id: "GROWL" }, { lv: "4", id: "VINEWHIP" },
                { lv: "8", id: "SWEETSCENT" }, { lv: "12", id: "RAZORLEAF" }, { lv: "16", id: "QUICKATTACK" },
                { lv: "20", id: "CHARM" }, { lv: "24", id: "GIGADRAIN" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "CONFIDE" }, { id: "DOUBLETEAM" }, { id: "ECHOEDVOICE" },
                { id: "ENDURE" }, { id: "FACADE" }, { id: "GIGADRAIN" }, { id: "GRASSKNOT" },
                { id: "HELPINGHAND" }, { id: "HIDDENPOWER" }, { id: "LIGHTSCREEN" }, { id: "MAGICALLEAF" },
                { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" }, { id: "RECYCLE" },
                { id: "RETURN" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SLEEPTALK" },
                { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" },
                { id: "SWIFT" }, { id: "UPROAR" }, { id: "WORKUP" }
            ],
            egg: []
        }
    },
    {
        id: "12",
        num: 12,
        name: "Pikachu",
        category: "Ratón",
        types: ["Eléctrico"],
        stats: { hp: 35, att: 55, def: 40, spA: 90, spD: 50, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "STATIC" },
            { type: "Oculta", id: "LIGHTNINGROD" }
        ],
        flavor: "Tiene unas bolsas en las mejillas en las que almacena electricidad. Cuando la libera de golpe, la potencia de la descarga es igual a la de un rayo.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: { id: "11", name: "Pichu", method: "Felicidad" },
            evos: [{ id: "13", name: "Raichu", method: "Objeto: Piedra trueno" }]
        },
        moves: {
            level: [
                { lv: "1", id: "PLAYNICE" }, { lv: "1", id: "SWEETKISS" }, { lv: "1", id: "NUZZLE" },
                { lv: "1", id: "NASTYPLOT" }, { lv: "1", id: "CHARM" }, { lv: "1", id: "THUNDERSHOCK" },
                { lv: "1", id: "TAILWHIP" }, { lv: "1", id: "GROWL" }, { lv: "1", id: "QUICKATTACK" },
                { lv: "4", id: "THUNDERWAVE" }, { lv: "8", id: "DOUBLETEAM" }, { lv: "12", id: "ELECTROBALL" },
                { lv: "16", id: "FEINT" }, { lv: "20", id: "SPARK" }, { lv: "24", id: "AGILITY" },
                { lv: "28", id: "SLAM" }, { lv: "28", id: "IRONTAIL" }, { lv: "32", id: "DISCHARGE" },
                { lv: "36", id: "THUNDERBOLT" }, { lv: "40", id: "LIGHTSCREEN" }, { lv: "44", id: "THUNDER" }
            ],
            tutor: [
                { id: "AGILITY" }, { id: "ATTRACT" }, { id: "BODYSLAM" }, { id: "BRICKBREAK" },
                { id: "CAPTIVATE" }, { id: "CHARGEBEAM" }, { id: "CHARM" }, { id: "CONFIDE" },
                { id: "COUNTER" }, { id: "COVET" }, { id: "DEFENSECURL" }, { id: "DIG" },
                { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" }, { id: "DRAININGKISS" }, { id: "DYNAMICPUNCH" },
                { id: "ECHOEDVOICE" }, { id: "ELECTRICTERRAIN" }, { id: "ELECTROBALL" }, { id: "ELECTROWEB" },
                { id: "ENCORE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "FLASH" },
                { id: "FLING" }, { id: "FOCUSPUNCH" }, { id: "FRUSTRATION" }, { id: "GRASSKNOT" },
                { id: "HEADBUTT" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" }, { id: "IRONTAIL" },
                { id: "KNOCKOFF" }, { id: "LASERFOCUS" }, { id: "LIGHTSCREEN" }, { id: "MAGNETRISE" },
                { id: "MEGAKICK" }, { id: "MEGAPUNCH" }, { id: "MIMIC" }, { id: "MUDSLAP" },
                { id: "NASTYPLOT" }, { id: "NATURALGIFT" }, { id: "PAYDAY" }, { id: "PLAYROUGH" },
                { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REFLECT" }, { id: "REST" },
                { id: "RETURN" }, { id: "REVERSAL" }, { id: "RISINGVOLTAGE" }, { id: "ROCKSMASH" },
                { id: "ROLLOUT" }, { id: "ROUND" }, { id: "SECRETPOWER" }, { id: "SEISMICTOSS" },
                { id: "SHOCKWAVE" }, { id: "SIGNALBEAM" }, { id: "SLEEPTALK" }, { id: "SNORE" },
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" },
                { id: "SWIFT" }, { id: "THIEF" }, { id: "THUNDER" }, { id: "THUNDERBOLT" },
                { id: "THUNDERPUNCH" }, { id: "THUNDERWAVE" }, { id: "UPROAR" }, { id: "VOLTSWITCH" },
                { id: "VOLTTACKLE" }, { id: "WILDCHARGE" }, { id: "TAKEDOWN" }, { id: "FAKETEARS" },
                { id: "DISARMINGVOICE" }, { id: "TRAILBLAZE" }, { id: "EERIEIMPULSE" }, { id: "CHARGE" },
                { id: "ENDEAVOR" }, { id: "ALLURINGVOICE" }, { id: "UPPERHAND" }
            ],
            egg: []
        }
    },
    {
        id: "12-jagara",
        num: 12,
        name: "Pikachu",
        category: "Ratón",
        types: ["Planta"],
        stats: { hp: 35, att: 55, def: 40, spA: 90, spD: 50, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "LEAFGUARD" },
            { type: "Habilidad 2", id: "NATURALCURE" },
            { type: "Oculta", id: "GRASSYSURGE" }
        ],
        flavor: "Tiene unas bolsas en las mejillas en las que almacena electricidad. Cuando la libera de golpe, la potencia de la descarga es igual a la de un rayo.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "11-jagara", name: "Pichu", method: "Felicidad" },
            evos: [{ id: "13-jagara", name: "Raichu", method: "Movimiento: Rayo Solar" }]
        },
        moves: {
            level: [
                { lv: "1", id: "TAILWHIP" }, { lv: "1", id: "GROWL" }, { lv: "1", id: "VINEWHIP" },
                { lv: "4", id: "SWEETSCENT" }, { lv: "8", id: "RAZORLEAF" }, { lv: "12", id: "QUICKATTACK" },
                { lv: "16", id: "DOUBLETEAM" }, { lv: "20", id: "GIGADRAIN" }, { lv: "24", id: "SYNTHESIS" },
                { lv: "28", id: "SOLARBEAM" }, { lv: "32", id: "AGILITY" }, { lv: "36", id: "LEAFSTORM" },
                { lv: "40", id: "SOLARBLADE" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "BODYSLAM" }, { id: "BRICKBREAK" }, { id: "CALMMIND" },
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "DIG" }, { id: "DOUBLETEAM" },
                { id: "ECHOEDVOICE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, { id: "FACADE" },
                { id: "FLING" }, { id: "FOCUSBLAST" }, { id: "GIGADRAIN" }, { id: "GRASSKNOT" },
                { id: "GRASSYGLIDE" }, { id: "GRASSYTERRAIN" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" },
                { id: "IRONTAIL" }, { id: "KNOCKOFF" }, { id: "LEAFSTORM" }, { id: "LIGHTSCREEN" },
                { id: "MAGICALLEAF" }, { id: "NATURALGIFT" }, { id: "PROTECT" }, { id: "RAINDANCE" },
                { id: "REST" }, { id: "RECYCLE" }, { id: "RETURN" }, { id: "ROUND" },
                { id: "SAFEGUARD" }, { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" },
                { id: "SOLARBEAM" }, { id: "SOLARBLADE" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" },
                { id: "SWAGGER" }, { id: "SWIFT" }, { id: "SWORDSDANCE" }, { id: "UPROAR" }, { id: "WORKUP" }
            ],
            egg: []
        }
    },
    {
        id: "13",
        num: 13,
        name: "Raichu",
        category: "Ratón",
        types: ["Eléctrico"],
        stats: { hp: 60, att: 90, def: 55, spA: 110, spD: 90, spe: 80 },
        abilities: [
            { type: "Habilidad 1", id: "STATIC" },
            { type: "Oculta", id: "LIGHTNINGROD" }
        ],
        flavor: "Si acumula demasiada electricidad, se vuelve violento. Para evitarlo, suele descargar los excesos de energía, lo que lo mantiene calmado.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: { id: "12", name: "Pikachu", method: "Objeto: Piedra trueno" },
            evos: []
        },
        moves: {
            level: [
                { lv: "-1", id: "THUNDERPUNCH" }, { lv: "1", id: "PLAYNICE" }, { lv: "1", id: "SWEETKISS" },
                { lv: "1", id: "NUZZLE" }, { lv: "1", id: "NASTYPLOT" }, { lv: "1", id: "CHARM" },
                { lv: "1", id: "THUNDERWAVE" }, { lv: "1", id: "DOUBLETEAM" }, { lv: "1", id: "ELECTROBALL" },
                { lv: "1", id: "FEINT" }, { lv: "1", id: "SPARK" }, { lv: "1", id: "AGILITY" },
                { lv: "1", id: "SLAM" }, { lv: "1", id: "DISCHARGE" }, { lv: "1", id: "LIGHTSCREEN" },
                { lv: "1", id: "THUNDER" }, { lv: "1", id: "THUNDERSHOCK" }, { lv: "1", id: "TAILWHIP" },
                { lv: "1", id: "GROWL" }, { lv: "1", id: "QUICKATTACK" }, { lv: "1", id: "IRONTAIL" },
                { lv: "5", id: "THUNDERBOLT" }
            ],
            tutor: [
                { id: "AGILITY" }, { id: "ATTRACT" }, { id: "BODYSLAM" }, { id: "BRICKBREAK" },
                { id: "BRUTALSWING" }, { id: "CAPTIVATE" }, { id: "CHARGEBEAM" }, { id: "CHARM" },
                { id: "CONFIDE" }, { id: "COUNTER" }, { id: "COVET" }, { id: "DEFENSECURL" },
                { id: "DIG" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" }, { id: "DRAININGKISS" },
                { id: "DYNAMICPUNCH" }, { id: "ECHOEDVOICE" }, { id: "EERIEIMPULSE" }, { id: "ELECTRICTERRAIN" },
                { id: "ELECTROBALL" }, { id: "ELECTROWEB" }, { id: "ENCORE" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FLASH" }, { id: "FLING" }, { id: "FOCUSBLAST" },
                { id: "FOCUSPUNCH" }, { id: "FRUSTRATION" }, { id: "GIGAIMPACT" }, { id: "GRASSKNOT" },
                { id: "HEADBUTT" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" },
                { id: "IRONTAIL" }, { id: "KNOCKOFF" }, { id: "LASERFOCUS" }, { id: "LIGHTSCREEN" },
                { id: "MAGNETRISE" }, { id: "MEGAKICK" }, { id: "MEGAPUNCH" }, { id: "MIMIC" },
                { id: "MUDSLAP" }, { id: "NASTYPLOT" }, { id: "NATURALGIFT" }, { id: "PAYDAY" },
                { id: "PLAYROUGH" }, { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REFLECT" },
                { id: "REST" }, { id: "RETURN" }, { id: "REVERSAL" }, { id: "RISINGVOLTAGE" },
                { id: "ROCKSMASH" }, { id: "ROLLOUT" }, { id: "ROUND" }, { id: "SAFEGUARD" },
                { id: "SECRETPOWER" }, { id: "SEISMICTOSS" }, { id: "SHOCKWAVE" }, { id: "SIGNALBEAM" },
                { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "SPEEDSWAP" }, { id: "STRENGTH" },
                { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" }, { id: "SWIFT" },
                { id: "THIEF" }, { id: "THUNDER" }, { id: "THUNDERBOLT" }, { id: "THUNDERPUNCH" },
                { id: "THUNDERWAVE" }, { id: "UPROAR" }, { id: "VOLTSWITCH" }, { id: "WILDCHARGE" },
                { id: "TAKEDOWN" }, { id: "FAKETEARS" }, { id: "DISARMINGVOICE" }, { id: "TRAILBLAZE" },
                { id: "CHARGE" }, { id: "ENDEAVOR" }, { id: "ALLURINGVOICE" }, { id: "UPPERHAND" }
            ],
            egg: []
        }
    },
    {
        id: "13-jagara",
        num: 13,
        name: "Raichu",
        category: "Ratón",
        types: ["Planta"],
        stats: { hp: 60, att: 90, def: 55, spA: 110, spD: 90, spe: 80 },
        abilities: [
            { type: "Habilidad 1", id: "LEAFGUARD" },
            { type: "Habilidad 2", id: "NATURALCURE" },
            { type: "Oculta", id: "GRASSYSURGE" }
        ],
        flavor: "Si acumula demasiada electricidad, se vuelve violento. Para evitarlo, suele descargar los excesos de energía, lo que lo mantiene calmado.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "12-jagara", name: "Pikachu", method: "Movimiento: Rayo Solar" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "TAILWHIP" }, { lv: "1", id: "QUICKATTACK" }, { lv: "1", id: "GIGADRAIN" },
                { lv: "1", id: "SOLARBEAM" }, { lv: "1", id: "LEAFBLADE" }, { lv: "1", id: "NASTYPLOT" },
                { lv: "1", id: "ENCORE" }, { lv: "1", id: "PLAYROUGH" }, { lv: "40", id: "ENERGYBALL" },
                { lv: "45", id: "WOODHAMMER" }, { lv: "50", id: "TERRAINPULSE" },
                { lv: "55", id: "GRASSYTERRAIN" }, { lv: "60", id: "LEAFSTORM" }
            ],
            tutor: [
                { id: "ATTRACT" }, { id: "BODYSLAM" }, { id: "BRICKBREAK" }, { id: "CALMMIND" },
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "DIG" }, { id: "DOUBLETEAM" },
                { id: "ECHOEDVOICE" }, { id: "ENDURE" }, { id: "ENERGYBALL" }, { id: "FACADE" },
                { id: "FLING" }, { id: "FOCUSBLAST" }, { id: "FOCUSPUNCH" }, { id: "GIGADRAIN" },
                { id: "GRASSKNOT" }, { id: "GRASSYGLIDE" }, { id: "GRASSYTERRAIN" }, { id: "HELPINGHAND" },
                { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONTAIL" }, { id: "KNOCKOFF" },
                { id: "LEAFSTORM" }, { id: "LIGHTSCREEN" }, { id: "MAGICALLEAF" }, { id: "NATURALGIFT" },
                { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" }, { id: "RECYCLE" },
                { id: "RETURN" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SEEDBOMB" },
                { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "SOLARBEAM" }, { id: "SOLARBLADE" },
                { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" }, { id: "SWIFT" },
                { id: "SWORDSDANCE" }, { id: "THIEF" }, { id: "UPROAR" }, { id: "WORKUP" }
            ],
            egg: []
        }
    },
];

