import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllActivitiesComponent } from "./activities/all-activities/all-activities.component";
import { CommonModule, NgFor } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AllActivitiesComponent, NgFor, CommonModule, NavbarComponent, FooterComponent, ContactComponent, HomeComponent]
})
export class AppComponent {
  title = 'Sprencia_front';
}
