import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {Humans} from "./races/Humans.ts";

export default createStore({
    state: {
        allLots: reactive([
            {
                id: 1,
                lotFrom: {id:1, login: 'Десантник'},
                subject: {id:1, name: 'Химический реактор', belongsToRace: {id: 1, name: 'Люди'}},
                minAmount: 1,
                amount: 200,
                pricePerUnit: 12,
                pricePerLot: 2400
            },
            {
                id: 2,
                lotFrom: {id:1, login: 'Десантник'},
                subject: {id:3, name: 'Альтах реактор', belongsToRace: {id: 2, name: 'Киборги'}},
                minAmount: 2,
                amount: 100,
                pricePerUnit: 120,
                pricePerLot: 6000
            },
            {
                id: 3,
                lotFrom: {id:1, login: 'Десантник'},
                subject: {id:2, name: 'Ядерный реактор', belongsToRace: {id: 3, name: 'Некроны'}},
                minAmount: 10,
                amount: 1000,
                pricePerUnit: 300,
                pricePerLot: 30000
            },

        ]),

        showTrade: ref(false),

        player: reactive({
            id: 1, login: 'Десантник', email: 'десант@mail.ru', password: 'pass',
            playerData: {
                race: Humans,
                playerMoney: {CR: 125500, IG: 810},
                playerScience: {learned: [], inLearnNow: {}},
                playerPlanets:{
                    homeWorld: {
                        id: 1,
                        name: 'Столица',
                        planetarySystem: 1,
                        orbit: 3,
                        atmosphere: true,
                        buildingsPoint: 800,
                        picture: './src/assets/images/home_planet.jpg',
                        storage: [
                            {
                                id:1,
                                name:'Химический реактор',
                                amount: 1,
                                picture:'./src/assets/images/chemical_reactor.jpg',
                                requiredTech: [],
                                type: {military: false, civilian: false, neutral: true},
                                baseParams:{
                                    baseMass: 120, baseSignature: 8, requiredEnergy: 0, requiredCargo: 11,
                                    requiredWorkers: 1,
                                    baseCostInMaterials: { metal: 1, electronic: 2, polymers: 2 },
                                    requiredCRForBuild: 3, requiredIGForBuild: 0
                                },
                                subject:{
                                    belongsToRace: {id:1, name: 'Люди'},
                                    bonusesToShip: {energy: 100, cargo: 0, speedInSubspace: 0,
                                        speedInNormalSpace: 0, mining: 0, scanning: 0,
                                        construction: 0, lifeSupporting: 0, autoPilot: 0},
                                },
                            }
                        ],
                    },
                    inhabitedPlanets: [
                        {
                            storage:[
                                {
                                    id:1,
                                    name:'Химический реактор',
                                    amount: 13,
                                    picture:'./src/assets/images/chemical_reactor.jpg',
                                    requiredTech: [],
                                    type: {military: false, civilian: false, neutral: true},
                                    baseParams:{
                                        baseMass: 120, baseSignature: 8, requiredEnergy: 0, requiredCargo: 11,
                                        requiredWorkers: 1,
                                        baseCostInMaterials: { metal: 1, electronic: 2, polymers: 2 },
                                        requiredCRForBuild: 3, requiredIGForBuild: 0
                                    },
                                    subject: {
                                        belongsToRace: {id:1, name: 'Люди'},
                                        bonusesToShip: {energy: 100, cargo: 0, speedInSubspace: 0,
                                            speedInNormalSpace: 0, mining: 0, scanning: 0,
                                            construction: 0, lifeSupporting: 0, autoPilot: 0},
                                    },
                                },
                                {
                                    id: 2,
                                    name: 'Ядерный реактор',
                                    amount: 1,
                                    picture: './src/assets/images/nuclear_reactor.jpg',
                                    requiredTech: [],
                                    type: {military: false, civilian: false, neutral: true},
                                    baseParams: {
                                        baseMass: 190, baseSignature: 11, requiredEnergy: 0, requiredCargo: 16,
                                        requiredWorkers: 1,
                                        baseCostInMaterials: {metal: 2, electronic: 4, polymers: 1},
                                        requiredCRForBuild: 5, requiredIGForBuild: 0
                                    },
                                    subject:{
                                        belongsToRace: {id: 3, name: 'Некроны'},
                                        bonusesToShip: {
                                            energy: 150, cargo: 0, speedInSubspace: 0,
                                            speedInNormalSpace: 0, mining: 0, scanning: 0,
                                            construction: 0, lifeSupporting: 0, autoPilot: 0},
                                    },
                                },
                                {
                                    id: 3,
                                    name: 'Альтах реактор',
                                    amount: 1,
                                    picture: './src/assets/images/altah_reactor.jpg',
                                    requiredTech: [],
                                    type: {military: false, civilian: false, neutral: true},
                                    baseParams: {
                                        baseMass: 80, baseSignature: 10, requiredEnergy: 0, requiredCargo: 26,
                                        requiredWorkers: 5,
                                        baseCostInMaterials: {metal: 12, electronic: 10, polymers: 12},
                                        requiredCRForBuild: 55, requiredIGForBuild: 0
                                    },
                                    subject: {
                                        belongsToRace: {id: 2, name: 'Киборги'},
                                        bonusesToShip: {
                                            energy: 350, cargo: 0, speedInSubspace: 0,
                                            speedInNormalSpace: 0, mining: 0, scanning: 0,
                                            construction: 0, lifeSupporting: 0, autoPilot: 0},
                                    },
                                },
                            ]
                        }
                    ]
                },
                playerShips: []
            }
        }),

        sciencesInResearch: reactive({id: 1, name: 'Кинетическая пушка', lvl: 50, timeWhenComplete: 1688653426489, costInNP: 50000}),

        projectInOrder: reactive({}),
        tradeFilterInput: ref(''),
        tradeFilterRace: ref(''),
        allPlayerModules: reactive([]),
        newLotFilterRace: ref(''),
        newLotFilterInput: ref(''),
        confirmWindow: ref(false),
        confirmWindowInput: ref('')
    },

})