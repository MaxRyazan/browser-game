import tradeStore from "./store_modules/tradeStore.js";
import variables from "./variables.js";

export default {

    getMetalOre(){
        return tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.metalOreId)[0]
    },
    getMineralOre(){
        return tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.mineralOreId)[0]
    },
    getTelluriumMineral(){
        return tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === variables.telluriumMineralId)[0]
    }
}