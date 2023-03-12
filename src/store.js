import {createStore} from "vuex";
import {reactive, ref} from "vue";

export default createStore({
    state: {
        allLots: reactive([
            { id: 1, lotFrom: 'DenisPrime', name: "Двигательный отсек", lvl: 255, race: 'Велиды', minAmount: 1, amount: 200, pricePerUnit: 12, pricePerLot: 2400 },
            { id: 2, lotFrom: 'Столица', name: "Рабочий отсек", lvl: 1000, race: 'Мруны', minAmount: 1, amount: 1200, pricePerUnit: 12, pricePerLot: 2400 },
            { id: 3, lotFrom: 'Галактика', name: "Щитовая платформа", lvl: 10000, race: 'Гларги', minAmount: 1, amount: 2200, pricePerUnit: 12, pricePerLot: 2400 },
            { id: 4, lotFrom: 'Ug_uwz', name: "Гипердвигатель", lvl: 250000, race: 'Гелеоны', minAmount: 1, amount: 2000, pricePerUnit: 200, pricePerLot: 400000 },
            { id: 5, lotFrom: 'Верфи', name: "Фотонный двигатель", lvl: 300000, race: 'Гелеоны', minAmount: 1, amount: 2100, pricePerUnit: 150, pricePerLot: 315000 },
            { id: 6, lotFrom: 'Minax:0', name: "Гравитационный двигатель", lvl: 155000, race: 'Гелеоны', minAmount: 1, amount: 21100, pricePerUnit: 122, pricePerLot: 2574200 },
            { id: 7, lotFrom: '_SoloPrime_', name: "Лёгкий лазер", lvl: 100000, race: 'Велиды', minAmount: 1, amount: 12200, pricePerUnit: 27, pricePerLot: 329400 },
            { id: 8, lotFrom: 'ElizVeryPrime', name: "Ионная пушка", lvl: 120000, race: 'Велиды', minAmount: 1, amount: 3200, pricePerUnit: 125, pricePerLot: 300000 },
        ]),

        showTrade: ref(false),

        playerMoney: reactive({CR: 100000, IG: 3201}),

        sciencesInResearch: reactive({id: 1, name: 'Кинетическая пушка', lvl: 50, timeWhenComplete: 1688653426489, costInNP: 50000}),

        projectInOrder: reactive({})
        // projectsInOrder: reactive([
        //     {
        //         id: 1,
        //         projectName: 'Patrol-killer',
        //         ship: {
        //             type: 'LineShip',  baseHp: 150000,  baseMass: 200000,  baseSignature: 102500, baseInitiative: 12, baseSlots: 30
        //         },
        //         shipLvl: 1250,
        //         engines:[],
        //         modules:[],
        //         weapons:[],
        //         protection:[],
        //         timeToComplete: 1222,
        //         costInNP: 50000
        //     }
        // ])

    },
})