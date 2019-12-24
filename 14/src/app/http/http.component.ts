import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  @Output() addpersonInJSON = new EventEmitter<any>();
  
  fortsSymbols: any
  constructor(private http: HttpClient){}
  getData() {
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
    //   this.fortsSymbols = response;
    //   this.addpersonInJSON.emit(this.fortsSymbols)
    // })
   }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.fortsSymbols = response;
      this.addpersonInJSON.emit(this.fortsSymbols)
    })
  }


  dataPost(object){
    this.http.post('https://jsonplaceholder.typicode.com/posts', object)
  }

}
