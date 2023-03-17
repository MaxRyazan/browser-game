import store from "../store.js";
import {Lot} from "../entities/Lot.ts";



export class Actions {

    async buyItem(){
        store.state.buyingLot.amount = store.state.confirmWindowInput
        const priceOfBuy = store.state.buyingLot.amount * store.state.buyingLot.lot.pricePerUnit
        const buyingLot = store.state.allLots.filter(lot => lot.id === store.state.buyingLot.lot.id)[0]
        store.state.player.playerData.playerMoney.IG = store.state.player.playerData.playerMoney.IG - priceOfBuy

        const buyingModule = buyingLot.subject

        const module = {
            id: buyingModule.id,
            race: buyingModule.belongsToRace.name,
            name: buyingModule.name,
        }

        store.state.allPlayerModules.push(module)


    }

    createNewLot(){
        const moduleToSold = store.state.moduleToSold
        const minUnit = store.state.newLotMinUnit
        const count = store.state.newLotCount
        const price = store.state.newLotPrice

        const newLot = new Lot(Number(minUnit), store.state.player, Number(count), Number(price), moduleToSold)
        console.log(newLot)
    }

}

