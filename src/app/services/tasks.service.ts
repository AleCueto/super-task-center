import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public _tasks: Task[] = [
    {
      id: 0,
      timeInSeconds: 900,
      difficulty: "facil",
      name: "hacer la cama",
      description: "Debes hacer la cama",
      image: "https://picsum.photos/200/300", //url to an image
    },
    {
      id: 1,
      timeInSeconds: 30010,
      difficulty: "medio",
      name: "recoger la mesa",
      description: "Debes recoger la mesa",
      image: "https://picsum.photos/200/300", //url to an image
    },
    {
      id: 2,
      timeInSeconds: 4000,
      difficulty: "dificil",
      name: "lavar los platos",
      description: "Debes lavar los platos",
      image: "https://picsum.photos/200/300", //url to an image
    },
    {
      id: 3,
      timeInSeconds: 6000,
      difficulty: "facil",
      name: "sacar al perro",
      description: "Debes sacar al perro",
      image: "https://picsum.photos/200/300", //url to an image
    }

  ]

  id:number = this._tasks.length+1;
  constructor() { }

  public getTasks(): Task[] {
    return this._tasks;
  }

  public getTasksById(id: number): Task{
    return this._tasks[id];
  }

  addPerson(task:Task){
    task.id = this.id++;
    this._tasks.push(task);
  }

  updatePerson(task:Task){
    var _task = this._tasks.find(p=>p.id==task.id);
    if(_task){
      _task.name = task.name;
      _task.timeInSeconds = task.timeInSeconds;
      _task.difficulty = task.difficulty;
      _task.description = task.description;
      // _person.nickname = person.nickname;
      // _person.picture = person.picture;
    }
    
  }

  deletePersonById(id:number){
    this._tasks = this._tasks.filter(p=>p.id != id); 
  }



}
