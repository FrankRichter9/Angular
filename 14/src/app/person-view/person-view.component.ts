import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../shared/models/person.model';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() inPerson: Person;
  @Output() deleteThis = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
    // console.log(this.inPerson)
  }

  deletePerson(id){
    this.deleteThis.emit(id)
  }
 
}
