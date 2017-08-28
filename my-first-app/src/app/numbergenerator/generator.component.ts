import {Component} from '@angular/core';

@Component({
    selector : "facet-random",
    templateUrl: "./random.template.html",
    styleUrls: []
})
export class RandomNumbers{
    result:number;
    error: string = "";

    lowest:number = 0;
    highest: number = 0;

    generateRandomNumber() {
        console.log(this.lowest > this.highest);
        this.result = 0;
        if(this.paramsAreValid(this.lowest, this.highest)) {
            this.result =Math.floor(Math.random() * ((this.highest-this.lowest)+1) + this.lowest);
        }
    }

    /* making a new level of abstraction for checking the numbers. The  */
    private paramsAreValid(lowest:number, highest: number) {
        if(isNaN(lowest)){
            this.error = "the lowest limit is not a number";
            return false;
        }
        if(isNaN(highest)){
            this.error = "the highest limit is not a number";
            return false;
        }
        if(lowest < 0) {
            this.error = "Sorry, but your lowest limit cannot be lower then zero";
            return false;
        }
        if (lowest > highest) {
            console.log("this is lowest : highest " + lowest + " : " + highest);
            console.log(lowest > highest);
            this.error = "Sorry, but your lowest limit cannot be higher then you highest limit";
            return false;
        }
        this.error = "";
        return true;
    }

}