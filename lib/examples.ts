import { TScenarioModels } from "./generators"

export type TImage = {
    url: string
    prompt: string
}

export type TExample = {
    images: TImage[]
    slug: string
    heading: string
}

export type TScenarioExamples = {
    [key in TScenarioModels]: TExample
}

export const examples: TScenarioExamples = {
    fantasyRpg: {
        slug: "fantasy-rpg",
        heading: "Fantasy RPG",
        images: [
            {
                url: "/examples/fantasyRpg/owl.png",
                prompt: "Wise owl character, bioshock infinite, steampunk, aetherpunk",
            },
            {
                url: "/examples/fantasyRpg/neo.png",
                prompt: "Neo in the matrix, cyberpunk, sci-fi, dystopian future",
            },
            {
                url: "/examples/fantasyRpg/illidan.png",
                prompt: "Illidan Stormrage from world of warcraft",
            },
            {
                url: "/examples/fantasyRpg/warhammer.png",
                prompt: "Warhammer 40k, Fantasy warrior",
            },
            {
                url: "/examples/fantasyRpg/lux.png",
                prompt: "Lux from League of Legends, fantasy, magic, mage, wizard",
            },
            {
                url: "/examples/fantasyRpg/vayne.png",
                prompt: "Vayne from League of Legends",
            },
            {
                url: "/examples/fantasyRpg/scrapyard.png",
                prompt: "A man in a scrapyard, cyberpunk",
            },
            {
                url: "/examples/fantasyRpg/lich-king.png",
                prompt: "The Lich King from World of Warcraft",
            },
            {
                url: "/examples/fantasyRpg/deathwing.png",
                prompt: "Deathwing from world of warcraft",
            },
            {
                url: "/examples/fantasyRpg/anduinn.png",
                prompt: "King Anduinn Wrynn from World of Warcraft",
            },
            {
                url: "/examples/fantasyRpg/ekko.png",
                prompt: "Ekko from League of Legends",
            },
            {
                url: "/examples/fantasyRpg/thrall.png",
                prompt: "Warchief Thrall from World of Warcraft, desolate",
            },
        ],
    },
    animeStyle: {
        slug: "anime-style",
        heading: "Anime Style",
        images: [
            {
                url: "/examples/animeStyle/anime.png",
                prompt: "Kitsune girl, anime style, cyberpunk",
            },
            {
                url: "/examples/animeStyle/anime-girl.png",
                prompt: "Warrior princess, anime style",
            },
            {
                url: "/examples/animeStyle/levi.png",
                prompt: "Levi Ackerman from Attack on Titan, anime style",
            },
            {
                url: "/examples/animeStyle/anime-boy-1.png",
                prompt: "Anime boy wearing armor, vivid colors",
            },
            {
                url: "/examples/animeStyle/anime-boy-2.png",
                prompt: "Anime boy wearing armor, vivid colors",
            },
            {
                url: "/examples/animeStyle/hunter-x-hunter.png",
                prompt: "Hunter x hunter, Karupika, anime style",
            },
            {
                url: "/examples/animeStyle/demon-slayer-1.png",
                prompt: "Demon Slayer, anime style, vivid colors, full body, character portraite",
            },
            {
                url: "/examples/animeStyle/demon-slayer-2.png",
                prompt: "Demon Slayer, anime style, vivid colors, full body, character portraite",
            },
            {
                url: "/examples/animeStyle/demon-slayer-3.png",
                prompt: "Demon Slayer, anime style, vivid colors, full body, character portraite",
            },
            {
                url: "/examples/animeStyle/demon-slayer-4.png",
                prompt: "Demon Slayer, anime style, vivid colors, full body, character portraite",
            },
            {
                url: "/examples/animeStyle/fullmetal.png",
                prompt: "Fullmetal alchemist brotherhood, anime style, 16 bit",
            },
            {
                url: "/examples/animeStyle/fullmetal-2.png",
                prompt: "Fullmetal alchemist brotherhood, anime style, 16 bit",
            },
        ],
    },
    landscapePortrait: {
        slug: "landscape-portrait",
        heading: "Landscape Portrait",
        images: [
            {
                url: "/examples/landscapePortrait/tower.png",
                prompt: "A celestial tower in the sky, god like qualities, olympus, bright vivid colors",
            },
            {
                url: "/examples/landscapePortrait/farmhouse.png",
                prompt: "A farmhouse in a grassy valley, warm colors, cozy vibes, stardew valley",
            },
            {
                url: "/examples/landscapePortrait/gothic-1.png",
                prompt: "Gothic castle, castlevania, metroidvania, dark colors, cloudy",
            },
            {
                url: "/examples/landscapePortrait/gothic-2.png",
                prompt: "Gothic castle, castlevania, metroidvania, dark colors, cloudy",
            },
            {
                url: "/examples/landscapePortrait/gothic-3.png",
                prompt: "Gothic castle, castlevania, metroidvania, dark colors, cloudy",
            },
            {
                url: "/examples/landscapePortrait/gothic-4.png",
                prompt: "Gothic castle, castlevania, metroidvania, dark colors, cloudy",
            },
            {
                url: "/examples/landscapePortrait/horde-1.png",
                prompt: "A horde war camp, rough colors, cloudy, desolate",
            },
            {
                url: "/examples/landscapePortrait/horde-2.png",
                prompt: "A horde war camp, rough colors, cloudy, desolate",
            },
            {
                url: "/examples/landscapePortrait/horde-3.png",
                prompt: "A horde war camp, rough colors, cloudy, desolate",
            },
            {
                url: "/examples/landscapePortrait/horde-4.png",
                prompt: "A horde war camp, rough colors, cloudy, desolate",
            },
            {
                url: "/examples/landscapePortrait/bladerunner-1.png",
                prompt: "Blade runner city, cyberpunk, aetherpunk, cloudy, dark colors, neon lights",
            },
            {
                url: "/examples/landscapePortrait/bladerunner-2.png",
                prompt: "Blade runner city, cyberpunk, aetherpunk, cloudy, dark colors, neon lights",
            },
            {
                url: "/examples/landscapePortrait/bladerunner-3.png",
                prompt: "Blade runner city, cyberpunk, aetherpunk, cloudy, dark colors, neon lights",
            },
            {
                url: "/examples/landscapePortrait/bladerunner-4.png",
                prompt: "Blade runner city, cyberpunk, aetherpunk, cloudy, dark colors, neon lights",
            },
        ],
    },
}
