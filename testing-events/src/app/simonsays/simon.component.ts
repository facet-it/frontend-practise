import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    templateUrl: "./simon.component.html",
    selector : "simon-says",
    styleUrls: ["./simon.component.css"]
})
export class Simon{
    command: string;

    @Output() simon: EventEmitter<string> = new EventEmitter<string>();

    speak() {
        console.log(this.command);
        this.simon.emit(this.command);
    }
}