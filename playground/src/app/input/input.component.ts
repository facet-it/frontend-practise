import { Component, Output, EventEmitter } from '@angular/core';
import {Data} from '../data';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() dataSender: EventEmitter<Data> = new EventEmitter<Data>();
  private title: string;
  private data: string;

  constructor() { }

  sendData() {
    var dataToSend = new Data(this.data, this.title);
    this.dataSender.emit(dataToSend);
    console.log(dataToSend);
  }

}
