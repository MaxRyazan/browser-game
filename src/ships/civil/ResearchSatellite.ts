import {Ship} from "../../entities/Ship";
import {Steel} from "../../materials/Steel";
import {Polymers} from "../../materials/Polymers";
import {Electronics} from "../../materials/Electronics";
import {Vettur} from "../../materials/Vettur";


export class ResearchSatellite extends Ship {
    constructor() {
        super()

        this.id = 1;

        this.name = 'Исследовательский спутник';

        this.picture = 'src/assets/images/ships/ResearchSatellite.png';

        this.baseMass = 800;

        this.baseHP = 10;

        this.baseCargo = 5;

        this.maxTonnage = 50

        this.modules = [];

        this.baseBonusSlots = 0;

        this.baseCommands = [
            'produceBonusNP'
        ];

        this.baseInitiative = 1;

        this.basePriceInCR = 25000;

        this.basePriceInMaterials = [
            new Steel(2),
            new Polymers(2),
            new Electronics(2),
            new Vettur(2)
        ];

        this.baseSignature = 250;

    }
}