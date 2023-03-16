import {Race} from "../interfaces/Race";

export class Necrons implements Race {
    public id: 3
    public name: 'Некроны'
    public params: {
        science: 1,
        industry: 1.2,
        shipbuilding: 1,
        resource_extraction: 1
    }
    public picture: './src/assets/images/necrons.jpg'
    public atmosphere: true

}