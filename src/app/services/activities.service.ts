import { Injectable } from '@angular/core';
import { Activity } from '../interfaces/activity';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  getActivities() {
    return this.activities;
  }
  // getById (pId: number): Activity | undefined {
  //   const activity = this.activities.find(activity => activity.id === pId);
  //   return activity;
  // }

  // addPost(post: Activity){
  //   this.activities.push(post);
  //   return'post añadido';
  // }

  // deleteActivityById(id: number) {
  //   const index = this.activities.findIndex(activity => activity.id === id);
  //   this.activities.splice(index, 1);
  //   return'post eliminado';
    
  // }

  // Esto es una tabla en BBDD --> actividades

  // Esto es una tabla en BBDD --> actividades


    private activities: string;
    
  constructor(private httpClient: HttpClient) {
  
    this.activities = 'https://localhost:7010/api/Activity/' 
  }

  //REcuperar todos las Activities

  get() : any{
    const response = lastValueFrom( this.httpClient.get(this.activities + 'AllActivities'));
    return response;
  }
  
      





}
