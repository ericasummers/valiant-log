import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meals-display',
  templateUrl: './meals-display.component.html',
  styleUrls: ['./meals-display.component.css'],
  providers: [MealService]
})
export class MealsDisplayComponent implements OnInit {
  filterByHighCalorie: string = "Calorie";
  filterByCrewMember: string = "crewMember";

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.meals = this.mealService.getMeals();
  }

  meals: FirebaseListObservable<any[]>;

  onCalorieChange(optionFromMenu) {
    this.filterByHighCalorie = optionFromMenu;
  }

  onCrewChange(optionFromMenu) {
    this.filterByCrewMember = optionFromMenu;
  }
}
