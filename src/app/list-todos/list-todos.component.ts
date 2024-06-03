import { CommonModule, NgFor} from '@angular/common';
import { Component } from '@angular/core';


export class ToDo{
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public isDone: boolean

  ){
  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos=[
    new ToDo(1,'Complete Java',new Date(),false),
    new ToDo(2,"complete Springboot",new Date(),false)
  ]

  // todos=[
  //   {id:1,description:"Complete Java"},
  //   {id:2,description:"Complete SpringBoot"},
  //   {id:3,description:"Complete DevOps"}
  // ]
}
