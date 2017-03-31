import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { MealsDisplayComponent } from './meals-display/meals-display.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { AddMealComponent } from './edit/add-meal/add-meal.component';
import { EditComponent } from './edit/edit.component';
import { EditMealComponent } from './edit/edit-meal/edit-meal.component';
import { HighCaloriePipe } from './high-calorie.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MealsDisplayComponent,
    AboutComponent,
    AddMealComponent,
    EditMealComponent,
    EditComponent,
    HighCaloriePipe
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
