import { Component, Input } from '@angular/core';
import { Data } from  '../data';

@Component({
  selector: 'collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css']
})
export class CollectorComponent {

  @Input() dataList: Data[];
}
