import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {FakeData} from "./FAKE_DATA/FakeData.ts";
import planetStore from "./store_modules/planetStore.js";


const fakeData = new FakeData();

export default createStore({
    state: {
        player: fakeData.player,
        allPlanetarySystems: reactive([fakeData.solarSystem]),

        allLots: reactive([
            fakeData.lot1,
            fakeData.lot2,
            fakeData.lot3,
        ]),

        showTrade: ref(false),

        newLotCount:ref(''),
        newLotPrice:ref(''),
        newLotMinUnit:ref(''),
        moduleToSold: reactive({}),
        allPlayerModules: reactive([]),
        projectInOrder: reactive({}),
        tradeFilterInput: ref(''),
        tradeFilterRace: ref(''),
        newLotFilterRace: ref(''),
        newLotFilterInput: ref(''),
        confirmWindow: ref(false),
        confirmWindowInput: ref(''),
        buyingLot: reactive({}),
    },

    modules: {
       planetStore: planetStore
    }
})