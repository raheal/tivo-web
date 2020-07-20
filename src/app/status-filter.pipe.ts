import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) {
      return [];
    }

    if (!field) {
      return items;
    }
    
    return items.filter(singleItem =>
      singleItem.value.status.toLowerCase().includes(field)
    );


  }

}
