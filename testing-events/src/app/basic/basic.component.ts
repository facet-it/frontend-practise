import {Component} from '@angular/core';

@Component({
    selector: "basic-eventing",
    templateUrl: "./basic.component.html",
    styleUrls: ["./basic.component.css"]
})
export class BasicEventing{
    myText: string;

    setText(event){
        this.myText = event.target.value;
    }
}