import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'log'
})
export class LogPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) {
      return [];
    }

    if (!field) {
      return items;
    }
    
    return items.filter(singleItem =>
      singleItem.value.request.outputFileName.toLowerCase().includes(field)
    );

  }

}
