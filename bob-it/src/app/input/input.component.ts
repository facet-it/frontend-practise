import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Level } from '../bob-it/level';

@Component({
    selector: "bobit-input",
    templateUrl: "input.component.html",
    styleUrls: ["input.component.css"]
})
export class BobitInput{
    @Input() level: Level; 
    @Output() solutionEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

    solution: string[] = [];

    setButtons() {
        return this.level.colors;
    }

    addToSolution(color:string) {
        this.solution.push(color);
        console.log("this is the solution ", this.solution);
    }

    clearSolution() {
        this.solution = [];
    }

    sendSolution() {
        this.solutionEmitter.emit(this.solution);
    }

}