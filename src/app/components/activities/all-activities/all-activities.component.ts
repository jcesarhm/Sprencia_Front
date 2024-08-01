import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivitiesService } from '../../../services/activities.service';
import { SchedulesService } from '../../../services/schedules.service';
@Component({
  selector: 'app-all-activities',
  standalone: true,
  imports: [NgFor, CommonModule,RouterOutlet, RouterLink,],
  templateUrl: './all-activities.component.html',
  styleUrl: './all-activities.component.css'
})
export class AllActivitiesComponent implements OnInit {
 


schedules: any;
activities: any;
dateFront: number | Date | undefined;
  constructor(private activitiesService: ActivitiesService,
    private schedulesService: SchedulesService,
  ) 
  {}

  async ngOnInit() {
    const response = await this.activitiesService.get();
    this.activities = response;
    console.log(this.activities);
    
    const res = await this.schedulesService.getSchedules();
    this.schedules = res;
    console.log(this.schedules);
  
 }



}
 
