import {TradeLot} from "../interfaces/TradeLot";
import {ModuleInterface} from "../interfaces/ModuleInterface";

export class Lot implements TradeLot {
    lotId: Number;
    lotFrom: { id: Number; login: String };
    minAmount: number;
    amount: number;
    pricePerUnit: number;
    pricePerLot: Number;
    subject: ModuleInterface;

    constructor(minAmount: number, lotFrom:  { id: Number; login: String }, amount: number, pricePerUnit: number, subject: ModuleInterface) {
        this.lotId = 1
        this.lotFrom = lotFrom
        this.minAmount = minAmount
        this.amount = amount
        this.pricePerUnit = pricePerUnit
        this.pricePerLot = amount / minAmount * pricePerUnit
        this.subject = subject
    }
}