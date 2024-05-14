import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  getActivities() {
    return this.activities;;
  }

  // Esto es una tabla en BBDD --> actividades
  private activities: any[];

  constructor() {
    this.activities = [
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo lorem   ',
        price: 100,
        summary: '  lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso lorem ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
 
    ]
  }
}
