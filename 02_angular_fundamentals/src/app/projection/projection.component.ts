import { Component, OnInit } from '@angular/core';

interface IUser {
  firstname: string;
  lastname: string;
  country: string;
  car: boolean;
  motorcicle: boolean;
  bicycle: boolean;
}

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent implements OnInit {

  users: IUser[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      { firstname: 'Roberto', lastname: 'Sequeira', country: 'CR', car: true, motorcicle: true, bicycle: true },
      { firstname: 'John', lastname: 'Doe', country: 'CR', car: true, motorcicle: true, bicycle: true },
    ];
  }

}
