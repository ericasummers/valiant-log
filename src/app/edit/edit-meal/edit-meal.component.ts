import { Component, OnInit } from '@angular/core';
import { Meal } from '../../meal.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MealService } from '../../meal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {

  constructor(private router: Router, private mealService: MealService) { }

  ngOnInit() {
    this.meals = this.mealService.getMeals();
  }

  meals: FirebaseListObservable<any[]>;

  editButtonClicked(mealToEdit) {
    this.mealService.updateMeal(mealToEdit);
  }

  beginDeletingMeal(mealToDelete) {
    if (confirm('Are you sure you want to delete this meal?')) {
      this.mealService.deleteMeal(mealToDelete);
    }
  }
}
