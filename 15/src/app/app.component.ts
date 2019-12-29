import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './shared/models/person.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Компоненты';
  persons: Person[] = [];
  search: string 
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 1));
    // this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 2));
    // this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 3));
    // this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 4));
    // this.persons.push(new Person('Ivan', 'Ivanov',89888888888, 5));
  }

  ngOnDestroy(): void {
  }

  onAddPerson(person: Person) {
    console.log(person)
    let newId = this.persons.length === 0 ? 1 : this.persons[this.persons.length - 1].id + 1;
    person.id = newId;
    
    this.persons.push(person);
    this.search = ' ';
    setTimeout(() => {
      this.search = '';
    }, 1);
    let object = {
      title: person.firstname, 
      body: person.lastname,
      userId: person.phone,
      id: person.id
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts', object)
    console.log(`This person {${object.title},  ${object.body}, ${object.userId}, ${object.id}}} post in JSON server! :)`)
  }

  deletePerson(id: number){
    console.log(id)
    const idx = this.persons.findIndex(t => t.id === id)
    this.persons.splice(idx, 1)
    this.search = ' ';
    setTimeout(() => {
      this.search = '';
    }, 1);
    
  }

  test(even) {
    console.log(event);
  }


  onAddPersonJSON(array: any) {
    console.log('asdsad')
    for(let person of array){
      this.persons.push(new Person(person.title, person.body,person.userId, person.id));
      this.search = '';
    }
    // let newId = this.persons.length === 0 ? 1 : this.persons[this.persons.length - 1].id + 1;
    // person.id = newId;
    // this.persons.push(person);
    // this.search = '';
  }

}
