import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Level } from '../bob-it/level';

@Component({
    selector: "bobit-input",
    templateUrl: "",
    styleUrls: []
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
    }

    clearSolution() {
        this.solution = [];
    }

    sendSolution() {
        this.solutionEmitter.emit(this.solution);
    }

}