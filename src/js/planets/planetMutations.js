import planetStore from "../../store_modules/planetStore.js";

export class PlanetMutations{

    togglePlanetMenuVision(){
        planetStore.state.visibilityPlanetMenu = !planetStore.state.visibilityPlanetMenu
    }
}