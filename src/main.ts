import { Ship } from "./mechanics/ship";
import { Roster } from "./mechanics/roster";
import { inventoryFromCSV } from "./mechanics/CSV";

const shooter = new Ship(
    'The Riviera',
    'Battleship',
    'Ballistics',
    ['Hardy'],
    ['Light Weaponry', 'Stabilisers', 'Stabilisers', 'Dragon', 'Dickhead'],
    'Elite'
    );
const victim = new Ship('The Dauntless','Destroyer','Laser', [''], ['Heavy Armor'], 'Elite');
const victim2 = new Ship('The Pythagorean','Destroyer','Laser', [''], ['Stealth Coating']);
const stealthFrigate = new Ship('Demetrius', 'Destroyer','Ballisitic',[''],['Heavy Armor, Stealth Coating'])

const uscRoster = new Roster('United Systems Coalition',[])
uscRoster.addShip(victim);
uscRoster.addShip(victim2);
uscRoster.printRoster();
    //shooter.fullstats();
// console.log('')
    //victim.fullstats();
// console.log('')
    
//stealthFrigate.fullstats();
//attackers.addShip(stealthFrigate);

//console.log(attackers.printRoster());


