export interface RaceInterface {
    id: Number,
    name: String,
    atmosphere: Boolean,
    picture: String,
    params: {
        science: Number,
        industry: Number,
        shipbuilding: Number,
        resource_extraction: Number
    },
}