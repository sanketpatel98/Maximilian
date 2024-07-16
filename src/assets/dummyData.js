const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    level: 18,
    abilities: [
      { name: "Overgrow", color: "green", contrastColor: "white" },
      { name: "Chlorophyll", color: "green", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    weaknesses: ["Fire", "Psychic", "Flying", "Ice"],
    threats: [
      { name: "Charizard", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" },
      { name: "Alakazam", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png" },
      { name: "Articuno", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png" }
    ]
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    level: 22,
    abilities: [
      { name: "Blaze", color: "red", contrastColor: "white" },
      { name: "Solar Power", color: "red", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    weaknesses: ["Water", "Rock", "Ground"],
    threats: [
      { name: "Blastoise", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" },
      { name: "Onix", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png" },
      { name: "Golem", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png" }
    ]
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    level: 15,
    abilities: [
      { name: "Torrent", color: "blue", contrastColor: "white" },
      { name: "Rain Dish", color: "blue", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    weaknesses: ["Electric", "Grass"],
    threats: [
      { name: "Raichu", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" },
      { name: "Venusaur", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" },
      { name: "Electabuzz", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png" }
    ]
  },
  {
    id: 4,
    name: "Pikachu",
    type: "Electric",
    level: 28,
    abilities: [
      { name: "Static", color: "yellow", contrastColor: "black" },
      { name: "Lightning Rod", color: "yellow", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    weaknesses: ["Ground"],
    threats: [
      { name: "Golem", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png" },
      { name: "Rhydon", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png" },
      { name: "Dugtrio", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png" }
    ]
  },
  {
    id: 5,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    level: 12,
    abilities: [
      { name: "Cute Charm", color: "pink", contrastColor: "black" },
      { name: "Competitive", color: "pink", contrastColor: "black" },
      { name: "Friend Guard", color: "pink", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    weaknesses: ["Steel", "Poison"],
    threats: [
      { name: "Steelix", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/208.png" },
      { name: "Muk", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png" },
      { name: "Aggron", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png" }
    ]
  },
  {
    id: 6,
    name: "Meowth",
    type: "Normal",
    level: 25,
    abilities: [
      { name: "Pickup", color: "gray", contrastColor: "black" },
      { name: "Technician", color: "gray", contrastColor: "black" },
      { name: "Unnerve", color: "gray", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    weaknesses: ["Fighting"],
    threats: [
      { name: "Machamp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" },
      { name: "Hitmonlee", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png" },
      { name: "Lucario", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png" }
    ]
  },
  {
    id: 7,
    name: "Psyduck",
    type: "Water",
    level: 30,
    abilities: [
      { name: "Damp", color: "blue", contrastColor: "white" },
      { name: "Cloud Nine", color: "blue", contrastColor: "white" },
      { name: "Swift Swim", color: "blue", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    weaknesses: ["Electric", "Grass"],
    threats: [
      { name: "Raichu", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png" },
      { name: "Venusaur", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" },
      { name: "Jolteon", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png" }
    ]
  },
  {
    id: 8,
    name: "Machop",
    type: "Fighting",
    level: 18,
    abilities: [
      { name: "Guts", color: "red", contrastColor: "white" },
      { name: "No Guard", color: "red", contrastColor: "white" },
      { name: "Steadfast", color: "red", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    weaknesses: ["Psychic", "Flying", "Fairy"],
    threats: [
      { name: "Alakazam", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png" },
      { name: "Pidgeot", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png" },
      { name: "Gardevoir", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png" }
    ]
  },
  {
    id: 9,
    name: "Gastly",
    type: "Ghost/Poison",
    level: 35,
    abilities: [
      { name: "Levitate", color: "purple", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    weaknesses: ["Ghost", "Psychic", "Dark"],
    threats: [
      { name: "Gengar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" },
      { name: "Mewtwo", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png" },
      { name: "Umbreon", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png" }
    ]
  },
  {
    id: 10,
    name: "Eevee",
    type: "Normal",
    level: 20,
    abilities: [
      { name: "Run Away", color: "gray", contrastColor: "black" },
      { name: "Adaptability", color: "gray", contrastColor: "black" },
      { name: "Anticipation", color: "gray", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    weaknesses: ["Fighting"],
    threats: [
      { name: "Machamp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" },
      { name: "Hariyama", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/297.png" },
      { name: "Lucario", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png" }
    ]
  },
  {
    id: 11,
    name: "Snorlax",
    type: "Normal",
    level: 40,
    abilities: [
      { name: "Immunity", color: "gray", contrastColor: "black" },
      { name: "Thick Fat", color: "gray", contrastColor: "black" },
      { name: "Gluttony", color: "gray", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    weaknesses: ["Fighting"],
    threats: [
      { name: "Machamp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" },
      { name: "Heracross", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png" },
      { name: "Blaziken", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png" }
    ]
  },
  {
    id: 12,
    name: "Gyarados",
    type: "Water/Flying",
    level: 38,
    abilities: [
      { name: "Intimidate", color: "blue", contrastColor: "white" },
      { name: "Moxie", color: "blue", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    weaknesses: ["Electric", "Rock"],
    threats: [
      { name: "Raikou", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png" },
      { name: "Aerodactyl", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png" },
      { name: "Zapdos", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png" }
    ]
  },
  {
    id: 13,
    name: "Dragonite",
    type: "Dragon/Flying",
    level: 40,
    abilities: [
      { name: "Inner Focus", color: "purple", contrastColor: "white" },
      { name: "Multiscale", color: "purple", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    weaknesses: ["Ice", "Rock", "Dragon", "Fairy"],
    threats: [
      { name: "Lapras", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png" },
      { name: "Cloyster", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png" },
      { name: "Salamence", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png" }
    ]
  },
  {
    id: 14,
    name: "Mewtwo",
    type: "Psychic",
    level: 40,
    abilities: [
      { name: "Pressure", color: "purple", contrastColor: "white" },
      { name: "Unnerve", color: "purple", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    weaknesses: ["Bug", "Ghost", "Dark"],
    threats: [
      { name: "Tyranitar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png" },
      { name: "Scizor", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png" },
      { name: "Gengar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" }
    ]
  },
  {
    id: 15,
    name: "Garchomp",
    type: "Dragon/Ground",
    level: 38,
    abilities: [
      { name: "Sand Veil", color: "brown", contrastColor: "white" },
      { name: "Rough Skin", color: "brown", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png",
    weaknesses: ["Ice", "Dragon", "Fairy"],
    threats: [
      { name: "Weavile", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png" },
      { name: "Salamence", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png" },
      { name: "Fairy Imposter Ditto", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" }
    ]
  },
  {
    id: 16,
    name: "Lucario",
    type: "Fighting/Steel",
    level: 36,
    abilities: [
      { name: "Steadfast", color: "red", contrastColor: "white" },
      { name: "Inner Focus", color: "red", contrastColor: "white" },
      { name: "Justified", color: "red", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
    weaknesses: ["Fighting", "Ground", "Fire"],
    threats: [
      { name: "Machamp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" },
      { name: "Gengar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" },
      { name: "Excadrill", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/530.png" }
    ]
  },
  {
    id: 17,
    name: "Greninja",
    type: "Water/Dark",
    level: 36,
    abilities: [
      { name: "Torrent", color: "blue", contrastColor: "white" },
      { name: "Protean", color: "blue", contrastColor: "white" },
      { name: "Battle Bond", color: "blue", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
    weaknesses: ["Fighting", "Bug", "Fairy"],
    threats: [
      { name: "Machamp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" },
      { name: "Scizor", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/212.png" },
      { name: "Togekiss", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png" }
    ]
  },
  {
    id: 18,
    name: "Incineroar",
    type: "Fire/Dark",
    level: 38,
    abilities: [
      { name: "Blaze", color: "red", contrastColor: "white" },
      { name: "Intimidate", color: "red", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/727.png",
    weaknesses: ["Water", "Fighting", "Rock", "Ground"],
    threats: [
      { name: "Primarina", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/730.png" },
      { name: "Gyarados", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png" },
      { name: "Incineroar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/727.png" }
    ]
  },
  {
    id: 19,
    name: "Zeraora",
    type: "Electric",
    level: 38,
    abilities: [
      { name: "Volt Absorb", color: "yellow", contrastColor: "black" },
      { name: "Lightning Rod", color: "yellow", contrastColor: "black" },
      { name: "Hidden Ability", color: "yellow", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/807.png",
    weaknesses: ["Ground"],
    threats: [
      { name: "Landorus", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/645.png" },
      { name: "Garchomp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png" },
      { name: "Excadrill", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/530.png" }
    ]
  },
  {
    id: 20,
    name: "Dragapult",
    type: "Dragon/Ghost",
    level: 40,
    abilities: [
      { name: "Clear Body", color: "purple", contrastColor: "white" },
      { name: "Infiltrator", color: "purple", contrastColor: "white" },
      { name: "Hidden Ability", color: "purple", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/887.png",
    weaknesses: ["Ice", "Dragon", "Fairy", "Dark", "Ghost"],
    threats: [
      { name: "Gengar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" },
      { name: "Hydreigon", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/635.png" },
      { name: "Aegislash", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/681.png" }
    ]
  }
];

export default pokemon;
