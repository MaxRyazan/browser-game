import store from "../store.js";

export class Actions {

    async buyItem(item){
        store.state.confirmWindow = true
        await console.log(item)
    }

}

