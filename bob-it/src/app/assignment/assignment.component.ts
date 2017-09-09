import { Component, Input } from '@angular/core';

@Component({
    selector: "assignment-line",
    templateUrl: "assignment.component.html",
    styleUrls: ["assignment.component.css"]
})
export class Assignment{

    @Input() assignment: string[];
}