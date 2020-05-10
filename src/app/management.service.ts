import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IManagementService {  

  eraseFile(task : any);

  setSelectedTask(task : any);

  getSelectedTask();

}

@Injectable({
  providedIn: 'root'
})
export class ManagementService implements IManagementService{

  exploreButtonStatus : boolean;

  task : any;

  data : BehaviorSubject<any> = new BehaviorSubject<any>(this.task);

  exploreStatusObservable : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.exploreButtonStatus);
  
  constructor() { }


  // for testing purposes only

  eraseFile(task : any) {
    console.log("run eraseFile for task id : " + task.id);
  }

  setSelectedTask(task : any) {
    this.task = task;
    this.data.next(task);
    console.log(task);
  }

  getSelectedTask() : string {
    return this.task;
  }

  setExploreButtonStatus(status : boolean) {
    this.exploreButtonStatus = status;
    this.exploreStatusObservable.next(status);
  }

  getExploreButtonStatus() {
    return this.exploreButtonStatus;
  }


}


