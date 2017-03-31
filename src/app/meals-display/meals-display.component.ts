import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MealService } from '../meal.service';
import { Announcement } from '../announcement.model';

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

  masterAnnouncementList: Announcement[] = [
    new Announcement('Temporary shortage due to hydroponics lab equipment down', 'Dried green beans', '2017-05-05'),
    new Announcement('Extra protein in pellets from latest batch', 'Pellets', '2020-08-09'),
    new Announcement('Extremely low supply', 'Chocolate', '2018-07-06')
  ];
}
