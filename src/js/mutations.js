import store from "../store.js";

export class Mutations {
    toggleTrade(){
        store.state.showTrade = !store.state.showTrade
    }

    checkRace(race){
        switch (race){
            case "Велиды" : return 'velid';
            case "Гелеоны" : return 'geleon';
            case "Гларги" : return 'glarg';
            case "Тормали" : return 'tormali';
            case "Астоксы" : return 'astoks';
            case "Зекты" : return 'zekt';
            case "Мруны" : return 'mrun';
            default : return 'pt'
        }
    }
    getHours(param){
        return Math.floor((param - Date.now()) / 1000 / 60 / 60)
    }

    getMinutes(param){
        const millis = (param - Date.now());
        const hours = Math.floor(millis / 1000 / 60 / 60)
        const millisInRest = Math.round(millis - hours * 3600000)
        return Math.round(millisInRest / 1000 / 60)
    }

}