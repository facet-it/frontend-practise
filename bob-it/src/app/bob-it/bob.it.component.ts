import { Component } from '@angular/core';
import { Level } from './level';
import { LevelManager} from './LevelManager';
import { random } from 'lodash';

@Component({
    selector: "bob-it",
    templateUrl: "./bob.it.component.html",
    styleUrls: ["./bob.it.component.css"]
})
export class BobItGame{

    levelManager: any = new LevelManager();
    currentLevel: any = this.levelManager.getCurrentLevel();
    bobit: string[] = [];

    generateRandomBobIt() {
        console.log("asked for a bobit");
        let nextRandom: number,
            color: string,
            colorIndex: number;
        
        // the number of items of the level is determing how long the bobit assignment is going to be. That is why we are also the index
        // of the for loop as the index of the bobit assignment
        for(var i:number = 0; i< this.currentLevel.numberOfItems(); i ++) {
            //we need a big number here as we are going to use the calculus operator for choosing the color of the next bobit element
            nextRandom = random(1, 10000);

            //The colors alowed in a level are in an array from 0 till the n-1 where n is the amount of colors. The beauty of the calculus operator
            //is that the leftover can never be bigger then the number used as calculus. Since we take a rather long random for the calculus, we have
            // a improvised random color generator :-)
            colorIndex = nextRandom % this.currentLevel.colors.length;
            this.bobit[i] = this.currentLevel.colors[colorIndex];
        }

        console.log("this is the current bobit assignment: ", this.bobit);
    }
}