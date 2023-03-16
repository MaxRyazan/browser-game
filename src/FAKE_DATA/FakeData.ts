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
import {Lot} from "../entities/TradeLot";

export class FakeData {
    mathematics = new Mathematics()
    biology = new Biology()
    higherMathematics = new HigherMathematics()
    public planet_MERCURY = new Planet(1, 'Меркурий', 1, 1, false, 190, {}, '');
    public planet_VENUS = new Planet(2, 'Венера', 1, 2, false, 280, [new AltahReactor(new Necrons()), new ChemicalReactor(new Necrons(), 2)], '');
    public planet_EARTH = new Planet(3, 'Земля', 1, 3, true, 310, [new NuclearReactor(new Necrons(), 2), new ChemicalReactor(new Necrons(), 2), new AltahReactor(new Necrons(), 2), new AltahReactor(new Cyborgs(), 2)], '');
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