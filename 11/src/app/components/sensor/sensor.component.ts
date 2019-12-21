import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  model = 'BMW'
  sensorsArray: Sensors[]= []
  
  constructor() { 
    for(let i = 0; i < 10; i++){
      this.sensorsArray.push(
        {
          id: i + 1,
          name: 'Misha' + (i + 1 == 1 ? '': i + 1),
          status: Math.random()*10 <=5 ? true : false
        }
      )
    }
  }

  ngOnInit() {

    this.model = 'Audi'
    
    
  }

  deleteSensor(id){
    this.sensorsArray.splice(id, 1)
  }

  addSensor(name, status){
    // console.log(status)
    if(!name)return false
    this.sensorsArray.push(
      {
        id: this.sensorsArray.length === 0 ? 1: this.sensorsArray[this.sensorsArray.length - 1].id + 1,
        name,
        status
      }
      
    )
    return false
  }

}

interface Sensors {
  id:     number,
  name:   string,
  status: boolean
}
