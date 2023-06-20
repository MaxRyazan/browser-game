import {ShipInterface} from "../interfaces/ShipInterface";
import {Material} from "../interfaces/Material";
import {Module} from "./Module";

export abstract class Ship implements ShipInterface{
    baseBonusSlots: Number;

    baseCargo: Number;

    baseCommands: [];

    baseInitiative: Number;

    baseMass: Number;

    baseHP: Number

    maxModules: Number;

    modules: Module[];

    basePriceInCR: Number;

    basePriceInMaterials: Material[];

    baseSignature: Number;

    id: Number;

    name: String;

    picture: String;

}