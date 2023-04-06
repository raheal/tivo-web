import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == "NOT_STARTED") {
      return "Not Started"
    }
    else if (value == "STARTED") {
      return "Started";
    }
    else if (value == "SUCCESS") {
      return "Success";
    }
    else if (value == "IN_PROGRESS") {
      return "In Progress";
    }
    else if (value == "ERROR") {
      return "Error";
    }
    else if (value == "DELETED") {
      return "Deleted";
    }
    else if (value == "CANCELLED") {
      return "Cancelled";
    }
    else if (value == "ARCHIVED") {
      return "Archived";
    }
    return value;
  }

}
