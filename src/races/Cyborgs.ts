import {Race} from "../interfaces/Race";

export class Cyborgs implements Race {
    id: number;
    name: String;
    params: { science: number; industry: number; shipbuilding: number; resource_extraction: number };
    picture: String;
    atmosphere: Boolean;

    constructor() {
        this.name = "Cyborgs";
        this.params = {science: 1, industry: 1, shipbuilding: 1.2, resource_extraction: 1};
        this.picture = '';
        this.atmosphere = false
    }


}