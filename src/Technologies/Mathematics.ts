import {Technology} from "../interfaces/Technology";

export class Mathematics implements Technology{

    constructor(
        public cost: 300,
        public id: 1,
        public name: 'Математика',
        public requiredTechs: {null}
    ) {}
}