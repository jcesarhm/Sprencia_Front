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

  activity: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activitiesService: ActivitiesService,
  ) {
    
  }
    async deleteActivityById(id: number) {
      if (confirm(`¿Estás seguro de eliminar el elemento ${this.activity.name}?`)){
      const borrado : any =  await this.activitiesService.deleteActivityById(id);

     return borrado;
      }
    }

  async ngOnInit() {
     this.activatedRoute.params.subscribe(async (params: any) => {
     console.log(params.id);
    const id = parseInt(params.id);
     this.activity = await this.activitiesService.getById(id);
    
   })
}

}
