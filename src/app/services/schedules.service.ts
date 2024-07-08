import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = 'https://localhost:7010/api/Schedule/' 
   }

   //Obtener todos los horarios
  getSchedules(): any {
    return lastValueFrom(this.httpClient.get(this.urlApi + 'All'));
  }
}
