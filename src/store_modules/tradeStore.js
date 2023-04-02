import {createStore} from "vuex";
import {reactive, ref} from "vue";
import {FakeData} from "../FAKE_DATA/FakeData.ts";
import {Planet} from "../entities/Planet.ts";

const fakeData = new FakeData();

export default createStore({
    state: {
        player: fakeData.player,

        currentPlanet: fakeData.player.playerData.playerPlanets.homeWorld,
        buildingsEffectiveCoefficient: 1,


        allLots: reactive([
            fakeData.lot1,
            fakeData.lot2,
            fakeData.lot3,
        ]),

        showTrade: false,
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
        confirmWindow: false,
        confirmWindowInput: ref(''),
        buyingLot: reactive({}),
    },
})