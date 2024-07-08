import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  getComments(){
    return this.urlApi;
  }

  private urlApi: string;

  constructor(private httpClient: HttpClient) { 
    this.urlApi = 'https://localhost:7010/api/Comment/';  // Aquí debes insertar la URL de la API que devuelve los comentarios
  }


// En el componente que necesita los comentarios, importa el servicio y usa la función getComments() para obtener los comentarios:

getAll() : any {
  return lastValueFrom(this.httpClient.get(this.urlApi + 'All'))
}
}