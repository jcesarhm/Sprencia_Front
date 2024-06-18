import { Component, OnInit } from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivitiesService } from '../../../services/activities.service';
@Component({
  selector: 'app-all-activities',
  standalone: true,
  imports: [NgFor, CommonModule,RouterOutlet, RouterLink],
  templateUrl: './all-activities.component.html',
  styleUrl: './all-activities.component.css'
})
export class AllActivitiesComponent implements OnInit {
 



activities: any;
  constructor(private activitiesService: ActivitiesService) 
  {}

  async ngOnInit() {
    const response = await this.activitiesService.get();
    this.activities = response;
    console.log(this.activities);
  
 }



}
 
