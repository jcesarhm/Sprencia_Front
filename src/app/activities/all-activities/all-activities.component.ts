import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-all-activities',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './all-activities.component.html',
  styleUrl: './all-activities.component.css'
})
export class AllActivitiesComponent implements OnInit {
 
  listActivities : any[] = [];

activities: any;
  constructor(private activitiesService: ActivitiesService) 
  {}

  ngOnInit(): void {
    this.loadActivities();
 }

 private loadActivities() {
   const activity = this.activitiesService.getActivities()
   this.listActivities = activity;
  console.log(activity);
 }
}
