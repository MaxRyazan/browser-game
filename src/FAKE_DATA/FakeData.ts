import {PlanetarySystem} from "../entities/PlanetarySystem";
import {Planet} from "../entities/Planet";
import {Player} from "../entities/Player";
import {Humans} from "../races/Humans";
import {ChemicalReactor} from "../modules/reactors/ChemicalReactor";
import {AltahReactor} from "../modules/reactors/AltahReactor";
import {Necrons} from "../races/Necrons";
import {NuclearReactor} from "../modules/reactors/NuclearReactor";
import {Cyborgs} from "../races/Cyborgs";
import {Lot} from "../entities/Lot";

export class FakeData {

    public planet_MERCURY = new Planet(1, 'Меркурий', false);
    public planet_VENUS = new Planet(2, 'Венера', false);
    // public planet_VENUS = new Planet(2, 'Венера', {id: 1, name: 'Солнечная система', coordinates: {x: 10, y: 25}, orbits: 3, planets: []}, 2, false, 280, '', false, 0,1,{maxCapacity: 2000, modules: [], materials: [], resources: []}, [], 0);
    // public planet_EARTH = new Planet(3, 'Земля', {id: 1, name: 'Солнечная система', coordinates: {x: 10, y: 25}, orbits: 3, planets: []}, 3, true, 310, '', false, 0, 1, {maxCapacity: 2000, modules: [], materials: [new ConstructionMaterials(300), new Electronics(125), new Polymers(121), new Steel(125), new Quadria(100), new Vettur(100), new ChemicalFuel(100)], resources: [new Altah(3), new Delitium(81)]},  [], 0);
    public planet_EARTH = new Planet(3, 'Земля', true);
    public solarSystem = new PlanetarySystem(
        1,
        'Солнечная система',
        {x: 10, y: 25},
        3,
        [this.planet_MERCURY, this.planet_VENUS, this.planet_EARTH]
    );


    public player = new Player(1, 'gecaHTHuk', 'password', 'email@email.ru', 'Earth', new Humans())

    lot1 = new Lot(1,{id: this.player.id, login: this.player.login}, 200, 12, new ChemicalReactor(new Humans()))
    lot2 = new Lot(2, {id: this.player.id, login: this.player.login}, 180, 120, new AltahReactor(new Necrons()))
    lot3 = new Lot(10, {id: this.player.id, login: this.player.login}, 1000, 400, new NuclearReactor(new Cyborgs()))
}