import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit:number = 50): string {
    if(!value || value.length == 0) return '';
    if(value.length > limit) return value.slice(0, 50) + '...';
    return value;
  }

}
