import {Race} from "./Race";

export class Cyborgs extends Race {
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
        super();
        this.id = 2
        this.name = 'Киборги'
        this.params = {
            science: 1,
            industry: 1,
            shipbuilding: 1.2,
            resource_extraction: 1
        }
        this.picture = './src/assets/images/cyborgs.jpg'
        this.atmosphere = false
    }
}