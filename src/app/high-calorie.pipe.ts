import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'highCalorie',
  pure: false
})
export class HighCaloriePipe implements PipeTransform {

  transform(input: Meal[], desiredCalories) {
    var output: Meal[] = [];
    if (desiredCalories === "highCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalories === "lowCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
