import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsDisplayComponent } from './meals-display/meals-display.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MealsDisplayComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
