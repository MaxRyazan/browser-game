export interface Ship {

    id: Number

    name: String

    baseMass: Number

    baseSignature: Number

    baseCargo: Number

    baseInitiative: Number

    baseEnginesSlots: Number

    baseModulesSlots: Number

    baseWeaponSlots: Number

    baseProtectionSlots: Number

    baseBonusSlots: Number

    basePriceInCR: Number

    picture: String

    basePriceInMaterials: {
        metals: number,
        electronics: number,
        polymers: number,
    }
    baseRequiredModules: {
        lifeSupportsSystems: Boolean,
        weaponActivateSystem: Boolean,
        resourcesProcessingSystem: Boolean,
        autoPilot: Boolean
    }

    baseCommands:{}
}