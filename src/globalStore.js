import {createStore} from "vuex";
import planetStore from "./store_modules/planetStore.js";
import tradeStore from "./store_modules/tradeStore.js";

export default createStore({
    state: {},
    modules: {
        tradeStore: tradeStore,
        planetStore: planetStore,
    }
})