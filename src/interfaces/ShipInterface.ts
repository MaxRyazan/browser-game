import {Material} from "./Material";
import {Module} from "../entities/Module";

export interface ShipInterface {

    id: Number

    name: String

    baseMass: Number

    baseSignature: Number

    baseHP: Number

    baseCargo: Number

    baseInitiative: Number

    maxModules: Number;

    modules: Module[];

    baseBonusSlots: Number

    basePriceInCR: Number

    picture: String

    basePriceInMaterials: Material[]

    baseCommands: []
}