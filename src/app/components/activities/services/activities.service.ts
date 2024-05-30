import { Injectable } from '@angular/core';
import { Activity } from '../../../interfaces/activity';
@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  getActivities() {
    return this.activities;;
  }

  // Esto es una tabla en BBDD --> actividades
  private activities: Activity[];

  constructor() {
    this.activities= [
      {
        id: 1,
        name: 'Puente Romano',
        price: 100,
        summary: '  lorem gener  invalide del  comando   com   sucesso Contrary to popular belief.',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        price: 300,
        summary: 'lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        price: 100,
        summary: 'lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente RomanoContrary ',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
     
     
    ]
  }
}
