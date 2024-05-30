import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AllActivitiesComponent } from './components/activities/all-activities/all-activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardActivityComponent } from './components/activities/card-activity/card-activity.component';
import { CreateActivityComponent } from './components/activities/create-activity/create-activity.component';
import { ModifyActivityComponent } from './components/activities/modify-activity/modify-activity.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: "home", component: HomeComponent },
    { path: "activities", component: AllActivitiesComponent },
    { path: "contact", component: ContactComponent },
    { path: "activity-detail", component: CardActivityComponent },
    { path: "create-activity", component: CreateActivityComponent },
    { path: "modify-activity", component: ModifyActivityComponent },

  

   
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }