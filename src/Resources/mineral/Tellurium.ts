import {Resource} from "../../interfaces/Resource";

export class Tellurium implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    constructor() {
        this.baseMass = 3
        this. id = 6
        this.name = 'Теллурий'
    }
}