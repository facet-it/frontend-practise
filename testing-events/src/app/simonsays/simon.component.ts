import { Component } from '@angular/core';

@Component({
    templateUrl: "./simon.component.html",
    selector : "simon-says",
    styleUrls: ["./simon.component.css"]
})
export class Simon{
    command: string;

    speak() {
        console.log(this.command);
    }
}