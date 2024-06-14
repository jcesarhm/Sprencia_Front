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

  private activities: string;
    
  constructor(private httpClient: HttpClient) {
  
    this.activities = 'https://localhost:7010/api/Activity/' 
  }

  //REcuperar todos las Activities

  get() : any{
    const response = lastValueFrom( this.httpClient.get(this.activities + 'All'));
    return response;
  }
  
  getById(pId:number): any{
    const response = lastValueFrom( this.httpClient.get(this.activities + pId));
    return response;
  }

  addPost(post : any){
    const response = lastValueFrom( this.httpClient.post(this.activities, post));
    return response;
  }

  deleteActivityById(id: number) {
    const response = lastValueFrom( this.httpClient.delete(this.activities + id));
    return response;
    
  }

      





}
