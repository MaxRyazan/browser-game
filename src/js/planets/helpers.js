import tradeStore from "../../store_modules/tradeStore.js";
import planetStore from "../../store_modules/planetStore.js";
import variables from "../../variables.js";


export default {

    calculateWeightOfThisArray(param){
        let weight = 0;
        if(param.length){
            for(let i = 0; i < param.length; i ++){
                if(param[i].mass){
                    weight += param[i].mass * param[i].amount
                } else {
                    weight += param[i].baseMass * param[i].amount
                }
            }
        }
        return weight
    },

    isStorageNotFull(){
        return tradeStore.state.currentPlanet.allStorageUnitsMass <  tradeStore.state.currentPlanet.storage.maxCapacity
    },

    isResourceExistsOnStorage(resource, resourceAmount){
        return tradeStore.state.currentPlanet.storage.resources.filter(r => r.id === resource.id && r.amount >= resourceAmount).length !== 0
    },


    isMaterialExistOnStorage(material) {
        return tradeStore.state.currentPlanet.storage.materials.filter(m => m.id === material.id).length !== 0
    },


    produceMaterial(material, plants){
        const resourceStorage = tradeStore.state.currentPlanet.storage.resources
        const materialStorage = tradeStore.state.currentPlanet.storage.materials
        material.amount = variables.productionPower * plants.amount / plants.canProduce.type.length

        for(let i = 0 ; i < material.resourcesForProduction.length; i++){
           if(!this.isResourceExistsOnStorage(material.resourcesForProduction[i], material.resourcesForProduction[i].amount * plants.amount)){
               return
           }
        }
        if(this.isMaterialExistOnStorage(material)){
            let temp = materialStorage.filter(m => m.id === material.id)[0]
            temp.amount += material.amount
        } else {
            materialStorage.push(material)
        }
        for(let j = 0; j < material.resourcesForProduction.length; j ++){
            planetStore.commit('subtractResource', {
                resource: material.resourcesForProduction[j],
                amount:  material.resourcesForProduction[j].amount * plants.amount,
                from: resourceStorage
            })
        }
    },














    subtractResourcesAndApplyMaterials(material, plant, count, to){
        const materialsOnStorage = tradeStore.state.currentPlanet.storage.materials.filter(r => r.id === material.id)[0]
        for(let i = 0; i < material.resourcesForProduction.length; i ++){

            planetStore.commit('subtractResource',
                {resource: material.resourcesForProduction[i],
                    amount: material.resourcesForProduction[i].amount * plant.amount * count,
                    from: tradeStore.state.currentPlanet.storage.resources})
        }
        if(materialsOnStorage){
            planetStore.commit('applyResource',{resource: material, amount: material.amount, to: to})
        } else {
            tradeStore.state.currentPlanet.storage.materials.push(material)
        }
    },

    // tradeStore.state.currentPlanet.storage.materials

    checkEnergyAndAddBuildingToInProgressNow(building){
        planetStore.commit('checkThatEnergyOnPlanetIsEnough', building)
        if(!tradeStore.state.currentPlanet.isEnergyEnough){
            return  planetStore.commit('sendError', 'Дефицит энергии на планете!!')
        }
        planetStore.commit('build', building)
    },

    subtractCRAndIGForBuild(building){
        const neededCR = building.costInCR
        const neededIG = building.costInIG
        const currentCR = tradeStore.state.player.playerData.playerMoney.CR
        const currentIG = tradeStore.state.player.playerData.playerMoney.IG
        if(neededCR > currentCR || neededIG > currentIG){
            planetStore.commit('sendError', 'Нехватает денег для постройки здания!')
            return false
        } else {
            tradeStore.state.player.playerData.playerMoney.CR -= neededCR
            tradeStore.state.player.playerData.playerMoney.IG -= neededIG
        }
        return true
    },

    checkThatCrudeOreEnough(stationsId, crudeOreId) {
        const storage = tradeStore.state.currentPlanet.storage.resources
        const oreCleaners = tradeStore.state.currentPlanet.buildings.filter(b => b.id === stationsId)[0]
        const crudeOre = storage.filter( r => r.id === crudeOreId)[0]
        if(!crudeOre || crudeOre.amount < oreCleaners.canProduce.amount * oreCleaners.amount){
            return false
        }
        return true
    },

    isResourceEnough(resourceId, resourceAmount, enoughWhere, count){
        const resourceOnStorage = enoughWhere.filter(r => r.id === resourceId)[0]
        if(!resourceOnStorage || resourceOnStorage.amount <= 0 || resourceOnStorage.amount < resourceAmount * count){
            return false
        }
        return true
    },


    checkThatResourceNeedSomewhereElse(count, resource, excludeId) {
        let existingBuildingsTypeFour = [];
        if(!excludeId.length){
            existingBuildingsTypeFour = tradeStore.state.currentPlanet.buildings.filter(b => b.buildingType === 4)
        }
        if(excludeId.length ){
            for(let n = 0; n < excludeId.length; n++){
                existingBuildingsTypeFour = tradeStore.state.currentPlanet.buildings.filter(b =>b.buildingType === 4 && b.id !== excludeId[n])
            }
        }
        for (let i = 0; i < existingBuildingsTypeFour.length; i++) {
            for (let j = 0; j < existingBuildingsTypeFour[i].canProduce.type.length; j++) {
                for (let k = 0; k < existingBuildingsTypeFour[i].canProduce.type[j].resourcesForProduction.length; k++) {
                    if (resource.id === existingBuildingsTypeFour[i].canProduce.type[j].resourcesForProduction[k].id) {
                        count += (existingBuildingsTypeFour[i].canProduce.type[j].resourcesForProduction[k].amount) * existingBuildingsTypeFour[i].amount
                    }
                }
            }
        }
        return count === 0 ? 1 : count
    },



    calcAllMaterialsProductBuildings(){
        let buildingsCount = 0
        for(let i = 0; i < tradeStore.state.currentPlanet.buildings.length; i++){
            if(tradeStore.state.currentPlanet.buildings[i].buildingType === 4){
                buildingsCount += tradeStore.state.currentPlanet.buildings[i].amount
            }
        }
        return buildingsCount
    },

    calcFiveMinutesTimePeriodsCount(sub){
        return Number((sub / variables.fiveMinutes).toFixed(0))
    },

    calcMaxResourcesPercentForBuilding(plant){
        return plant.amount / this.calcAllMaterialsProductBuildings()
    },

    calcMaxProduceOfBuildingPerTime(subCount, plants){
       return variables.productionPower * subCount * plants.amount * plants.canProduce.type.length
    },


    applyMaterialsAndSubtractResources(constructionMaterials, applyTo, subtractFrom){
        if (this.isMaterialExistOnStorage(constructionMaterials)) {
            planetStore.commit('applyResource', {
                resource: constructionMaterials,
                amount: constructionMaterials.amount,
                to: applyTo
            })
        } else {
            tradeStore.state.currentPlanet.storage.materials.push(constructionMaterials)
        }
        for(let i = 0; i < constructionMaterials.resourcesForProduction.length; i ++){
            planetStore.commit('subtractResource', {
                resource: constructionMaterials.resourcesForProduction[i],
                amount: constructionMaterials.amount * constructionMaterials.resourcesForProduction[i].amount,
                from: subtractFrom
            })
        }
    },

}