import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal } from '../../meal.model';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  @Output() clickSender = new EventEmitter();

  addFormShown: boolean = false;

  showAddForm() {
    this.addFormShown = true;
  }

  addButtonClicked(ration: string, details: string, calories: number, crewMember: string, date: string) {
    var newMeal: Meal = new Meal(ration, details, calories, crewMember, date);
    this.clickSender.emit(newMeal);
    this.addFormShown = false;
  }

  cancelMealAdd() {
    this.addFormShown = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
