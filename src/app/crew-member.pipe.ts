import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'crewMember',
  pure: false
})
export class CrewMemberPipe implements PipeTransform {

  transform(input: Meal[], desiredCrewMember) {
    var output: Meal[] = [];
    if (desiredCrewMember === "alex") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].crewMember === "Captain Alex Row") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCrewMember === "sophia") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].crewMember === "Sophia Forrester") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCrewMember === "dio") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].crewMember === "Dio Eraclea") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCrewMember === "claus") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].crewMember === "Claus Valca") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCrewMember === "lucciola") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].crewMember === "Lucciola") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCrewMember === "tatiana") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].crewMember === "Tatiana Wisla") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
