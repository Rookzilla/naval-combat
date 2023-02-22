import { shipProps } from "./ship";

export class Roster {
    name: string;
    roster?: shipProps[];
    constructor(name: string, roster:shipProps[]){
        this.name = name;
        this.roster = roster;
    }
    printRoster = () => {
        if (this.roster){
        for (var item of this.roster) {
            console.log(`${item.type} ${item.name}: [${item.HP}/${item.HPMAX}]`)
        }
        }
    }
    addShip = (shipToAdd: shipProps) => {
        if (this.roster){
            this.roster.push(shipToAdd);
            shipToAdd.faction = this.name
        }
    }
}