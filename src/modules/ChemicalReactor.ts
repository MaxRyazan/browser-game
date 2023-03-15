import {Module} from "../interfaces/Module";

export class ChemicalReactor implements Module {
    id: Number;
    lvl: Number;
    costInNP: Number;
    picture: String;
    requiredTech: [];
    belongsToRace: {id: Number, name: String};
    type: { military: Boolean; civilian: Boolean, neutral: Boolean };
    subject: {
        name: String;
        baseParams: { baseMass: Number; baseSignature: Number; requiredEnergy: Number; requiredCargo: Number; requiredWorkers: Number; baseCostInMaterials: { metal: Number; electronic: Number; polymers: Number }; requiredCRForBuild: Number; requiredIGForBuild: Number };
        bonusesToShip: { energy: Number; cargo: Number; speedInSubspace: Number; speedInNormalSpace: Number; mining: Boolean; scanning: Boolean; construction: Boolean; lifeSupporting: Boolean; autoPilot: Boolean };
    }
    commands: { flyInNormalSpace: Boolean; flyInSubSpace: Boolean; mine: Boolean; attack: Boolean; build: Boolean; scan: Boolean };


    constructor(name: String,
                lvl: Number,
                picture: String,
                requiredTech: [],
                belongsToRace: {id: Number, name: String},
                type: {military: Boolean; civilian: Boolean, neutral: Boolean },
                subject: {
                    name: String;
                    baseParams: { baseMass: Number; baseSignature: Number; requiredEnergy: Number; requiredCargo: Number; requiredWorkers: Number; baseCostInMaterials: { metal: Number; electronic: Number; polymers: Number }; requiredCRForBuild: Number; requiredIGForBuild: Number },
                    bonusesToShip: {energy: Number, cargo: Number, speedInSubspace: Number, speedInNormalSpace: Number, mining: Boolean, scanning: Boolean, construction: Boolean, lifeSupporting: Boolean, autoPilot: Boolean},
                },
                commands?: { flyInNormalSpace: Boolean; flyInSubSpace: Boolean; mine: Boolean; attack: Boolean; build: Boolean; scan: Boolean }){
        this.lvl = lvl;
        this.picture = picture;
        this.requiredTech = requiredTech;
        this.type = type;
        this.subject = subject;
        this.belongsToRace = belongsToRace;
        this.commands = commands
    }

}