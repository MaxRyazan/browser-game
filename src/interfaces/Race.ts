export interface Race{
    id: number,
    name: String,
    atmosphere: Boolean,
    picture: String,
    params: {
        science: number,
        industry: number,
        shipbuilding: number,
        resource_extraction: number
    },
}