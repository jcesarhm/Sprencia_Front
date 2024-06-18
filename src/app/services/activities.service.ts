import { Injectable } from '@angular/core';
import { Activity } from '../interfaces/activity';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  getActivities() {
    return this.urlApi;
  }

  private urlApi: string;
    
  constructor(private httpClient: HttpClient) {
  
    this.urlApi = 'https://localhost:7010/api/Activity/' 
  }

  //REcuperar todos las Activities

  get() : any{
    const response = lastValueFrom( this.httpClient.get(this.urlApi + 'All'));
    return response;
  }
  
  getById(pId:number): any{
    const response = lastValueFrom( this.httpClient.get(this.urlApi + pId));
    return response;
  }

  addPost(activity: Activity){
    const response = lastValueFrom( this.httpClient.post(this.urlApi + 'AddActivity', activity));
    return response;
  }

  deleteActivityById(id: number) {
    const response = lastValueFrom( this.httpClient.delete(this.urlApi + id));
    return response;
    
  }

      





}
