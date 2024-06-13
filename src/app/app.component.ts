import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { AllActivitiesComponent } from './components/activities/all-activities/all-activities.component';
import { CardActivityComponent } from './components/activities/card-activity/card-activity.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AllActivitiesComponent, NgFor, CommonModule, NavbarComponent, FooterComponent, ContactComponent, HomeComponent, CardActivityComponent,]
})
export class AppComponent {
  title = 'Sprencia_front';
}
