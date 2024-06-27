import { Injectable } from '@angular/core';
import { Activity } from '../interfaces/activity';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
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
    return lastValueFrom( this.httpClient.get(this.urlApi + 'All'));
 
  }
  
  getById(pId:number): any{
    return  lastValueFrom( this.httpClient.get(this.urlApi + pId));
  
  }

  addPost(activity: Activity){
    return  lastValueFrom( this.httpClient.post(this.urlApi + 'AddActivity', activity));
    
  }

  deleteActivityById(id: number) {
    return lastValueFrom( this.httpClient.delete(this.urlApi + id));
    
    
  }

  edit(activityId: number, activity: Activity): any {
    return  lastValueFrom( this.httpClient.put(this.urlApi + activityId, activity));
  }

  
      



// quitar Activity en las peticiones 

}
