import { Ship, shipProps } from "./ship";
import { fireBark, failureBark } from "../randoms/randoms";
import { getRandomInt } from "../randoms/randoms";
import { headers, csvFilePath } from "./CSV";

/**
 * Shoot
 * -------
 * This is the method used to figure out damage calculated in shooting. This will carry out a shot based on a weapon attack.
 * @param attacker The ship object that is doing the shooting.  
 * @param defender The ship object this is being shot at.
 * @returns No explicit returns, sets the defender ship's data. In case of 'miss' no data changes.
 */



export const shoot = (attacker: shipProps, defender : shipProps) => {
    for (let i = 0; i < attacker.ATNO; i++) {
        const attackerTotalDamage = attacker.DAM + getRandomInt(attacker.VAR);
        if (defender.AR < attackerTotalDamage) {
            // 👇 Armor blocks some of the attack damage.
            let damageNumber = attackerTotalDamage.valueOf() - defender.AR.valueOf();
            // 👇 Set the defenders HP to the new value, with the damage taken from it.
            defender.HP = defender.HP.valueOf() - damageNumber.valueOf();
            // 👇 Set the defenders HP to the new value, with the damage taken from it.
            console.log(`[HIT]\t${attacker.name} ${fireBark()} ${defender.name} for ${damageNumber} damage.`)
        }
        if (defender.AR > attackerTotalDamage) {
            console.log(`[MISS]\t${attacker.name} ${fireBark()} ${defender.name}, and ${failureBark()}.`)
        }
    }
}

const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const csvWriter = createCsvWriter({
    header: headers,
    path: '../../data/shipstats.csv',
    
});
 
const records = [
    ['Mandingo', 'Cruiser', 52,  'Ballistic', ['Crewskills'], ['Modules'], 'Training'],
];
 
csvWriter.writeRecords(records)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
