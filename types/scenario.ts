export interface ScenarioInferenceResponse {
    inference: Inference
}

export interface Inference {
    id: string
    userId: string
    ownerId: string
    authorId: string
    modelId: string
    createdAt: string
    parameters: Parameters
    status: string
    images: any[]
    imagesNumber: number
    displayPrompt: string
}

export interface Parameters {
    numSamples: number
    guidance: number
    numInferenceSteps: number
    enableSafetyCheck: boolean
    width: number
    height: number
    type: string
    prompt: string
}

export interface ScenarioInferenceProgressResponse {
    inference: ScenarioInferenceProgress
}

export interface ScenarioInferenceProgress {
    id: string
    userId: string
    ownerId: string
    authorId: string
    modelId: string
    createdAt: string
    parameters: Parameters
    status: string
    images: ScenarioImage[]
    imagesNumber: number
    progress: number
    displayPrompt: string
}

export interface ScenarioImage {
    id: string
    url: string
    seed: string
    pixelated?: string
}
