import {Race} from "../interfaces/Race";

export class Necrons implements Race {
    id: number;
    name: String;
    params: { science: number; industry: number; shipbuilding: number; resource_extraction: number };
    picture: String;
    atmosphere: Boolean;

    constructor() {
        this.name = "Necrons";
        this.params = {science: 1, industry: 1.2, shipbuilding: 1, resource_extraction: 1};
        this.picture = '';
        this.atmosphere = true;
    }
}