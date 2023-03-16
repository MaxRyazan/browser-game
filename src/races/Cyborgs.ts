import {Race} from "../interfaces/Race";

export class Cyborgs implements Race {
    public id: 2
    public name: 'Киборги'
    public params: {
        science: 1,
        industry: 1,
        shipbuilding: 1.2,
        resource_extraction: 1
    }
    public picture: './src/assets/images/cyborgs.jpg'
    public atmosphere: false

}