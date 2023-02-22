/**
 * shipProps
 * -----------
 * @param name          💾 The ships name, this can be anything. It'll be used to uniquely identify your ships.
 * @param type          ⚓ The ships class, from the small frigate to the mighty battleship.
 * @param HP            🔧 The amount of hit points your ship has, when these reach 0 your ship will cease to exist.
 * @param AR            🧰 The minimum role it will take to damage your ship. Anything higher than this role will damage your HP.
 * @param WEP           🔪 The weapon type of the ship.
 * @param DAM           💥 The amount of damage your ship can do by default, this is added to a dice role for random chance.
 * @param ATNO          🏹 The number of attacks you can use in a turn.
 * @param RANGE         📺 The ability to move first. The higher the range, the quicker you will be firing.
 * @param crewSkills    🧬 How your crew are trained.
 * @param modules       🔬 Modifications to your ship to increase is stats.
 * @param training      🏅 Criteria that allow your ship to have more than its default assignment of perks.
 */

export interface shipProps {
    name: string;
    type: string;
    faction?: string;
    HP: number;
    HPMAX: number;
    AR: number;
    WEP: string;
    DAM: number;
    ATNO: number;
    VAR: number;
    RANGE: number;
    PRICE: number;
    // Crew Skills
    CrewSkills?: string[];
    CrewSkillsCap: number;
    // Modules
    Modules?: string[];
    ModulesCap: number;
    Training?: string;
}

/**
 * Ship
 * -----------
 * @param name          💾 The ships name, this can be anything. It'll be used to uniquely identify your ships.
 * @param type          ⚓ The ships class, from the small frigate to the mighty battleship.
 * @param faction
 * @param HP            🔧 The amount of hit points your ship has, when these reach 0 your ship will cease to exist.
 * @param AR            🧰 The minimum role it will take to damage your ship. Anything higher than this role will damage your HP.
 * @param WEP           🔪 The weapon type of the ship.
 * @param DAM           💥 The amount of damage your ship can do by default, this is added to a dice role for random chance.
 * @param ATNO          🏹 The number of attacks you can use in a turn.
 * @param RANGE         📺 The ability to move first. The higher the range, the quicker you will be firing.
 * @param CrewSkills    🧬 How your crew are trained.
 * @param Modules       🔬 Modifications to your ship to increase is stats.
 * @param Training      🏅 Criteria that allow your ship to have more than its default assignment of perks.
 */

export class Ship implements shipProps{
    name: string;
    type: string;
    faction?: string;
    HP!: number;
    HPMAX!: number;
    AR!: number;
    WEP: string;
    DAM!: number;
    ATNO: number;
    VAR!: number;
    RANGE!: number;
    PRICE!: number;
    // Crew Skills
    CrewSkills?: string[];
    CrewSkillsCap!: number;
    // Modules
    Modules?: string[];
    ModulesCap!: number;
    // Training
    Training?: string;

