import {Resource} from "../../interfaces/Resource";

export class Quantium implements Resource {
    public baseMass: Number
    public id: Number
    public name: String
    constructor() {
        this.baseMass = 3
        this. id = 5
        this.name = 'Квантиум'
    }
}