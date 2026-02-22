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
    {
        id: "14",
        num: 14,
        name: "Secgyem",
        category: "Sectoide",
        types: ["Psíquico"],
        stats: { hp: 55, att: 45, def: 55, spA: 85, spD: 75, spe: 40 },
        abilities: [
            { type: "Habilidad 1", id: "TELEPATHY" },
            { type: "Habilidad 2", id: "SYNCHRONIZE" },
            { type: "Oculta", id: "ANALYTIC" }
        ],
        flavor: "Un espécimen alienígena que analiza las ondas cerebrales de su entorno. Se dice que llegó en una noche de tormenta eléctrica buscando fuentes de energía psíquica.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [{ id: "15", name: "Hexgyem", method: "Movimiento: Tipo Siniestro" }]
        },
        moves: {
            level: [
                { lv: "1", id: "SCRATCH" }, { lv: "1", id: "HARDEN" }, { lv: "4", id: "CONFUSION" },
                { lv: "8", id: "IMPRISON" }, { lv: "11", id: "PSYBEAM" }, { lv: "15", id: "AGILITY" },
                { lv: "18", id: "PSYCHUP" }, { lv: "22", id: "MIRRORCOAT" }, { lv: "25", id: "CALMMIND" },
                { lv: "29", id: "PSYCHIC" }, { lv: "32", id: "ALLYSWITCH" }, { lv: "36", id: "DARKPULSE" },
                { lv: "40", id: "RECOVER" }, { lv: "43", id: "GUARDSPLIT" }, { lv: "43", id: "POWERSPLIT" }
            ],
            tutor: [
                { id: "ALLYSWITCH" }, { id: "CALMMIND" }, { id: "CONFIDE" }, { id: "DOUBLETEAM" },
                { id: "DREAMEATER" }, { id: "ECHOEDVOICE" }, { id: "ENDURE" }, { id: "FACADE" },
                { id: "FLASH" }, { id: "FRUSTRATION" }, { id: "GRAVITY" }, { id: "HIDDENPOWER" },
                { id: "LIGHTSCREEN" }, { id: "MAGICCOAT" }, { id: "MAGICALLEAF" }, { id: "METRONOME" },
                { id: "MIMIC" }, { id: "PROTECT" }, { id: "PSYCHIC" }, { id: "PSYCHUP" },
                { id: "PSYSHOCK" }, { id: "RAINDANCE" }, { id: "REFLECT" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SECRETPOWER" },
                { id: "SHADOWBALL" }, { id: "SKILLSWAP" }, { id: "SLEEPTALK" }, { id: "SNORE" },
                { id: "SUBSTITUTE" }, { id: "SWAGGER" }, { id: "TELEKINESIS" }, { id: "THUNDERBOLT" },
                { id: "THUNDERWAVE" }, { id: "TOXIC" }, { id: "TRICK" }, { id: "TRICKROOM" },
                { id: "ZENHEADBUTT" }
            ],
            egg: []
        }
    },
    {
        id: "15",
        num: 15,
        name: "Hexgyem",
        category: "Mentalista",
        types: ["Psíquico", "Fantasma"],
        stats: { hp: 75, att: 60, def: 75, spA: 125, spD: 95, spe: 55 },
        abilities: [
            { type: "Habilidad 1", id: "TELEPATHY" },
            { type: "Habilidad 2", id: "SYNCHRONIZE" },
            { type: "Oculta", id: "ANALYTIC" }
        ],
        flavor: "Al evolucionar, su cerebro se expande para procesar el miedo y la envidia ajena. Utiliza estas emociones negativas para potenciar sus ataques de energía oscura.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "14", name: "Secgyem", method: "Movimiento: Tipo Siniestro" },
            evos: []
        },
        moves: {
            level: [
                { lv: "0", id: "SHADOWBALL" }, { lv: "1", id: "SHADOWBALL" }, { lv: "1", id: "DARKPULSE" },
                { lv: "1", id: "SCRATCH" }, { lv: "1", id: "HARDEN" }, { lv: "1", id: "CONFUSION" },
                { lv: "1", id: "IMPRISON" }, { lv: "4", id: "CONFUSION" }, { lv: "8", id: "IMPRISON" },
                { lv: "11", id: "PSYBEAM" }, { lv: "15", id: "AGILITY" }, { lv: "18", id: "PSYCHUP" },
                { lv: "22", id: "MIRRORCOAT" }, { lv: "25", id: "CALMMIND" }, { lv: "29", id: "PSYCHIC" },
                { lv: "32", id: "ALLYSWITCH" }, { lv: "36", id: "DARKPULSE" }, { lv: "42", id: "RECOVER" },
                { lv: "48", id: "NASTYPLOT" }, { lv: "54", id: "HYPERBEAM" }
            ],
            tutor: [
                { id: "ALLYSWITCH" }, { id: "CALMMIND" }, { id: "CONFIDE" }, { id: "DARKPULSE" },
                { id: "DOUBLETEAM" }, { id: "DREAMEATER" }, { id: "ECHOEDVOICE" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FLASH" }, { id: "FRUSTRATION" }, { id: "GIGAIMPACT" },
                { id: "GRAVITY" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "LIGHTSCREEN" },
                { id: "MAGICCOAT" }, { id: "MAGICALLEAF" }, { id: "METRONOME" }, { id: "MIMIC" },
                { id: "NASTYPLOT" }, { id: "PROTECT" }, { id: "PSYCHIC" }, { id: "PSYCHUP" },
                { id: "PSYSHOCK" }, { id: "RAINDANCE" }, { id: "REFLECT" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SECRETPOWER" },
                { id: "SHADOWBALL" }, { id: "SKILLSWAP" }, { id: "SLEEPTALK" }, { id: "SNORE" },
                { id: "SUBSTITUTE" }, { id: "SWAGGER" }, { id: "TELEKINESIS" }, { id: "THUNDERBOLT" },
                { id: "THUNDERWAVE" }, { id: "TOXIC" }, { id: "TRICK" }, { id: "TRICKROOM" },
                { id: "ZENHEADBUTT" }
            ],
            egg: []
        }
    },
    {
        id: "16",
        num: 16,
        name: "Regigold",
        category: "Dorado",
        types: ["Acero"],
        stats: { hp: 80, att: 100, def: 200, spA: 50, spD: 100, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "CLEARBODY" },
            { type: "Oculta", id: "STURDY" }
        ],
        flavor: "Un Pokémon creado a partir de oro de una pureza imposible de encontrar en la naturaleza. Su cuerpo es tan pesado que deja huellas profundas incluso en roca sólida.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "METALCLAW" }, { lv: "1", id: "COSMICPOWER" }, { lv: "1", id: "HARDEN" },
                { lv: "6", id: "CURSE" }, { lv: "12", id: "ANCIENTPOWER" }, { lv: "18", id: "IRONHEAD" },
                { lv: "24", id: "IRONDEFENSE" }, { lv: "30", id: "HEAVYSLAM" }, { lv: "36", id: "AMNESIA" },
                { lv: "42", id: "FLASHCANNON" }, { lv: "48", id: "LOCKON" }, { lv: "54", id: "ZAPCANNON" },
                { lv: "60", id: "HYPERBEAM" }
            ],
            tutor: [
                { id: "AMNESIA" }, { id: "ATTRACT" }, { id: "BODYPRESS" }, { id: "BODYSLAM" },
                { id: "BULKUP" }, { id: "CONFIDE" }, { id: "CURSE" }, { id: "DOUBLETEAM" },
                { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "EXPLOSION" }, { id: "FACADE" },
                { id: "FLASHCANNON" }, { id: "FOCUSBLAST" }, { id: "FRUSTRATION" }, { id: "GIGAIMPACT" },
                { id: "GYROBALL" }, { id: "HARDPRESS" }, { id: "HEAVYSLAM" }, { id: "HIDDENPOWER" },
                { id: "HYPERBEAM" }, { id: "IRONDEFENSE" }, { id: "IRONHEAD" }, { id: "METALCLAW" },
                { id: "PROTECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROCKPOLISH" },
                { id: "ROCKSLIDE" }, { id: "ROUND" }, { id: "SLEEPTALK" }, { id: "SNORE" },
                { id: "STEALTHROCK" }, { id: "STEELROLLER" }, { id: "SUBSTITUTE" }, { id: "SWAGGER" },
                { id: "TERABLAST" }, { id: "THUNDERBOLT" }, { id: "TOXIC" }
            ],
            egg: []
        }
    },
    {
        id: "17",
        num: 17,
        name: "Regijewel",
        category: "Joya",
        types: ["Hada"],
        stats: { hp: 80, att: 50, def: 100, spA: 100, spD: 200, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "CLEARBODY" },
            { type: "Oculta", id: "FILTER" }
        ],
        flavor: "Su cuerpo está compuesto por cristales preciosos formados bajo presiones extremas. Se dice que su brillo puede cegar a quien intente pulir su superficie.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "CHARGEBEAM" }, { lv: "1", id: "COSMICPOWER" }, { lv: "1", id: "FAIRYWIND" },
                { lv: "6", id: "AMNESIA" }, { lv: "12", id: "ANCIENTPOWER" }, { lv: "18", id: "DAZZLINGGLEAM" },
                { lv: "24", id: "SAFEGUARD" }, { lv: "30", id: "POWERGEM" }, { lv: "36", id: "IRONDEFENSE" },
                { lv: "42", id: "MOONBLAST" }, { lv: "48", id: "LOCKON" }, { lv: "54", id: "ZAPCANNON" },
                { lv: "60", id: "HYPERBEAM" }
            ],
            tutor: [
                { id: "ALLYSWITCH" }, { id: "AMNESIA" }, { id: "ATTRACT" }, { id: "CALMMIND" },
                { id: "CONFIDE" }, { id: "COSMICPOWER" }, { id: "DAZZLINGGLEAM" }, { id: "DOUBLETEAM" },
                { id: "ENDURE" }, { id: "FACADE" }, { id: "FLASH" }, { id: "FRUSTRATION" },
                { id: "GIGAIMPACT" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" },
                { id: "LIGHTSCREEN" }, { id: "MAGICCOAT" }, { id: "METRONOME" }, { id: "MISTYTERRAIN" },
                { id: "PROTECT" }, { id: "PSYCHUP" }, { id: "REFLECT" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SLEEPTALK" },
                { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SWAGGER" }, { id: "SWIFT" },
                { id: "TERABLAST" }, { id: "THUNDERBOLT" }, { id: "TOXIC" }
            ],
            egg: []
        }
    },
    {
        id: "18",
        num: 18,
        name: "Regiturm",
        category: "Cúrcuma",
        types: ["Planta"],
        stats: { hp: 80, att: 100, def: 100, spA: 100, spD: 100, spe: 100 },
        abilities: [
            { type: "Habilidad 1", id: "CLEARBODY" },
            { type: "Oculta", id: "REGENERATOR" }
        ],
        flavor: "Se cree que fue esculpido a partir de raíces milenarias. Desprende un aroma intenso que tiene propiedades curativas para los Pokémon de tipo Planta de su alrededor.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "ABSORB" }, { lv: "1", id: "COSMICPOWER" }, { lv: "1", id: "INGRAIN" },
                { lv: "6", id: "SUBSTITUTE" }, { lv: "12", id: "ANCIENTPOWER" }, { lv: "18", id: "MAGICALLEAF" },
                { lv: "24", id: "LEECHSEED" }, { lv: "30", id: "HORNLEECH" }, { lv: "36", id: "IRONDEFENSE" },
                { lv: "42", id: "ENERGYBALL" }, { lv: "48", id: "LOCKON" }, { lv: "54", id: "ZAPCANNON" },
                { lv: "60", id: "HYPERBEAM" }
            ],
            tutor: [
                { id: "AMNESIA" }, { id: "ATTRACT" }, { id: "BULLETSEED" }, { id: "BULLDOZE" },
                { id: "CONFIDE" }, { id: "CURSE" }, { id: "DOUBLETEAM" }, { id: "EARTHQUAKE" },
                { id: "ENDURE" }, { id: "ENERGYBALL" }, { id: "FACADE" }, { id: "GIGADRAIN" },
                { id: "GIGAIMPACT" }, { id: "GRASSKNOT" }, { id: "GRASSYGLIDE" }, { id: "GRASSYTERRAIN" },
                { id: "HELPINGHAND" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "IRONDEFENSE" },
                { id: "LEAFSTORM" }, { id: "LEECHSEED" }, { id: "MAGICALLEAF" }, { id: "NATUREPOWER" },
                { id: "PROTECT" }, { id: "REST" }, { id: "RETURN" }, { id: "ROUND" },
                { id: "SEEDBOMB" }, { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "SOLARBEAM" },
                { id: "SOLARBLADE" }, { id: "STOMPINGTANTRUM" }, { id: "SUBSTITUTE" }, { id: "SWAGGER" },
                { id: "TERABLAST" }, { id: "TOXIC" }, { id: "WORRYSEED" }
            ],
            egg: []
        }
    },
    {
        id: "19",
        num: 19,
        name: "Regiloon",
        category: "Globo",
        types: ["Volador"],
        stats: { hp: 80, att: 100, def: 50, spA: 200, spD: 100, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "UNBURDEN" },
            { type: "Habilidad 2", id: "CLEARBODY" },
            { type: "Oculta", id: "AERILATE" }
        ],
        flavor: "Se dice que Regigigas lo creó en un momento de aburrimiento extremo para entretener a un Pokémon que conoció. Aunque parece frágil, su cuerpo de gas comprimido es capaz de generar ráfagas de viento devastadoras.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "GUST" }, { lv: "6", id: "CHARGE" },
                { lv: "12", id: "AERIALACE" }, { lv: "18", id: "ANCIENTPOWER" }, { lv: "24", id: "SELFDESTRUCT" },
                { lv: "30", id: "BOUNCE" }, { lv: "36", id: "AIRSLASH" }, { lv: "42", id: "LOCKON" },
                { lv: "48", id: "ZAPCANNON" }, { lv: "54", id: "SKYATTACK" }, { lv: "60", id: "HYPERBEAM" },
                { lv: "66", id: "EXPLOSION" }
            ],
            tutor: [
                { id: "ACROBATICS" }, { id: "AERIALACE" }, { id: "AEROBLAST" }, { id: "AIRSLASH" },
                { id: "ALLYSWITCH" }, { id: "AMNESIA" }, { id: "ATTRACT" }, { id: "BOUNCE" },
                { id: "CONFIDE" }, { id: "DEFOG" }, { id: "DOUBLETEAM" }, { id: "ENDURE" },
                { id: "EXPLOSION" }, { id: "FACADE" }, { id: "FLY" }, { id: "FRUSTRATION" },
                { id: "GIGAIMPACT" }, { id: "GYROBALL" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" },
                { id: "HYPERBEAM" }, { id: "IRONDEFENSE" }, { id: "LIGHTSCREEN" }, { id: "PROTECT" },
                { id: "RAINDANCE" }, { id: "REFLECT" }, { id: "REST" }, { id: "RETURN" },
                { id: "ROOST" }, { id: "SAFEGUARD" }, { id: "SELFDESTRUCT" }, { id: "SLEEPTALK" },
                { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" },
                { id: "SWIFT" }, { id: "TAILWIND" }, { id: "THUNDERBOLT" }, { id: "THUNDERWAVE" },
                { id: "TOXIC" }, { id: "UTURN" }
            ],
            egg: []
        }
    },
    {
        id: "20",
        num: 20,
        name: "Regisage",
        category: "Rúnico",
        types: ["Psíquico"],
        stats: { hp: 80, att: 50, def: 100, spA: 100, spD: 200, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "LEVITATE" },
            { type: "Habilidad 2", id: "CLEARBODY" },
            { type: "Oculta", id: "ANALYTIC" }
        ],
        flavor: "Creado por Regigigas tras descifrar el lenguaje de los Unown. Su cuerpo arde con la llama del conocimiento primordial y se dice que custodia los secretos del origen del mundo Pokémon.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "CONFUSION" }, { lv: "6", id: "CHARGE" },
                { lv: "12", id: "ASTONISH" }, { lv: "18", id: "ANCIENTPOWER" }, { lv: "24", id: "CALMMIND" },
                { lv: "30", id: "PSYBEAM" }, { lv: "36", id: "COSMICPOWER" }, { lv: "42", id: "LOCKON" },
                { lv: "48", id: "ZAPCANNON" }, { lv: "54", id: "PSYCHIC" }, { lv: "60", id: "HYPERBEAM" },
                { lv: "66", id: "FUTURESIGHT" }
            ],
            tutor: [
                { id: "ALLYSWITCH" }, { id: "AMNESIA" }, { id: "ATTRACT" }, { id: "CALMMIND" },
                { id: "CONFIDE" }, { id: "DOUBLETEAM" }, { id: "DREAMEATER" }, { id: "ECHOEDVOICE" },
                { id: "ENDURE" }, { id: "ENERGYBALL" }, { id: "EXPANDINGFORCE" }, { id: "FACADE" },
                { id: "FLASH" }, { id: "FOCUSBLAST" }, { id: "FRUSTRATION" }, { id: "FUTURESIGHT" },
                { id: "GIGAIMPACT" }, { id: "GRAVITY" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" },
                { id: "HYPERBEAM" }, { id: "IRONDEFENSE" }, { id: "LIGHTSCREEN" }, { id: "MAGICCOAT" },
                { id: "MAGICALLEAF" }, { id: "METRONOME" }, { id: "MYSTICALFIRE" }, { id: "POWERGEM" },
                { id: "PROTECT" }, { id: "PSYCHIC" }, { id: "PSYCHICNOISE" }, { id: "PSYCHUP" },
                { id: "PSYSHOCK" }, { id: "RAINDANCE" }, { id: "REFLECT" }, { id: "REST" },
                { id: "RETURN" }, { id: "SAFEGUARD" }, { id: "SHADOWBALL" }, { id: "SKILLSWAP" },
                { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" },
                { id: "SWAGGER" }, { id: "TELEKINESIS" }, { id: "THUNDERBOLT" }, { id: "THUNDERWAVE" },
                { id: "TOXIC" }, { id: "TRICKROOM" }, { id: "ZENHEADBUTT" }
            ],
            egg: []
        }
    },
    {
        id: "21",
        num: 21,
        name: "Spheal",
        category: "Aplauso",
        types: ["Hielo", "Agua"],
        stats: { hp: 70, att: 40, def: 50, spA: 25, spD: 55, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "THICKFAT" },
            { type: "Habilidad 2", id: "ICEBODY" },
            { type: "Oculta", id: "OBLIVIOUS" }
        ],
        flavor: "Está cubierto por completo con un grueso pelaje. Gracias a él, nunca siente frío: ni cuando rueda sobre placas de hielo ni cuando bucea en el mar.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: null,
            evos: [{ id: "22", name: "Sealeo", method: "Nivel 32" }]
        },
        moves: {
            level: [
                { lv: "1", id: "ROLLOUT" }, { lv: "1", id: "DEFENSECURL" }, { lv: "4", id: "GROWL" },
                { lv: "8", id: "WATERGUN" }, { lv: "12", id: "POWDERSNOW" }, { lv: "16", id: "REST" },
                { lv: "20", id: "SNORE" }, { lv: "24", id: "BRINE" }, { lv: "28", id: "AURORABEAM" },
                { lv: "33", id: "ENCORE" }, { lv: "36", id: "BODYSLAM" }, { lv: "40", id: "SURF" },
                { lv: "44", id: "BLIZZARD" }, { lv: "48", id: "HAIL" }, { lv: "52", id: "SHEERCOLD" }
            ],
            tutor: [
                { id: "AQUATAIL" }, { id: "ATTRACT" }, { id: "BLIZZARD" }, { id: "BODYSLAM" },
                { id: "BRINE" }, { id: "BULLDOZE" }, { id: "CAPTIVATE" }, { id: "CONFIDE" },
                { id: "DEFENSECURL" }, { id: "DIVE" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" },
                { id: "EARTHQUAKE" }, { id: "ECHOEDVOICE" }, { id: "ENCORE" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FROSTBREATH" }, { id: "FRUSTRATION" }, { id: "HAIL" },
                { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "ICEBEAM" }, { id: "ICYWIND" },
                { id: "IRONTAIL" }, { id: "MIMIC" }, { id: "MUDSLAP" }, { id: "NATURALGIFT" },
                { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" }, { id: "RETURN" },
                { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, { id: "ROCKTOMB" }, { id: "ROLLOUT" },
                { id: "ROUND" }, { id: "SECRETPOWER" }, { id: "SIGNALBEAM" }, { id: "SLEEPTALK" },
                { id: "SNORE" }, { id: "STEELROLLER" }, { id: "STRENGTH" }, { id: "SUBSTITUTE" },
                { id: "SUPERFANG" }, { id: "SURF" }, { id: "SWAGGER" }, { id: "WATERFALL" },
                { id: "WATERPULSE" }, { id: "WHIRLPOOL" }
            ],
            egg: [
                { id: "AQUARING" }, { id: "BELLYDRUM" }, { id: "CURSE" }, { id: "FISSURE" },
                { id: "ROLLOUT" }, { id: "SPITUP" }, { id: "STOCKPILE" }, { id: "SWALLOW" },
                { id: "WATERPULSE" }, { id: "YAWN" }
            ]
        }
    },
    {
        id: "21-jagara",
        num: 21,
        name: "Spheal",
        category: "Aplauso",
        types: ["Agua", "Lucha"],
        stats: { hp: 60, att: 70, def: 50, spA: 45, spD: 50, spe: 50 },
        abilities: [
            { type: "Habilidad 1", id: "INNERFOCUS" },
            { type: "Habilidad 2", id: "STEADFAST" },
            { type: "Oculta", id: "SHARPNESS" }
        ],
        flavor: "A diferencia de otros Spheal, estos pasan el día golpeando sus aletas contra las rocas costeras. Aunque su cuerpo es redondo, sus golpes son secos y precisos como los de un karateka.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [{ id: "22-jagara", name: "Sealeo", method: "Nivel 32" }]
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "WATERGUN" }, { lv: "4", id: "LEER" },
                { lv: "8", id: "ROCKSMASH" }, { lv: "12", id: "AQUAJET" }, { lv: "16", id: "DOUBLEKICK" },
                { lv: "20", id: "ICEBALL" }, { lv: "24", id: "BRINE" }, { lv: "28", id: "BULKUP" },
                { lv: "32", id: "BODYSLAM" }, { lv: "36", id: "LIQUIDATION" }
            ],
            tutor: [
                { id: "AQUAJET" }, { id: "AQUATAIL" }, { id: "ATTRACT" }, { id: "BODYSLAM" },
                { id: "BRINE" }, { id: "BULKUP" }, { id: "COACHING" }, { id: "CONFIDE" },
                { id: "DOUBLEKICK" }, { id: "DOUBLETEAM" }, { id: "DRAINPUNCH" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FOCUSBLAST" }, { id: "FRUSTRATION" }, { id: "HELPINGHAND" },
                { id: "HIDDENPOWER" }, { id: "ICEPUNCH" }, { id: "ICYWIND" }, { id: "IRONDEFENSE" },
                { id: "LIQUIDATION" }, { id: "LOWKICK" }, { id: "PROTECT" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROCKSMASH" }, { id: "ROUND" }, { id: "SLEEPTALK" },
                { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUPERPOWER" }, { id: "SURF" },
                { id: "SWAGGER" }, { id: "WATERPLEDGE" }, { id: "WATERPULSE" }, { id: "WHIRLPOOL" }
            ],
            egg: []
        }
    },
    {
        id: "22",
        num: 22,
        name: "Sealeo",
        category: "Rodabola",
        types: ["Hielo", "Agua"],
        stats: { hp: 90, att: 60, def: 70, spA: 45, spD: 75, spe: 70 },
        abilities: [
            { type: "Habilidad 1", id: "THICKFAT" },
            { type: "Habilidad 2", id: "ICEBODY" },
            { type: "Oculta", id: "OBLIVIOUS" }
        ],
        flavor: "Sealeo vive en manadas sobre placas de hielo. Puede romper el hielo usando sus potentes aletas y se zambulle en el mar cinco veces al día para pescar.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: { id: "21", name: "Spheal", method: "Nivel 32" },
            evos: [{ id: "23", name: "Walrein", method: "Nivel 44" }]
        },
        moves: {
            level: [
                { lv: "1", id: "SWAGGER" }, { lv: "1", id: "ROLLOUT" }, { lv: "1", id: "DEFENSECURL" },
                { lv: "1", id: "GROWL" }, { lv: "1", id: "WATERGUN" }, { lv: "12", id: "POWDERSNOW" },
                { lv: "16", id: "REST" }, { lv: "20", id: "SNORE" }, { lv: "24", id: "BRINE" },
                { lv: "28", id: "AURORABEAM" }, { lv: "35", id: "ENCORE" }, { lv: "40", id: "BODYSLAM" },
                { lv: "46", id: "SURF" }, { lv: "52", id: "BLIZZARD" }, { lv: "58", id: "HAIL" },
                { lv: "64", id: "SHEERCOLD" }
            ],
            tutor: [
                { id: "AQUATAIL" }, { id: "ATTRACT" }, { id: "BLIZZARD" }, { id: "BODYSLAM" },
                { id: "BRINE" }, { id: "BULLDOZE" }, { id: "CAPTIVATE" }, { id: "CONFIDE" },
                { id: "DEFENSECURL" }, { id: "DIVE" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" },
                { id: "EARTHQUAKE" }, { id: "ECHOEDVOICE" }, { id: "ENCORE" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FROSTBREATH" }, { id: "FRUSTRATION" }, { id: "HAIL" },
                { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "ICEBEAM" }, { id: "ICICLESPEAR" },
                { id: "ICYWIND" }, { id: "IRONTAIL" }, { id: "MIMIC" }, { id: "MUDSLAP" },
                { id: "NATURALGIFT" }, { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROAR" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" },
                { id: "ROCKTOMB" }, { id: "ROLLOUT" }, { id: "ROUND" }, { id: "SECRETPOWER" },
                { id: "SIGNALBEAM" }, { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "STEELROLLER" },
                { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUPERFANG" }, { id: "SURF" },
                { id: "SWAGGER" }, { id: "WATERFALL" }, { id: "WATERPULSE" }, { id: "WHIRLPOOL" }
            ],
            egg: []
        }
    },
    {
        id: "22-jagara",
        num: 22,
        name: "Sealeo",
        category: "Rodabola",
        types: ["Agua", "Lucha"],
        stats: { hp: 80, att: 90, def: 70, spA: 60, spD: 70, spe: 65 },
        abilities: [
            { type: "Habilidad 1", id: "INNERFOCUS" },
            { type: "Habilidad 2", id: "STEADFAST" },
            { type: "Oculta", id: "SHARPNESS" }
        ],
        flavor: "Su entrenamiento se vuelve más severo, llegando a partir carámbanos de hielo con el canto de sus aletas. Se dice que buscan las corrientes más fuertes para perfeccionar su equilibrio y fuerza.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "21-jagara", name: "Spheal", method: "Nivel 32" },
            evos: [{ id: "24", name: "Zantoseal", method: "Nivel 44" }]
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "WATERGUN" }, { lv: "1", id: "LEER" },
                { lv: "1", id: "ROCKSMASH" }, { lv: "12", id: "AQUAJET" }, { lv: "16", id: "DOUBLEKICK" },
                { lv: "20", id: "ICEBALL" }, { lv: "26", id: "BRINE" }, { lv: "31", id: "BULKUP" },
                { lv: "38", id: "BODYSLAM" }, { lv: "44", id: "LIQUIDATION" }
            ],
            tutor: [
                { id: "AQUACUTTER" }, { id: "AQUAJET" }, { id: "AQUATAIL" }, { id: "ATTRACT" },
                { id: "BODYSLAM" }, { id: "BRINE" }, { id: "BULKUP" }, { id: "COACHING" },
                { id: "CONFIDE" }, { id: "DOUBLEKICK" }, { id: "DOUBLETEAM" }, { id: "DRAINPUNCH" },
                { id: "ENDURE" }, { id: "FACADE" }, { id: "FOCUSBLAST" }, { id: "FRUSTRATION" },
                { id: "HELPINGHAND" }, { id: "HIDDENPOWER" }, { id: "ICEPUNCH" }, { id: "ICYWIND" },
                { id: "IRONDEFENSE" }, { id: "LIQUIDATION" }, { id: "LOWKICK" }, { id: "PROTECT" },
                { id: "REST" }, { id: "RETURN" }, { id: "ROCKSMASH" }, { id: "ROUND" },
                { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "SUBSTITUTE" }, { id: "SUPERPOWER" },
                { id: "SURF" }, { id: "SWAGGER" }, { id: "WATERPLEDGE" }, { id: "WATERPULSE" },
                { id: "WHIRLPOOL" }, { id: "ZENHEADBUTT" }
            ],
            egg: []
        }
    },
    {
        id: "23",
        num: 23,
        name: "Walrein",
        category: "Rompehielo",
        types: ["Hielo", "Agua"],
        stats: { hp: 110, att: 80, def: 90, spA: 65, spD: 95, spe: 90 },
        abilities: [
            { type: "Habilidad 1", id: "THICKFAT" },
            { type: "Habilidad 2", id: "ICEBODY" },
            { type: "Oculta", id: "OBLIVIOUS" }
        ],
        flavor: "Para proteger a su manada, el líder luchará hasta el final contra todo lo que invada su territorio. En el transcurso del combate puede perder los colmillos.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: { id: "22", name: "Sealeo", method: "Nivel 44" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "SWAGGER" }, { lv: "1", id: "CRUNCH" }, { lv: "1", id: "ICEFANG" },
                { lv: "1", id: "ROLLOUT" }, { lv: "1", id: "DEFENSECURL" }, { lv: "1", id: "GROWL" },
                { lv: "1", id: "WATERGUN" }, { lv: "12", id: "POWDERSNOW" }, { lv: "16", id: "REST" },
                { lv: "20", id: "SNORE" }, { lv: "24", id: "BRINE" }, { lv: "28", id: "AURORABEAM" },
                { lv: "35", id: "ENCORE" }, { lv: "40", id: "BODYSLAM" }, { lv: "48", id: "SURF" },
                { lv: "56", id: "BLIZZARD" }, { lv: "64", id: "HAIL" }, { lv: "72", id: "SHEERCOLD" }
            ],
            tutor: [
                { id: "AQUATAIL" }, { id: "ATTRACT" }, { id: "AVALANCHE" }, { id: "BLIZZARD" },
                { id: "BLOCK" }, { id: "BODYPRESS" }, { id: "BODYSLAM" }, { id: "BRINE" },
                { id: "BULLDOZE" }, { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CRUNCH" },
                { id: "DEFENSECURL" }, { id: "DIVE" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" },
                { id: "EARTHQUAKE" }, { id: "ECHOEDVOICE" }, { id: "ENCORE" }, { id: "ENDURE" },
                { id: "FACADE" }, { id: "FROSTBREATH" }, { id: "FRUSTRATION" }, { id: "FURYCUTTER" },
                { id: "GIGAIMPACT" }, { id: "HAIL" }, { id: "HEADBUTT" }, { id: "HEAVYSLAM" },
                { id: "HIDDENPOWER" }, { id: "HYDROPUMP" }, { id: "HYPERBEAM" }, { id: "ICEBEAM" },
                { id: "ICEFANG" }, { id: "ICICLESPEAR" }, { id: "ICYWIND" }, { id: "IRONHEAD" },
                { id: "IRONTAIL" }, { id: "LIQUIDATION" }, { id: "MIMIC" }, { id: "MUDSLAP" },
                { id: "NATURALGIFT" }, { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROAR" }, { id: "ROCKSLIDE" }, { id: "ROCKSMASH" },
                { id: "ROCKTOMB" }, { id: "ROLLOUT" }, { id: "ROUND" }, { id: "SECRETPOWER" },
                { id: "SIGNALBEAM" }, { id: "SLEEPTALK" }, { id: "SNORE" }, { id: "STEELROLLER" },
                { id: "STOMPINGTANTRUM" }, { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUPERFANG" },
                { id: "SURF" }, { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "WATERFALL" },
                { id: "WATERPULSE" }, { id: "WHIRLPOOL" }
            ],
            egg: []
        }
    },
    {
        id: "24",
        num: 24,
        name: "Zantoseal",
        category: "Filo Marino",
        types: ["Agua", "Lucha"],
        stats: { hp: 95, att: 125, def: 90, spA: 60, spD: 90, spe: 70 },
        abilities: [
            { type: "Habilidad 1", id: "INNERFOCUS" },
            { type: "Habilidad 2", id: "STEADFAST" },
            { type: "Oculta", id: "SHARPNESS" }
        ],
        flavor: "Ha convertido su propio cuerpo en un arma. Practica sus cortes bajo cascadas congeladas para mejorar su precisión. Se dice que sus aletas pueden rebanar el acero.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "22-jagara", name: "Sealeo", method: "Nivel 44" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "WATERGUN" }, { lv: "1", id: "LEER" },
                { lv: "1", id: "ROCKSMASH" }, { lv: "12", id: "AQUAJET" }, { lv: "16", id: "DOUBLEKICK" },
                { lv: "20", id: "ICEBALL" }, { lv: "26", id: "BRINE" }, { lv: "31", id: "BULKUP" },
                { lv: "38", id: "NIGHTSLASH" }, { lv: "44", id: "LIQUIDATION" }, { lv: "52", id: "CLOSECOMBAT" },
                { lv: "60", id: "SACREDSWORD" }
            ],
            tutor: [
                { id: "AQUACUTTER" }, { id: "AQUAJET" }, { id: "AQUATAIL" }, { id: "ATTRACT" },
                { id: "BODYSLAM" }, { id: "BRINE" }, { id: "BRICKBREAK" }, { id: "BULKUP" },
                { id: "CLOSECOMBAT" }, { id: "COACHING" }, { id: "CONFIDE" }, { id: "CUT" },
                { id: "DETECT" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" }, { id: "DRAINPUNCH" },
                { id: "ENDURE" }, { id: "FACADE" }, { id: "FALSESWIPE" }, { id: "FOCUSBLAST" },
                { id: "FOCUSPUNCH" }, { id: "FRUSTRATION" }, { id: "GIGAIMPACT" }, { id: "HELPINGHAND" },
                { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "ICEPUNCH" }, { id: "ICYWIND" },
                { id: "IRONDEFENSE" }, { id: "LIQUIDATION" }, { id: "LOWKICK" }, { id: "LOWSWEEP" },
                { id: "NIGHTSLASH" }, { id: "POISONJAB" }, { id: "PROTECT" }, { id: "PSYCHOCUT" },
                { id: "RAINDANCE" }, { id: "REST" }, { id: "RETURN" }, { id: "REVENGE" },
                { id: "REVERSAL" }, { id: "ROCKSMASH" }, { id: "ROUND" }, { id: "SLEEPTALK" },
                { id: "SNORE" }, { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SUPERPOWER" },
                { id: "SURF" }, { id: "SWAGGER" }, { id: "SWORDSDANCE" }, { id: "THROATCHOP" },
                { id: "WATERPLEDGE" }, { id: "WATERPULSE" }, { id: "WATERFALL" }, { id: "WHIRLPOOL" },
                { id: "XSCISSOR" }, { id: "ZENHEADBUTT" }
            ],
            egg: []
        }
    },
    {
        id: "25",
        num: 25,
        name: "Trubbish",
        category: "Bolsabasura",
        types: ["Veneno"],
        stats: { hp: 50, att: 50, def: 62, spA: 65, spD: 40, spe: 62 },
        abilities: [
            { type: "Habilidad 1", id: "STENCH" },
            { type: "Habilidad 2", id: "STICKYHOLD" },
            { type: "Oculta", id: "AFTERMATH" }
        ],
        flavor: "Pokémon nacido de la reacción química entre una bolsa de basura y residuos industriales.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: null,
            evos: [{ id: "26", name: "Garbodor", method: "Nivel 36" }]
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "POISONGAS" }, { lv: "3", id: "RECYCLE" },
                { lv: "6", id: "ACIDSPRAY" }, { lv: "9", id: "AMNESIA" }, { lv: "12", id: "CLEARSMOG" },
                { lv: "15", id: "TOXICSPIKES" }, { lv: "18", id: "SLUDGE" }, { lv: "21", id: "STOCKPILE" },
                { lv: "21", id: "SWALLOW" }, { lv: "24", id: "TAKEDOWN" }, { lv: "27", id: "SLUDGEBOMB" },
                { lv: "30", id: "TOXIC" }, { lv: "33", id: "BELCH" }, { lv: "37", id: "PAINSPLIT" },
                { lv: "39", id: "GUNKSHOT" }, { lv: "42", id: "EXPLOSION" }
            ],
            tutor: [
                { id: "AMNESIA" }, { id: "ATTRACT" }, { id: "CAPTIVATE" }, { id: "CONFIDE" },
                { id: "CORROSIVEGAS" }, { id: "DARKPULSE" }, { id: "DOUBLETEAM" }, { id: "DRAINPUNCH" },
                { id: "ENDURE" }, { id: "EXPLOSION" }, { id: "FACADE" }, { id: "FRUSTRATION" },
                { id: "GIGADRAIN" }, { id: "GUNKSHOT" }, { id: "HIDDENPOWER" }, { id: "INFESTATION" },
                { id: "MIMIC" }, { id: "NATURALGIFT" }, { id: "PAINSPLIT" }, { id: "PAYBACK" },
                { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "RECYCLE" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROCKBLAST" }, { id: "ROUND" }, { id: "SECRETPOWER" },
                { id: "SEEDBOMB" }, { id: "SELFDESTRUCT" }, { id: "SLEEPTALK" }, { id: "SLUDGEBOMB" },
                { id: "SLUDGEWAVE" }, { id: "SNORE" }, { id: "SPIKES" }, { id: "SPITE" },
                { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" }, { id: "THIEF" },
                { id: "TOXIC" }, { id: "TOXICSPIKES" }, { id: "VENOMDRENCH" }, { id: "VENOSHOCK" }
            ],
            egg: [
                { id: "AUTOTOMIZE" }, { id: "CURSE" }, { id: "HAZE" }, { id: "ROLLOUT" }, { id: "SANDATTACK" }
            ]
        }
    },
    {
        id: "26",
        num: 26,
        name: "Garbodor",
        category: "Vertedero",
        types: ["Veneno"],
        stats: { hp: 80, att: 95, def: 82, spA: 75, spD: 60, spe: 82 },
        abilities: [
            { type: "Habilidad 1", id: "STENCH" },
            { type: "Habilidad 2", id: "WEAKARMOR" },
            { type: "Oculta", id: "AFTERMATH" }
        ],
        flavor: "Traga basura y la integra en su cuerpo. Despide veneno líquido por la punta de los dedos de su mano derecha.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        evolution: {
            prevo: { id: "25", name: "Trubbish", method: "Nivel 36" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "TAKEDOWN" }, { lv: "1", id: "METALCLAW" }, { lv: "1", id: "POUND" },
                { lv: "1", id: "POISONGAS" }, { lv: "1", id: "RECYCLE" }, { lv: "1", id: "ACIDSPRAY" },
                { lv: "9", id: "AMNESIA" }, { lv: "12", id: "CLEARSMOG" }, { lv: "15", id: "TOXICSPIKES" },
                { lv: "18", id: "SLUDGE" }, { lv: "21", id: "STOCKPILE" }, { lv: "21", id: "SWALLOW" },
                { lv: "24", id: "BODYSLAM" }, { lv: "27", id: "SLUDGEBOMB" }, { lv: "30", id: "TOXIC" },
                { lv: "33", id: "BELCH" }, { lv: "39", id: "PAINSPLIT" }, { lv: "43", id: "GUNKSHOT" },
                { lv: "48", id: "EXPLOSION" }
            ],
            tutor: [
                { id: "AMNESIA" }, { id: "ATTRACT" }, { id: "BODYPRESS" }, { id: "BODYSLAM" },
                { id: "CAPTIVATE" }, { id: "CONFIDE" }, { id: "CORROSIVEGAS" }, { id: "CROSSPOISON" },
                { id: "DARKPULSE" }, { id: "DOUBLETEAM" }, { id: "DRAINPUNCH" }, { id: "ENDURE" },
                { id: "EXPLOSION" }, { id: "FACADE" }, { id: "FLING" }, { id: "FOCUSBLAST" },
                { id: "FRUSTRATION" }, { id: "GIGADRAIN" }, { id: "GIGAIMPACT" }, { id: "GUNKSHOT" },
                { id: "HIDDENPOWER" }, { id: "HYPERBEAM" }, { id: "INFESTATION" }, { id: "MIMIC" },
                { id: "NATURALGIFT" }, { id: "PAINSPLIT" }, { id: "PAYBACK" }, { id: "PROTECT" },
                { id: "PSYCHIC" }, { id: "RAINDANCE" }, { id: "RECYCLE" }, { id: "REST" },
                { id: "RETURN" }, { id: "ROCKBLAST" }, { id: "ROCKPOLISH" }, { id: "ROUND" },
                { id: "SCREECH" }, { id: "SECRETPOWER" }, { id: "SEEDBOMB" }, { id: "SELFDESTRUCT" },
                { id: "SLEEPTALK" }, { id: "SLUDGEBOMB" }, { id: "SLUDGEWAVE" }, { id: "SMACKDOWN" },
                { id: "SNORE" }, { id: "SOLARBEAM" }, { id: "SPIKES" }, { id: "SPITE" },
                { id: "STOMPINGTANTRUM" }, { id: "SUBSTITUTE" }, { id: "SUNNYDAY" }, { id: "SWAGGER" },
                { id: "THIEF" }, { id: "THUNDERBOLT" }, { id: "TOXIC" }, { id: "TOXICSPIKES" },
                { id: "VENOMDRENCH" }, { id: "VENOSHOCK" }
            ],
            egg: []
        }
    },
    {
        id: "25-jagara",
        num: 25,
        name: "Trubbish",
        category: "Bolsabasura",
        types: ["Agua", "Veneno"],
        stats: { hp: 50, att: 50, def: 62, spA: 40, spD: 62, spe: 65 },
        abilities: [
            { type: "Habilidad 1", id: "STICKYHOLD" },
            { type: "Habilidad 2", id: "POISONPOINT" },
            { type: "Oculta", id: "AFTERMATH" }
        ],
        flavor: "Cayó al océano y recogió a un Wishiwasi herido en su bolsa. El agua en su interior es una mezcla de toxinas y nutrientes marinos.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: null,
            evos: [
                { id: "26-jagara", name: "Garbodor de Jagara", method: "Movimiento tipo Veneno" },
                { id: "27", name: "Wishbaggon", method: "Nivel 36" }
            ]
        },
        moves: {
            level: [
                { lv: "1", id: "POUND" }, { lv: "1", id: "POISONGAS" }, { lv: "3", id: "RECYCLE" },
                { lv: "5", id: "WATERGUN" }, { lv: "9", id: "AMNESIA" }, { lv: "12", id: "ACID" },
                { lv: "15", id: "DOUBLESLAP" }, { lv: "18", id: "BUBBLEBEAM" }, { lv: "21", id: "PROTECT" },
                { lv: "24", id: "TOXICSPIKES" }, { lv: "27", id: "BODYSLAM" }, { lv: "31", id: "SLUDGEBOMB" },
                { lv: "34", id: "AQUARING" }, { lv: "37", id: "TOXIC" }, { lv: "40", id: "BELCH" },
                { lv: "43", id: "PAINSPLIT" }
            ],
            tutor: [],
            egg: []
        }
    },
    {
        id: "26-jagara",
        num: 26,
        name: "Garbodor",
        category: "Vertedero",
        types: ["Agua", "Fantasma"],
        stats: { hp: 80, att: 95, def: 82, spA: 60, spD: 82, spe: 75 },
        abilities: [
            { type: "Habilidad 1", id: "WEAKARMOR" },
            { type: "Habilidad 2", id: "STENCH" },
            { type: "Oculta", id: "AFTERMATH" }
        ],
        flavor: "El Wishiwasi que protegía no sobrevivió, y su espíritu ahora posee la bolsa de basura. Se mueve erráticamente impulsado por rencor ectoplásmico.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "25-jagara", name: "Trubbish", method: "Movimiento tipo Veneno" },
            evos: []
        },
        moves: {
            level: [
                { lv: "0", id: "SHADOWPUNCH" }, { lv: "1", id: "SHADOWPUNCH" }, { lv: "1", id: "METALCLAW" },
                { lv: "1", id: "POUND" }, { lv: "1", id: "POISONGAS" }, { lv: "1", id: "RECYCLE" },
                { lv: "1", id: "WATERGUN" }, { lv: "9", id: "AMNESIA" }, { lv: "12", id: "ACID" },
                { lv: "15", id: "DOUBLESLAP" }, { lv: "18", id: "BUBBLEBEAM" }, { lv: "21", id: "PROTECT" },
                { lv: "24", id: "TOXICSPIKES" }, { lv: "27", id: "BODYSLAM" }, { lv: "31", id: "SLUDGEBOMB" },
                { lv: "34", id: "AQUARING" }, { lv: "37", id: "TOXIC" }, { lv: "40", id: "BELCH" },
                { lv: "43", id: "PAINSPLIT" }, { lv: "46", id: "GUNKSHOT" }, { lv: "50", id: "SHADOWBALL" }
            ],
            tutor: [],
            egg: []
        }
    },
    {
        id: "27",
        num: 27,
        name: "Wishbaggon",
        category: "Acuario",
        types: ["Agua", "Veneno"],
        stats: { hp: 90, att: 70, def: 105, spA: 85, spD: 105, spe: 20 },
        abilities: [
            { type: "Habilidad 1", id: "REGENERATOR" },
            { type: "Habilidad 2", id: "WATERABSORB" },
            { type: "Oculta", id: "MULTISCALE" }
        ],
        flavor: "Con el cuidado de Trubbish los Wishiwasi que habitaban felizmente en su interior se multiplicaron desarrollando resistencia al veneno. Y ahora viven en simbiosis formando un nuevo pokémon.",
        credits: { design: "Rezatri", sprite: "Rezatri" },
        evolution: {
            prevo: { id: "25-jagara", name: "Trubbish", method: "Nivel 36" },
            evos: []
        },
        moves: {
            level: [
                { lv: "1", id: "SURF" }, { lv: "1", id: "SLUDGEWAVE" }, { lv: "1", id: "AQUARING" },
                { lv: "1", id: "POUND" }, { lv: "1", id: "WATERGUN" }, { lv: "9", id: "AMNESIA" },
                { lv: "15", id: "DOUBLESLAP" }, { lv: "21", id: "PROTECT" }, { lv: "24", id: "TOXICSPIKES" },
                { lv: "27", id: "BODYSLAM" }, { lv: "34", id: "AQUARING" }, { lv: "40", id: "HYDROPUMP" },
                { lv: "45", id: "INSTRUCT" }, { lv: "52", id: "SLUDGEWAVE" }, { lv: "60", id: "SOAK" }
            ],
            tutor: [
                { id: "ALLYSWITCH" }, { id: "ATTRACT" }, { id: "CALMMIND" }, { id: "CONFIDE" },
                { id: "DOUBLETEAM" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "GIGADRAIN" },
                { id: "GIGAIMPACT" }, { id: "HELPINGHAND" }, { id: "HIDDENPOWER" }, { id: "HYPERBEAM" },
                { id: "HYDROPUMP" }, { id: "ICEBEAM" }, { id: "IRONDEFENSE" }, { id: "LIGHTSCREEN" },
                { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "RECYCLE" }, { id: "REFLECT" },
                { id: "REST" }, { id: "RETURN" }, { id: "ROUND" }, { id: "SAFEGUARD" },
                { id: "SECRETPOWER" }, { id: "SLEEPTALK" }, { id: "SLUDGEBOMB" }, { id: "SLUDGEWAVE" },
                { id: "SNORE" }, { id: "SURF" }, { id: "SUBSTITUTE" }, { id: "SWAGGER" },
                { id: "TOXIC" }, { id: "WATERPULSE" }
            ],
            egg: []
        }
    },
    {
        id: "28",
        num: 28,
        name: "Wooper",
        types: ["Agua", "Tierra"],
        category: "Pez Agua",
        flavor: "Suele vivir en el agua, pero también es posible verle en tierra en busca de comida. Cuando está en terreno firme, se cubre con una película viscosa y tóxica.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        stats: { hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15 },
        abilities: [
            { type: "Habilidad 1", id: "DAMP" },
            { type: "Habilidad 2", id: "WATERABSORB" },
            { type: "Oculta", id: "UNAWARE" }
        ],
        evolution: {
            prevo: null,
            evos: [{ id: "29", method: "Nivel 20" }]
        },
        moves: {
            level: [
                { lv: 1, id: "WATERGUN" }, { lv: 1, id: "TAILWHIP" }, { lv: 4, id: "RAINDANCE" },
                { lv: 8, id: "MUDSHOT" }, { lv: 12, id: "MIST" }, { lv: 12, id: "HAZE" },
                { lv: 16, id: "SLAM" }, { lv: 21, id: "YAWN" }, { lv: 24, id: "AQUATAIL" },
                { lv: 28, id: "MUDDYWATER" }, { lv: 32, id: "AMNESIA" }, { lv: 36, id: "TOXIC" },
                { lv: 40, id: "EARTHQUAKE" }
            ],
            tutor: [
                { id: "AFTERYOU" }, { id: "AMNESIA" }, { id: "ANCIENTPOWER" }, { id: "AQUATAIL" }, { id: "ATTRACT" },
                { id: "BLIZZARD" }, { id: "BODYSLAM" }, { id: "BULLDOZE" }, { id: "CAPTIVATE" }, { id: "CONFIDE" },
                { id: "DEFENSECURL" }, { id: "DIG" }, { id: "DIVE" }, { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" },
                { id: "DYNAMICPUNCH" }, { id: "EARTHPOWER" }, { id: "EARTHQUAKE" }, { id: "EERIEIMPULSE" }, { id: "ENCORE" },
                { id: "ENDURE" }, { id: "FACADE" }, { id: "FLASH" }, { id: "FRUSTRATION" }, { id: "GUARDSWAP" },
                { id: "HAIL" }, { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HYDROPUMP" }, { id: "ICEBEAM" },
                { id: "ICEPUNCH" }, { id: "ICYWIND" }, { id: "INFESTATION" }, { id: "IRONTAIL" }, { id: "MIMIC" },
                { id: "MUDDYWATER" }, { id: "MUDSHOT" }, { id: "MUDSLAP" }, { id: "NATURALGIFT" }, { id: "PROTECT" },
                { id: "RAINDANCE" }, { id: "REST" }, { id: "RETURN" }, { id: "ROCKSMASH" }, { id: "ROLLOUT" },
                { id: "ROUND" }, { id: "SAFEGUARD" }, { id: "SANDSTORM" }, { id: "SCALD" }, { id: "SECRETPOWER" },
                { id: "SLEEPTALK" }, { id: "SLUDGEBOMB" }, { id: "SLUDGEWAVE" }, { id: "SNORE" }, { id: "STOMPINGTANTRUM" },
                { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" }, { id: "TOXIC" }, { id: "WATERFALL" },
                { id: "WATERPULSE" }, { id: "WHIRLPOOL" }, { id: "TAKEDOWN" }, { id: "ACIDSPRAY" }, { id: "TRAILBLAZE" },
                { id: "CHILLINGWATER" }, { id: "ROCKTOMB" }, { id: "AVALANCHE" }, { id: "SNOWSCAPE" }, { id: "ROCKSLIDE" },
                { id: "SPIKES" }, { id: "LIQUIDATION" }, { id: "STEALTHROCK" }, { id: "HELPINGHAND" }, { id: "STONEEDGE" },
                { id: "HAZE" }, { id: "CURSE" }
            ],
            egg: [
                { id: "ACIDSPRAY" }, { id: "AFTERYOU" }, { id: "ANCIENTPOWER" }, { id: "BODYSLAM" }, { id: "COUNTER" },
                { id: "CURSE" }, { id: "DOUBLEKICK" }, { id: "EERIEIMPULSE" }, { id: "ENCORE" }, { id: "GUARDSWAP" },
                { id: "POWERUPPUNCH" }, { id: "RECOVER" }, { id: "SPITUP" }, { id: "STOCKPILE" }, { id: "SWALLOW" }
            ]
        }
    },
    {
        id: "29",
        num: 29,
        name: "Quagsire",
        types: ["Agua", "Tierra"],
        category: "Pez Agua",
        flavor: "Quagsire caza dejando las fauces abiertas en el agua y esperando a que su presa entre sin darse cuenta. Como se queda quieto, no pasa mucha hambre.",
        credits: { design: "GameFreak", sprite: "GameFreak" },
        stats: { hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35 },
        abilities: [
            { type: "Habilidad 1", id: "DAMP" },
            { type: "Habilidad 2", id: "WATERABSORB" },
            { type: "Oculta", id: "UNAWARE" }
        ],
        evolution: {
            prevo: { id: "28", method: "Nivel 20" },
            evos: []
        },
        moves: {
            level: [
                { lv: 1, id: "WATERGUN" }, { lv: 1, id: "TAILWHIP" }, { lv: 1, id: "RAINDANCE" },
                { lv: 1, id: "MUDSHOT" }, { lv: 12, id: "MIST" }, { lv: 12, id: "HAZE" },
                { lv: 16, id: "SLAM" }, { lv: 23, id: "YAWN" }, { lv: 28, id: "AQUATAIL" },
                { lv: 34, id: "MUDDYWATER" }, { lv: 40, id: "AMNESIA" }, { lv: 46, id: "TOXIC" },
                { lv: 52, id: "EARTHQUAKE" }
            ],
            tutor: [
                { id: "AFTERYOU" }, { id: "AMNESIA" }, { id: "ANCIENTPOWER" }, { id: "AQUATAIL" }, { id: "ATTRACT" },
                { id: "BLIZZARD" }, { id: "BODYSLAM" }, { id: "BRICKBREAK" }, { id: "BULLDOZE" }, { id: "CAPTIVATE" },
                { id: "CONFIDE" }, { id: "COUNTER" }, { id: "DEFENSECURL" }, { id: "DIG" }, { id: "DIVE" },
                { id: "DOUBLEEDGE" }, { id: "DOUBLETEAM" }, { id: "DYNAMICPUNCH" }, { id: "EARTHPOWER" }, { id: "EARTHQUAKE" },
                { id: "EERIEIMPULSE" }, { id: "ENCORE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "FLASH" },
                { id: "FLING" }, { id: "FOCUSBLAST" }, { id: "FOCUSPUNCH" }, { id: "FRUSTRATION" }, { id: "GIGAIMPACT" },
                { id: "GUARDSWAP" }, { id: "HAIL" }, { id: "HEADBUTT" }, { id: "HIDDENPOWER" }, { id: "HIGHHORSEPOWER" },
                { id: "HYDROPUMP" }, { id: "HYPERBEAM" }, { id: "ICEBEAM" }, { id: "ICEPUNCH" }, { id: "ICYWIND" },
                { id: "INFESTATION" }, { id: "IRONTAIL" }, { id: "LIQUIDATION" }, { id: "MEGAKICK" }, { id: "MEGAPUNCH" },
                { id: "MIMIC" }, { id: "MUDDYWATER" }, { id: "MUDSHOT" }, { id: "MUDSLAP" }, { id: "NATURALGIFT" },
                { id: "POWERUPPUNCH" }, { id: "PROTECT" }, { id: "RAINDANCE" }, { id: "REST" }, { id: "RETURN" },
                { id: "ROCKSLIDE" }, { id: "ROCKSMASH" }, { id: "ROCKTOMB" }, { id: "ROLLOUT" }, { id: "ROUND" },
                { id: "SAFEGUARD" }, { id: "SANDSTORM" }, { id: "SCALD" }, { id: "SECRETPOWER" }, { id: "SEISMICTOSS" },
                { id: "SLEEPTALK" }, { id: "SLUDGEBOMB" }, { id: "SLUDGEWAVE" }, { id: "SNORE" }, { id: "STOMPINGTANTRUM" },
                { id: "STONEEDGE" }, { id: "STRENGTH" }, { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "SWAGGER" },
                { id: "THIEF" }, { id: "TOXIC" }, { id: "WATERFALL" }, { id: "WATERPULSE" }, { id: "WHIRLPOOL" },
                { id: "TAKEDOWN" }, { id: "ACIDSPRAY" }, { id: "TRAILBLAZE" }, { id: "CHILLINGWATER" }, { id: "AVALANCHE" },
                { id: "SNOWSCAPE" }, { id: "DRAINPUNCH" }, { id: "BODYPRESS" }, { id: "SPIKES" }, { id: "TOXICSPIKES" },
                { id: "STEALTHROCK" }, { id: "HELPINGHAND" }, { id: "HAZE" }, { id: "CURSE" }
            ],
            egg: []
        }
    },
    {
        id: "28-paldea",
        num: 28,
        name: "Wooper",
        types: ["Veneno", "Tierra"],
        category: "Pez Veneno",
        flavor: "Ante el riesgo que le supone desplazarse solo, forma filas de tres o cuatro individuos que cuidan unos de otros mientras recorren los pantanos.",
        stats: { hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15 },
        abilities: [
            { type: "Habilidad 1", id: "POISONPOINT" },
            { type: "Habilidad 2", id: "WATERABSORB" },
            { type: "Oculta", id: "UNAWARE" }
        ],
        evolution: {
            prevo: null,
            evos: [{ id: "30", method: "Nivel 20" }]
        },
        credits: { design: "GameFreak", sprite: "GameFreak" },
        moves: {
            level: [
                { lv: 1, id: "MUDSHOT" }, { lv: 1, id: "TAILWHIP" }, { lv: 4, id: "TACKLE" },
                { lv: 8, id: "POISONTAIL" }, { lv: 12, id: "TOXICSPIKES" }, { lv: 16, id: "SLAM" },
                { lv: 21, id: "YAWN" }, { lv: 24, id: "POISONJAB" }, { lv: 28, id: "SLUDGEWAVE" },
                { lv: 32, id: "AMNESIA" }, { lv: 36, id: "TOXIC" }, { lv: 40, id: "EARTHQUAKE" }
            ],
            tutor: [
                { id: "ACIDSPRAY" }, { id: "AMNESIA" }, { id: "BODYPRESS" }, { id: "BODYSLAM" }, { id: "BULLDOZE" },
                { id: "CHILLINGWATER" }, { id: "CURSE" }, { id: "DIG" }, { id: "DOUBLEEDGE" }, { id: "EARTHPOWER" },
                { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "GUNKSHOT" }, { id: "HAZE" },
                { id: "HELPINGHAND" }, { id: "HYDROPUMP" }, { id: "LIQUIDATION" }, { id: "LOWKICK" }, { id: "MUDSHOT" },
                { id: "MUDSLAP" }, { id: "POISONJAB" }, { id: "POISONTAIL" }, { id: "PROTECT" }, { id: "RAINDANCE" },
                { id: "REST" }, { id: "ROCKSLIDE" }, { id: "ROCKTOMB" }, { id: "SANDSTORM" }, { id: "SLEEPTALK" },
                { id: "SLUDGEBOMB" }, { id: "SLUDGEWAVE" }, { id: "SPIKES" }, { id: "STEALTHROCK" }, { id: "STOMPINGTANTRUM" },
                { id: "STONEEDGE" }, { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "TAKEDOWN" }, { id: "TOXIC" },
                { id: "TOXICSPIKES" }, { id: "TRAILBLAZE" }, { id: "VENOSHOCK" }, { id: "WATERFALL" }, { id: "WATERPULSE" }
            ],
            egg: [
                { id: "ACIDSPRAY" }, { id: "AFTERYOU" }, { id: "ANCIENTPOWER" }, { id: "COUNTER" }, { id: "CURSE" },
                { id: "DOUBLEKICK" }, { id: "HAZE" }, { id: "MIST" }, { id: "RECOVER" }, { id: "SPITUP" },
                { id: "STOCKPILE" }, { id: "SWALLOW" }
            ]
        }
    },
    {
        id: "30",
        num: 30,
        name: "Clodsire",
        types: ["Veneno", "Tierra"],
        category: "Pez Púas",
        flavor: "Cuando se siente amenazado, repele al enemigo con sus gruesas púas retráctiles. Esta técnica tan peligrosa es un arma de doble filo.",
        stats: { hp: 130, atk: 75, def: 60, spa: 45, spd: 100, spe: 20 },
        abilities: [
            { type: "Habilidad 1", id: "POISONPOINT" },
            { type: "Habilidad 2", id: "WATERABSORB" },
            { type: "Oculta", id: "UNAWARE" }
        ],
        evolution: {
            prevo: { id: "28-paldea", method: "Nivel 20" },
            evos: []
        },
        credits: { design: "GameFreak", sprite: "GameFreak" },
        moves: {
            level: [
                { lv: -1, id: "AMNESIA" }, { lv: 1, id: "POISONSTING" }, { lv: 1, id: "TAILWHIP" },
                { lv: 4, id: "TOXICSPIKES" }, { lv: 8, id: "MUDSHOT" }, { lv: 12, id: "POISONTAIL" },
                { lv: 16, id: "SLAM" }, { lv: 21, id: "YAWN" }, { lv: 24, id: "POISONJAB" },
                { lv: 30, id: "SLUDGEWAVE" }, { lv: 36, id: "MEGAHORN" }, { lv: 40, id: "TOXIC" },
                { lv: 48, id: "EARTHQUAKE" }
            ],
            tutor: [
                { id: "ACIDSPRAY" }, { id: "AMNESIA" }, { id: "BODYPRESS" }, { id: "BODYSLAM" }, { id: "BULLDOZE" },
                { id: "CHILLINGWATER" }, { id: "CURSE" }, { id: "DIG" }, { id: "DOUBLEEDGE" }, { id: "EARTHPOWER" },
                { id: "EARTHQUAKE" }, { id: "ENDURE" }, { id: "FACADE" }, { id: "GIGAIMPACT" }, { id: "GUNKSHOT" },
                { id: "HAZE" }, { id: "HEAVYSLAM" }, { id: "HELPINGHAND" }, { id: "HIGHHORSEPOWER" }, { id: "HYDROPUMP" },
                { id: "HYPERBEAM" }, { id: "IRONHEAD" }, { id: "LIQUIDATION" }, { id: "LOWKICK" }, { id: "MUDDYWATER" },
                { id: "MUDSHOT" }, { id: "MUDSLAP" }, { id: "POISONJAB" }, { id: "POISONTAIL" }, { id: "PROTECT" },
                { id: "RAINDANCE" }, { id: "REST" }, { id: "ROCKSLIDE" }, { id: "ROCKTOMB" }, { id: "SANDSTORM" },
                { id: "SLEEPTALK" }, { id: "SLUDGEBOMB" }, { id: "SLUDGEWAVE" }, { id: "SPIKES" }, { id: "STEALTHROCK" },
                { id: "STOMPINGTANTRUM" }, { id: "STONEEDGE" }, { id: "SUBSTITUTE" }, { id: "SURF" }, { id: "TAKEDOWN" },
                { id: "TOXIC" }, { id: "TOXICSPIKES" }, { id: "TRAILBLAZE" }, { id: "VENOSHOCK" }, { id: "WATERFALL" },
                { id: "WATERPULSE" }, { id: "ZENHEADBUTT" }
            ],
            egg: []
        }
    },
];

