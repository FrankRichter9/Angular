import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  public mask = ['+','7','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/]

  fullNameControl: FormGroup
  disabledForm: boolean = false

  @Output() addperson = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
    this.fullNameControl = new FormGroup({
      firstname: new FormControl({value: null, disabled: this.disabledForm} , [Validators.required]),
      lastname: new FormControl({value: null, disabled: this.disabledForm}, [Validators.required]),
      phone: new FormControl({value: null, disabled: this.disabledForm} , [Validators.required ,Validators.pattern(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)])
    })

    console.log()
  }

  test(elm) {
    console.log(elm)
  }

  // onAddPerson(firstname: string, lastname: string, phone: number) {
  //   if(firstname == '' || lastname == ''){}else{
  //   let person = new Person(firstname, lastname, phone);
  //   this.addperson.emit(person);}
  // }

  onFormSubmit(){
    // console.log(this.fullNameControl.value)
    this.addperson.emit(this.fullNameControl.value)
    this.fullNameControl.reset()
  }


}
