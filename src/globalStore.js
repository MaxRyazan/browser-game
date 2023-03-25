import {createStore} from "vuex";
import planetStore from "./store_modules/planetStore.js";
import tradeStore from "./store_modules/tradeStore.js";
import helpStore from "./store_modules/helpStore.js";

export default createStore({
    state: {},
    modules: {
        tradeStore,
        planetStore,
        helpStore
    }
})