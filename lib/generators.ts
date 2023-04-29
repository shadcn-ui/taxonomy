export type TScenarioModels = "fantasyRpg" | "landscapePortrait" | "animeStyle"

type TScenarioModelsToIds = {
    [key in TScenarioModels]: string
}
export const scenarioGenerators: TScenarioModelsToIds = {
    fantasyRpg: "DkCC2BfCQ8mhxnyFW1tXcw",
    landscapePortrait: "BnhDXzIrQxWk1c0bWe73_w",
    animeStyle: "PNqixjKURbiouk49_gYWCw",
}
