import {Module} from "./Module";

export interface TradeLot extends Module{
    lotId: Number
    lotFrom: {id: Number, login: String},
    subject: Module
    minAmount: Number,
    amount: Number,
    pricePerUnit: Number,
    pricePerLot: Number
}