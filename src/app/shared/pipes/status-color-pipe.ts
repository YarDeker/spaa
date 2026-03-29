import { Pipe, PipeTransform } from '@angular/core';
import { DifficultyLevel } from '../models/sportInfo';

@Pipe({
  name: 'statusColor',
})
export class StatusColorPipe implements PipeTransform {

  transform(difficulty: DifficultyLevel): string {
    switch(difficulty) {
      case 'Beginner' : return 'green'
      case 'Intermediate': return 'yellow'
      case 'Advanced': return 'red'
      default: return 'gray'
    }
  }

}
