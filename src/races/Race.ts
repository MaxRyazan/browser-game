import {RaceInterface} from "../interfaces/RaceInterface";

export class Race implements RaceInterface{
    atmosphere: Boolean;
    id: Number;
    name: String;
    params: { science: Number; industry: Number; shipbuilding: Number; resource_extraction: Number };
    picture: String;
}