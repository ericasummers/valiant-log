import { Injectable } from '@angular/core';
import { Meal } from './meal.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MealService {
  meals: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.meals = angularFire.database.list('meals');
  }

  getMeals() {
    return this.meals;
  }

  addMeal(newMeal: Meal) {
    this.meals.push(newMeal);
  }

  getMealById(mealId: string) {
    return this.angularFire.database.object('/meals/' + mealId);
  }

  updateMeal(thisMeal) {
    var mealInFirebase = this.getMealById(thisMeal.$key);
    mealInFirebase.update({
      ration: thisMeal.ration,
      details: thisMeal.details,
      calories: thisMeal.calories,
      crewMember: thisMeal.crewMember,
      date: thisMeal.date
    });
  }

  deleteMeal(thisMeal) {
    var mealInFirebase = this.getMealById(thisMeal.$key);
    mealInFirebase.remove();
  }

}
