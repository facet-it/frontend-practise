import { Component } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private dataList: Data[] = [];

  takeData(event) {
    console.log("got event ", event);
    this.dataList.push(event);
  }

}
