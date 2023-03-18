import store from "../store.js";
import {Lot} from "../entities/Lot.ts";
import {Mutations} from "./mutations.js";
const mutations = new Mutations()

export class Actions {

    async buyItem(){
        const sum =  store.state.confirmWindowInput / store.state.buyingLot.minAmount * store.state.buyingLot.pricePerUnit;
        const module = store.state.buyingLot.subject
        if(mutations.validateDataForBuyModule(sum, store.state.buyingLot.minAmount)) {
            store.state.buyingLot.amount -= store.state.confirmWindowInput
            mutations.addModuleToPlayerAllModules(module)
            mutations.changePlayerIGBalance(-sum)
            store.state.confirmWindowInput = ''
            store.state.confirmWindow = false
        }
    }




    createNewLot(){
        const moduleToSold = store.state.moduleToSold
        const minUnit = store.state.newLotMinUnit
        const count = store.state.newLotCount
        const price = store.state.newLotPrice

        if(moduleToSold.amount >= count && count >= minUnit){
            const newLot = new Lot(Number(minUnit), store.state.player, Number(count), Number(price), moduleToSold)
            moduleToSold.amount -= count
            store.state.allLots.push(newLot)
        }
        mutations.checkThatModulesAmountMoreThanZero(store.state.allPlayerModules)


    }

}

