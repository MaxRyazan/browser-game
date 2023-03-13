import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {Humans} from "./races/Humans.ts";

export default createStore({
    state: {
        allLots: reactive([
            { id: 1, lotFrom: 'DenisPrime', name: "Двигательный отсек", lvl: 255, race: 'Люди', minAmount: 1, amount: 200, pricePerUnit: 12, pricePerLot: 2400 },
            { id: 2, lotFrom: 'Столица', name: "Рабочий отсек", lvl: 1000, race: 'Люди', minAmount: 1, amount: 1200, pricePerUnit: 12, pricePerLot: 2400 },
            { id: 3, lotFrom: 'Галактика', name: "Щитовая платформа", lvl: 10000, race: 'Некроны', minAmount: 1, amount: 2200, pricePerUnit: 12, pricePerLot: 2400 },
            { id: 4, lotFrom: 'Ug_uwz', name: "Гипердвигатель", lvl: 250000, race: 'Некроны', minAmount: 1, amount: 2000, pricePerUnit: 200, pricePerLot: 400000 },
            { id: 5, lotFrom: 'Верфи', name: "Фотонный двигатель", lvl: 300000, race: 'Киборги', minAmount: 1, amount: 2100, pricePerUnit: 150, pricePerLot: 315000 },
            { id: 6, lotFrom: 'Minax:0', name: "Гравитационный двигатель", lvl: 155000, race: 'Некроны', minAmount: 1, amount: 21100, pricePerUnit: 122, pricePerLot: 2574200 },
            { id: 7, lotFrom: '_SoloPrime_', name: "Лёгкий лазер", lvl: 100000, race: 'Киборги', minAmount: 1, amount: 12200, pricePerUnit: 27, pricePerLot: 329400 },
            { id: 8, lotFrom: 'ElizVeryPrime', name: "Ионная пушка", lvl: 120000, race: 'Люди', minAmount: 1, amount: 3200, pricePerUnit: 125, pricePerLot: 300000 },
        ]),

        showTrade: ref(false),

        playerMoney: reactive({CR: 100000, IG: 3201}),

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
                        storage: [{
                            id:1, name:'Химический реактор', lvl:1, picture:'', requiredTech: [],
                            type: {military: false, civilian: false, neutral: true},
                            baseParams:{
                                baseMass: 120, baseSignature: 8, requiredEnergy: 0, requiredCargo: 11,
                                requiredWorkers: 1,
                                baseCostInMaterials: { metal: 1, electronic: 2, polymers: 2 },
                                requiredCRForBuild: 3, requiredIGForBuild: 0
                            },
                            belongsToRace: {id:1, name: 'Humans'},
                            bonusesToShip: {energy: 100, cargo: 0, speedInSubspace: 0,
                                speedInNormalSpace: 0, mining: 0, scanning: 0,
                                construction: 0, lifeSupporting: 0, autoPilot: 0},
                        }],
                        picture: ''
                    },
                    inhabitedPlanets: []},
                playerShips: []
            }
        }),
        sciencesInResearch: reactive({id: 1, name: 'Кинетическая пушка', lvl: 50, timeWhenComplete: 1688653426489, costInNP: 50000}),

        projectInOrder: reactive({}),
        tradeFilterInput: ref(''),
        tradeFilterRace: ref(''),
    },

})