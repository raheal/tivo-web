import { Injectable } from '@angular/core';

interface IManagementService {  

  eraseFile(taskId : string);

  setSelectedTaskId(taskId : string);

  getSelectedTaskId();

}

@Injectable({
  providedIn: 'root'
})
export class ManagementService implements IManagementService{

  taskId : string;

  constructor() { }

  eraseFile(taskId : string) {
    console.log("run eraseFile");
  }

  setSelectedTaskId(taskId : string) {
    this.taskId = taskId;
    console.log(taskId);
  }

  getSelectedTaskId() : string {
    return this.taskId;
  }

}


