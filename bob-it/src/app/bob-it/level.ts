export class Level{

    level: number;
    untilNextLevel: number;
    colors: string[];

    constructor(level:number, untilNextLevel: number, colors: string[]) {
        this.level = level;
        this.untilNextLevel = untilNextLevel;
        this.colors = colors;
    }

    numberOfItems() {
        return this.level * 2 + 1;
    }

    timeAllowed() {
        return this.level * 3 * 1000 + 1000;
    }
}