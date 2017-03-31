import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MealService]
})
export class EditComponent implements OnInit {

  constructor(private mealService: MealService) { }

  ngOnInit() {
  }

  submitMeal(newMeal) {
    this.mealService.addMeal(newMeal);
  }

}
