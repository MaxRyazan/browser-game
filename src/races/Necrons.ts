import {Race} from "../interfaces/Race";

export class Necrons implements Race {
    public id: Number
    public name: String
    public params: {
        science: Number,
        industry: Number,
        shipbuilding: Number,
        resource_extraction: Number
    }
    public picture: String
    public atmosphere: Boolean

    constructor() {
        this.id = 3
        this.name = 'Некроны'
        this.params = {
            science: 1,
            industry: 1,
            shipbuilding: 1.2,
            resource_extraction: 1
        }
        this.picture = './src/assets/images/necrons.jpg'
        this.atmosphere = true
    }
}