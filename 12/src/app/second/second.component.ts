import { Person } from './../shared/models/person.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  edit:boolean = false

  @Input() person: Person
  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    this.edit = !this.edit
    
  }
}
