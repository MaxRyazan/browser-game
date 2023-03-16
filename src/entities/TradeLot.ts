import {TradeLot} from "../interfaces/TradeLot";
import {Module} from "../interfaces/Module";

export class Lot implements TradeLot {
    lotId: Number;
    lotFrom: { id: Number; login: String };
    minAmount: number;
    amount: number;
    pricePerUnit: number;
    pricePerLot: Number;
    subject: Module;

    constructor(minAmount: number, lotFrom:  { id: Number; login: String }, amount: number, pricePerUnit: number, subject: Module) {
        this.lotId = 1
        this.lotFrom = lotFrom
        this.minAmount = minAmount
        this.amount = amount
        this.pricePerUnit = pricePerUnit
        this.pricePerLot = amount / minAmount * pricePerUnit
        this.subject = subject
    }
}