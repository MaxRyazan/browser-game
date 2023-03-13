export interface Building{
    id: Number
    name: String
    lvl: Number
    onGround: Boolean
    constInCR: Number
    constInIG: Number
    costInMaterials:{
        metals: Number,
        electronics: Number
        polymers: Number
    }
    canProduce:{
        resourcesInHour:{
            metals: Number,
            electronics: Number
            polymers: Number
        },
        scienceInHour: Number
        CRInHour: Number
    }
}