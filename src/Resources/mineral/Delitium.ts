import {Resource} from "../../interfaces/Resource";

export class Delitium implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    constructor() {
        this.baseMass = 3
        this. id = 4
        this.name = 'Делитий'
    }
}