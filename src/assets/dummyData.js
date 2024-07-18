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
    weaknesses: [
      { type: "Fire", color: "orange", contrastColor: "black" },
      { type: "Psychic", color: "purple", contrastColor: "white" },
      { type: "Flying", color: "gray", contrastColor: "black" },
      { type: "Ice", color: "lightblue", contrastColor: "black" }
    ],
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
    weaknesses: [
      { type: "Water", color: "blue", contrastColor: "white" },
      { type: "Rock", color: "gray", contrastColor: "black" },
      { type: "Ground", color: "brown", contrastColor: "black" }
    ],
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
    weaknesses: [
      { type: "Electric", color: "yellow", contrastColor: "black" },
      { type: "Grass", color: "green", contrastColor: "white" }
    ],
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
    weaknesses: [
      { type: "Ground", color: "brown", contrastColor: "black" }
    ],
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
    weaknesses: [
      { type: "Steel", color: "gray", contrastColor: "black" },
      { type: "Poison", color: "purple", contrastColor: "white" }
    ],
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
    weaknesses: [
      { type: "Fighting", color: "red", contrastColor: "white" }
    ],
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
    weaknesses: [
      { type: "Electric", color: "yellow", contrastColor: "black" },
      { type: "Grass", color: "green", contrastColor: "white" }
    ],
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
    weaknesses: [
      { type: "Psychic", color: "purple", contrastColor: "white" },
      { type: "Flying", color: "gray", contrastColor: "black" },
      { type: "Fairy", color: "pink", contrastColor: "black" }
    ],
    threats: [
      { name: "Alakazam", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png" },
      { name: "Pidgeot", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png" },
      { name: "Gardevoir", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png" }
    ]
  },
  {
    id: 9,
    name: "Geodude",
    type: "Rock/Ground",
    level: 22,
    abilities: [
      { name: "Rock Head", color: "gray", contrastColor: "black" },
      { name: "Sturdy", color: "gray", contrastColor: "black" },
      { name: "Sand Veil", color: "gray", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    weaknesses: [
      { type: "Water", color: "blue", contrastColor: "white" },
      { type: "Grass", color: "green", contrastColor: "white" },
      { type: "Ice", color: "lightblue", contrastColor: "black" },
      { type: "Fighting", color: "red", contrastColor: "white" },
      { type: "Ground", color: "brown", contrastColor: "black" },
      { type: "Steel", color: "gray", contrastColor: "black" }
    ],
    threats: [
      { name: "Blastoise", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" },
      { name: "Venusaur", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" },
      { name: "Machamp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" }
    ]
  },
  {
    id: 10,
    name: "Eevee",
    type: "Normal",
    level: 20,
    abilities: [
      { name: "Run Away", color: "brown", contrastColor: "white" },
      { name: "Adaptability", color: "brown", contrastColor: "white" },
      { name: "Anticipation", color: "brown", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    weaknesses: [
      { type: "Fighting", color: "red", contrastColor: "white" }
    ],
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
    weaknesses: [
      { type: "Fighting", color: "red", contrastColor: "white" }
    ],
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
    weaknesses: [
      { type: "Electric", color: "yellow", contrastColor: "black" },
      { type: "Rock", color: "gray", contrastColor: "black" }
    ],
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
    weaknesses: [
      { type: "Ice", color: "lightblue", contrastColor: "black" },
      { type: "Rock", color: "gray", contrastColor: "black" },
      { type: "Dragon", color: "purple", contrastColor: "white" },
      { type: "Fairy", color: "pink", contrastColor: "black" }
    ],
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
    weaknesses: [
      { type: "Bug", color: "green", contrastColor: "black" },
      { type: "Ghost", color: "purple", contrastColor: "white" },
      { type: "Dark", color: "black", contrastColor: "white" }
    ],
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
    weaknesses: [
      { type: "Ice", color: "lightblue", contrastColor: "black" },
      { type: "Dragon", color: "purple", contrastColor: "white" },
      { type: "Fairy", color: "pink", contrastColor: "black" }
    ],
    threats: [
      { name: "Weavile", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png" },
      { name: "Salamence", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png" },
      { name: "Ditto", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" }
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
    weaknesses: [
      { type: "Fighting", color: "red", contrastColor: "white" },
      { type: "Ground", color: "brown", contrastColor: "black" },
      { type: "Fire", color: "orange", contrastColor: "black" }
    ],
    threats: [
      { name: "Blaziken", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png" },
      { name: "Garchomp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png" },
      { name: "Charizard", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" }
    ]
  },
  {
    id: 17,
    name: "Greninja",
    type: "Water/Dark",
    level: 34,
    abilities: [
      { name: "Torrent", color: "blue", contrastColor: "white" },
      { name: "Protean", color: "blue", contrastColor: "white" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
    weaknesses: [
      { type: "Electric", color: "yellow", contrastColor: "black" },
      { type: "Fairy", color: "pink", contrastColor: "black" },
      { type: "Bug", color: "green", contrastColor: "black" },
      { type: "Fighting", color: "red", contrastColor: "white" }
    ],
    threats: [
      { name: "Jolteon", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png" },
      { name: "Gardevoir", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png" },
      { name: "Heracross", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png" }
    ]
  },
  {
    id: 18,
    name: "Togekiss",
    type: "Fairy/Flying",
    level: 30,
    abilities: [
      { name: "Hustle", color: "pink", contrastColor: "black" },
      { name: "Serene Grace", color: "pink", contrastColor: "black" },
      { name: "Super Luck", color: "pink", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/468.png",
    weaknesses: [
      { type: "Electric", color: "yellow", contrastColor: "black" },
      { type: "Ice", color: "lightblue", contrastColor: "black" },
      { type: "Poison", color: "purple", contrastColor: "white" },
      { type: "Rock", color: "gray", contrastColor: "black" },
      { type: "Steel", color: "gray", contrastColor: "black" }
    ],
    threats: [
      { name: "Raikou", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/243.png" },
      { name: "Weavile", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/461.png" },
      { name: "Metagross", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png" }
    ]
  },
  {
    id: 19,
    name: "Metagross",
    type: "Steel/Psychic",
    level: 40,
    abilities: [
      { name: "Clear Body", color: "gray", contrastColor: "black" },
      { name: "Light Metal", color: "gray", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png",
    weaknesses: [
      { type: "Fire", color: "orange", contrastColor: "black" },
      { type: "Ground", color: "brown", contrastColor: "black" },
      { type: "Ghost", color: "purple", contrastColor: "white" },
      { type: "Dark", color: "black", contrastColor: "white" }
    ],
    threats: [
      { name: "Charizard", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" },
      { name: "Garchomp", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png" },
      { name: "Gengar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" }
    ]
  },
  {
    id: 20,
    name: "Sylveon",
    type: "Fairy",
    level: 35,
    abilities: [
      { name: "Cute Charm", color: "pink", contrastColor: "black" },
      { name: "Pixilate", color: "pink", contrastColor: "black" }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png",
    weaknesses: [
      { type: "Steel", color: "gray", contrastColor: "black" },
      { type: "Poison", color: "purple", contrastColor: "white" }
    ],
    threats: [
      { name: "Metagross", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png" },
      { name: "Gengar", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" },
      { name: "Toxicroak", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/454.png" }
    ]
  }
];

export default pokemon;
