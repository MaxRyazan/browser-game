import {Race} from "./Race";

export class Humans  extends Race {
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
        this.id = 1
        this.name = 'Люди'
        this.params = {
            science: 1.2,
            industry: 1,
            shipbuilding: 1,
            resource_extraction: 1
        }
        this.picture = './src/assets/images/humans.jpg'
        this.atmosphere = true
    }
}