    quickstats = () => {
        console.log(`${this.name}: [${this.HP}/${this.HPMAX}]`)
    }
    fullstats = () => {
        console.log('============================================================')
        console.log(`| Name:\t\t ${this.name}`)
        console.log(`| Class:\t ${this.WEP} ${this.type}`)
        console.log('============================================================')
        console.log(`| HP:\t${this.HP}\tAR:\t ${this.AR}`)
        console.log(`| DAM:\t${this.DAM}\tRANGE:\t ${this.RANGE}`)
        console.log(`| VAR:\t${this.VAR}`)
        console.log(`|`)
        console.log(`| Crew Skills:\t ${this.CrewSkills}`)
        console.log(`| Modules:\t ${this.Modules}`)
        console.log(`| Training:\t ${this.Training}`)
        console.log('============================================================')
        console.log(' ')
        
    }
    constructor(name: string, type : string, WEP : string, CrewSkills?: string[], Modules?: string[], Training?: string) {
        this.name = name;
        this.type = type;
        this.WEP = WEP;
        this.ATNO = 2;
        this.CrewSkills = CrewSkills;
        this.Modules = Modules;
        this.Training = Training;

        const shipTypeCalculator = () => {
            if (type.match('Frigate')){
                this.HP = 15;
                this.HPMAX = 15;
                this.AR = 9;
                this.DAM = 8;
                this.VAR = 6;
                this.RANGE = 1;
                this.PRICE = 15;
                this.CrewSkillsCap = 1;
                this.ModulesCap = 1;
            }
            if (type.match('Destroyer')){
                this.HP = 30;
                this.HPMAX = 30;
                this.AR = 10;
                this.DAM = 10;
                this.VAR = 6;
                this.RANGE = 2;
                this.PRICE = 25;
                this.CrewSkillsCap = 1;
                this.ModulesCap = 2;
            }
            if (type.match('Cruiser')){
                this.HP = 50;
                this.HPMAX = 50;
                this.AR = 12;
                this.DAM = 12;
                this.VAR = 6;
                this.RANGE = 3;
                this.PRICE = 50;
                this.CrewSkillsCap = 1;
                this.ModulesCap = 3;
            }
            if (type.match('Battleship')){
                this.HP = 70;
                this.HPMAX = 70;
                this.AR = 15;
                this.DAM = 13;
                this.VAR = 7;
                this.RANGE = 4;
                this.PRICE = 75;
                this.CrewSkillsCap = 2;
                this.ModulesCap = 3;
            }
        }

        const trainingCatalogue = () => {
            if (Training) {
                if (Training.match('Trained')){
                    this.VAR += 5;
                    this.HPMAX += 5;
                    this.HP += 5;
                }
                if (Training.match('Veteren')){
                    this.VAR += 5;
                    this.HPMAX += 10;
                    this.HP += 10;
                    this.AR += 1;
                }
                if (Training.match('Elite')){
                    this.VAR += 10;
                    this.HPMAX += 10;
                    this.HP += 10;
                    this.AR += 2;
                }
            } else {
                this.Training = 'Rookie'; 
            }
             
 
        }
        
        

        const crewSkillCatalogue = () => {
            if (CrewSkills) {
                if (CrewSkills.includes('Hardy')){
                    this.HPMAX += 10;
                    this.HP += 10;
                }
            }
            
        }
        
        const moduleCatalogue = () => {
            if (Modules) {

            // STEALTH MODULES
            if (Modules.includes('Stealth Coating')){
                this.AR += 3;
                this.HPMAX -= 10;
                this.HP -= 10;
                this.type = `Stealth ${type}`
            }
            if (Modules.includes('Metamaterial Coating')){
                this.AR += 2;
                this.HPMAX -= 7;
                this.HP -= 7;
            }
            if (Modules.includes('Additional Heatsink')){
                this.AR += 1;
                this.HPMAX -= 5;
                this.HP -= 5;
            }

            // ARMOUR MODULES
            if (Modules.includes('Heavy Armour')){
                this.AR += 4;
                this.DAM -= 4;
                this.type = `Armoured ${type}`
            }
            // ENGINE MODULES
            if (Modules.includes('Stabilisers')){
                this.AR -= 2;
                this.DAM += 2;
            }
            if (Modules.includes('Boosters')){
                this.AR += 2;
                this.DAM -= 2;
            }

            // WEAPON MODULES
            if (Modules.includes('Spinal Mount')){
                this.AR -= 2;
                this.HPMAX -= 10;
                this.HP -= 10;
                this.DAM += 6;
                this.VAR += 4;
                this.ATNO -= 1;
                this.type = `Spinal Weapon ${type}`
            }
            if (Modules.includes('Heavy Weaponry')){
                this.DAM += 4;
                this.ATNO -= 1;
                this.type = `Cannon ${type}`
            }
            if (Modules.includes('Light Weaponry')){
                this.DAM -= 4;
                this.VAR -= 4;
                this.ATNO += 1;
                this.type = `Light ${type}`
            }
            if (Modules.includes('Defensive Weaponry')){
                this.DAM -= 6;
                this.VAR -= 6;
                this.ATNO += 2;
                this.type = `Defensive ${type}`
            }
            }
        }
        const capAndModuleKeeper = () => {
            if (this.CrewSkills) {
                if (this.CrewSkills.length > this.CrewSkillsCap){
                    this.CrewSkills = this.CrewSkills.slice(0,this.CrewSkillsCap);
                    console.log(`${this.name} has too many crew skills and had them docked.`)
                }
            }
            if (this.Modules) {
                if (this.Modules.length > this.ModulesCap){
                    this.Modules = this.Modules.slice(0,this.ModulesCap);
                    console.log(`${this.name} has too many modules and had them docked.`)
                }
            }
        }
        const shipHP = () => {
            if (this.HP > this.HPMAX){
                this.HP == this.HPMAX
            }
        }
        // Write logic that this happens only on launch otherwise ships will continually buff their damage.
        shipTypeCalculator();
        crewSkillCatalogue();
        moduleCatalogue();
        capAndModuleKeeper();
        // training must run 2nd last.
        trainingCatalogue();
        // HP checks must happen at end of subroutine.
        shipHP();
      }   
}