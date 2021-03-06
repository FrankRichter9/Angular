import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: Person[] = [];
  search: string
  constructor() {
  }

  ngOnInit(): void {
    this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 1));
    this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 2));
    this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 3));
    this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 4));
    this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 5));
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    console.log(person)
    let newId = this.persons.length === 0 ? 1 : this.persons[this.persons.length - 1].id + 1;
    person.id = newId;
    this.persons.push(person);
    this.search = '';
  }

  deletePerson(id: number){
    console.log(id)
    const idx = this.persons.findIndex(t => t.id === id)
    this.persons.splice(idx, 1)
  }

  test(even) {
    console.log(event);
  }

}
