import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {FakeData} from "./FAKE_DATA/FakeData.ts";

const fakeData = new FakeData();

export default createStore({
    state: {
        player: fakeData.player,
        allPlanetarySystems: reactive([fakeData.solarSystem]),

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


        projectInOrder: reactive({}),
        tradeFilterInput: ref(''),
        tradeFilterRace: ref(''),
        allPlayerModules: reactive([]),
        newLotFilterRace: ref(''),
        newLotFilterInput: ref(''),
        confirmWindow: ref(false),
        confirmWindowInput: ref(''),
        buyingLot: reactive({lot: {}, amount: Number})
    },

})