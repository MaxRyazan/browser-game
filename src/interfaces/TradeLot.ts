import {Player} from "../entities/Player";
import {Module} from "./Module";

export interface TradeLot{
    id: number
    lotFrom: Player
    subject: Module
    minAmount: Number
    fullAmount: Number
    pricePerMinAmount: Number
    pricePerFullAmount: Number
}