import {Ship} from "../interfaces/Ship";

class PrimitiveSatellite implements Ship {
    id: Number;
    name: String;
    baseMass: Number;
    baseSignature: Number;
    baseCargo: Number;
    baseInitiative: Number;
    baseEnginesSlots: Number;
    baseModulesSlots: Number;
    baseWeaponSlots: Number;
    baseProtectionSlots: Number;
    baseBonusSlots: Number;
    basePriceInCR: Number;
    picture: String;
    basePriceInMaterials: { metals: number; electronics: number; polymers: number; lifeSupportsSystems: Boolean };
    baseCommands: {};
    baseRequiredModules: { lifeSupportsSystems: Boolean; weaponActivateSystem: Boolean; resourcesProcessingSystem: Boolean; autoPilot: Boolean };

    constructor(name: String, baseMass: Number, baseSignature: Number,baseCargo: Number,
                baseInitiative: Number, baseEnginesSlots: Number, baseModulesSlots: Number,baseWeaponSlots: Number,
                baseProtectionSlots: Number, baseBonusSlots: Number, basePriceInCR: Number, picture: String,
                basePriceInMaterials: { metals: number; electronics: number; polymers: number; lifeSupportsSystems: Boolean },
                baseRequiredModules: { lifeSupportsSystems: Boolean; weaponActivateSystem: Boolean; resourcesProcessingSystem: Boolean; autoPilot: Boolean },
                baseCommands: {}){
        this.name = name;
        this.baseMass = baseMass;
        this.baseSignature = baseSignature;
        this.baseCargo = baseCargo;
        this.baseInitiative = baseInitiative;
        this.baseEnginesSlots = baseEnginesSlots;
        this.baseModulesSlots = baseModulesSlots;
        this.baseWeaponSlots = baseWeaponSlots;
        this.baseProtectionSlots = baseProtectionSlots;
        this.baseBonusSlots = baseBonusSlots;
        this.basePriceInCR = basePriceInCR;
        this.picture = picture;
        this.basePriceInMaterials = basePriceInMaterials;
        this.baseCommands = baseCommands;
        this.baseRequiredModules = baseRequiredModules;
    }
}