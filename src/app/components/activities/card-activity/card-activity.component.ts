import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivitiesService } from '../../../services/activities.service';
import { AllActivitiesComponent } from '../all-activities/all-activities.component';

@Component({
  selector: 'app-card-activity',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './card-activity.component.html',
  styleUrl: './card-activity.component.css'
})
export class CardActivityComponent {

  activity?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activitiesService: ActivitiesService,
  ) {
    this.activity = {
      id: 0,
      name: '',
      summary: '',
      price: 0,
      date: '',
      description: '',
    }
  }
  // deleteActivity(id: number): any {
  //   if (confirm(`¿Estás seguro de eliminar el elemento ${this.activity.name}?`)){
  //    const borrado : string = this.activitiesService//.deleteActivityById(id);

  //  return borrado;
  //   }
  // }

  ngOnInit(): void {
  // this.activatedRoute.params.subscribe((params: any) => {
  //   console.log(params.id);
  //   const id = parseInt(params.id);
  //   this.activity = this.activitiesService.getById(id);
  // })
}

}
