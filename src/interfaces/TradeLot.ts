import {ModuleInterface} from "./ModuleInterface";

export interface TradeLot extends ModuleInterface{
    lotId: Number
    lotFrom: {id: Number, login: String},
    subject: ModuleInterface
    minAmount: Number,
    amount: Number,
    pricePerUnit: Number,
    pricePerLot: Number
}