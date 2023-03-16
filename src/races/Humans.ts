import {Race} from "../interfaces/Race";

export class Humans implements Race {
    public id: 1
    public name: 'Люди'
    public params: {
        science: 1.2,
        industry: 1,
        shipbuilding: 1,
        resource_extraction: 1
    }
    public picture: './src/assets/images/humans.jpg'
    public atmosphere: true

}