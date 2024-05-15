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
        description: 'Marbella paseo lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  ',
        price: 100,
        summary: '  lorem gener  invalide del  comando   com   sucesso Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo preciosoContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genialContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseoContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo preciosoContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 300,
        summary: 'lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genialContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseoContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genia Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.l',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente RomanoContrary ',
        description: 'Marbella paseo to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
      {
        id: 2,
        name: 'Castillo Cullera',
        description: 'Castillo precioso  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 300,
        summary: 'lorem lorem Ipsum wrbb al ty ekrbeprkm  q',
        date: '21-01-2021'
      },
      {
        id: 3,
        name: 'Casas colgadas',
        description: 'Preciosas y se come genial Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem ipsum dolor sit amet, consectetur adipiscing elit eses aliqu ewv',
        date: '14-06-2021'
      },
      {
        id: 1,
        name: 'Puente Romano',
        description: 'Marbella paseo Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        price: 100,
        summary: 'lorem lorem gener  invalide del  comando   com   sucesso  ',
        date: '23-05-2023'
      },
     
     
    ]
  }
}
