import {Level} from './level';

export class LevelManager {

    colors: string[][] = [
                            ["red","blue"],
                            ["red","blue", "yellow"],
                            ["red","blue", "yellow", "green"],
                            ["red","blue", "yellow", "green", "gray"]
                         ];

    levels: any[] = [
                        new Level(1, 3, this.colors[0]),
                        new Level(2, 4, this.colors[1]),
                        new Level(3, 5, this.colors[2]),
                        new Level(4, 6, this.colors[3])
                    ];

    indexCurrentLevel:number = 0;

    getCurrentLevel() {
        console.log("asked for current level : ", this.levels[this.indexCurrentLevel]);
        return this.levels[this.indexCurrentLevel];
    }
}