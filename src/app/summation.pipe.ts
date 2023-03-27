import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summation'
})
export class SummationPipe implements PipeTransform {

  transform(value: string): number {
    let numbers = value.split(' ').map(Number);
    // console.log(numbers);
    let sum = 0;
    for(let num of numbers){
      sum += num;
    }
    return sum
  }

}
