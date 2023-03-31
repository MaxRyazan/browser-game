import {PlanetarySystem} from "../entities/PlanetarySystem";
import {Planet} from "../entities/Planet";
import {Player} from "../entities/Player";
import {Humans} from "../races/Humans";
import {Mathematics} from "../Technologies/Mathematics";
import {Biology} from "../Technologies/Biology";
import {HigherMathematics} from "../Technologies/HigherMathematics";
import {ChemicalReactor} from "../modules/ChemicalReactor";
import {AltahReactor} from "../modules/AltahReactor";
import {Necrons} from "../races/Necrons";
import {NuclearReactor} from "../modules/NuclearReactor";
import {Cyborgs} from "../races/Cyborgs";
import {Lot} from "../entities/Lot";
import {Electronics} from "../materials/Electronics";
import {Polymers} from "../materials/Polymers";
import {Steel} from "../materials/Steel";
import {Delitium} from "../Resources/mineral/Delitium";
import {ConstructionMaterials} from "../materials/ConstructionMaterials";
import {Quadria} from "../materials/Quadria";
import {Vettur} from "../materials/Vettur";
import {Altah} from "../Resources/mineral/Altah";
import {ChemicalFuel} from "../materials/ChemicalFuel";

export class FakeData {

    mathematics = new Mathematics()
    biology = new Biology()
    higherMathematics = new HigherMathematics()

    public planet_MERCURY = new Planet(1, 'Меркурий', {id: 1, name: 'Солнечная система', coordinates: {x: 10, y: 25}, orbits: 3, planets: []}, 1, false, 190, '', false, 0,{maxCapacity: 2000, modules: [], materials: [], resources: []}, [], 0);
    public planet_VENUS = new Planet(2, 'Венера', {id: 1, name: 'Солнечная система', coordinates: {x: 10, y: 25}, orbits: 3, planets: []}, 2, false, 280, '', false, 0,{maxCapacity: 2000, modules: [], materials: [], resources: []}, [], 0);
    public planet_EARTH = new Planet(3, 'Земля', {id: 1, name: 'Солнечная система', coordinates: {x: 10, y: 25}, orbits: 3, planets: []}, 3, true, 310, '', false, 0, {maxCapacity: 2000, modules: [], materials: [new ConstructionMaterials(300), new Electronics(125), new Polymers(121), new Steel(125), new Quadria(100), new Vettur(100), new ChemicalFuel(100)], resources: [new Altah(3), new Delitium(81)]},  [], 0);
    public solarSystem = new PlanetarySystem(
        1,
        'Солнечная система',
        {x: 10, y: 25},
        3,
        [this.planet_MERCURY, this.planet_VENUS, this.planet_EARTH]
    );


    public player = new Player(
        1, 'gecaHTHuk', 'email@email.ru', 'password',
        {
            race: Humans,
            playerMoney: {CR: 10000, IG: 5000},
            playerScience: 100,
            playerKnowledge: {
                learned: [this.mathematics, this.biology],
                inLearnNow: {
                    tech: this.higherMathematics,
                    starting_at: Date.now(),
                    ending_at: Date.now() + 3600000
                }
            },
            playerPlanets: {
                homeWorld: this.planet_EARTH,
                inhabitedPlanets: [this.planet_VENUS]
            },
            playerShips: [],
        },
    )

    lot1 = new Lot(1,{id: this.player.id, login: this.player.login}, 200, 12, new ChemicalReactor(new Humans()))
    lot2 = new Lot(2, {id: this.player.id, login: this.player.login}, 180, 120, new AltahReactor(new Necrons()))
    lot3 = new Lot(10, {id: this.player.id, login: this.player.login}, 1000, 400, new NuclearReactor(new Cyborgs()))
}