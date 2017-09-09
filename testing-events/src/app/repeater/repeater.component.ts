import {Component} from '@angular/core';

/**
 * This example just wont work. Emitting events, as it seems, only works from child to parent. Which I don't really like tbh. I think time 
 * will show its usages I guess. 
 * 
 * This was an attempt to used togeter with the simon component... you know... simon says? :-)
 */
@Component({
    selector: "repeater",
    templateUrl: "./repeater.component.html",
    styleUrls: ["./repeater.component.css"]
})
export class Repeater{
    feed: string;

    setFeed(event) {
        console.log("event triggered");
        let eventFeed: string = event;

        if(eventFeed.indexOf("Simon says") >=0 ) {
            this.feed = event;
        }
        else {
            this.feed = "Oh, Simon didn't say anything :-)";
        }
    }
}