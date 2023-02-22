export function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }  

export const fireBark = () => {
    const statementsList: String[] = [
        "fired upon",
        "shot",
        "launched a salvo upon",
        "opened fire upon",
        "directed fire towards"
    ];
    const stringLength = getRandomInt(statementsList.length);
    var resend = statementsList[stringLength];
    return resend;
}

export const failureBark = () => {
    const statementsList: String[] = [
        "missed their delivery",
        "hit the target but failed to penetrate the armour",
        "couldn't determine a successful hit",
        "missed",
        "had their salvo evaded",
        "reported no damage",
        "reported no effect on target",
        "returned reports of a negative impact",
        "relayed that they had had no effect on target",
        "reported a miss"
    ];
    const stringLength = getRandomInt(statementsList.length);

    var resend = statementsList[stringLength];
    return resend;
}