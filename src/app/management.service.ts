import { Injectable } from '@angular/core';

interface IManagementService {  

  eraseFile(task : any);

  setSelectedTask(task : any);

  getSelectedTask();

}

@Injectable({
  providedIn: 'root'
})
export class ManagementService implements IManagementService{

  task : any;

  constructor() { }

  eraseFile(task : any) {
    console.log("run eraseFile for task id : " + task.id);
  }

  setSelectedTask(task : any) {
    this.task = task;
    console.log(task);
  }

  getSelectedTask() : string {
    return this.task;
  }

}


