export interface JobEntity {
    id: number
    name: string
    group_id: number
    script: string
    doNotHook: boolean
    platform: string
    maxSurvivalTime: number
    displayUserActionLayer: boolean
    userDataDir: string
    headless: boolean
    created: Date
    updated: Date
}
