import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivitiesService } from '../../../services/activities.service';
import { AllActivitiesComponent } from '../all-activities/all-activities.component';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-card-activity',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './card-activity.component.html',
  styleUrl: './card-activity.component.css'
})
export class CardActivityComponent {

  activity: any;
  comments: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activitiesService: ActivitiesService,
    private router: Router,
    private commentsService: CommentsService,

  ) {
    
  }
    async deleteActivityById(id: number) {
      if (confirm(`¿Estás seguro de eliminar el elemento ${this.activity.name}?`)){
      const borrado : any =  await this.activitiesService.deleteActivityById(id);
       this.router.navigate(["/activities"]);

      }
    }

  async ngOnInit() {
     this.activatedRoute.params.subscribe(async (params: any) => {
     console.log(params.id);
    const id = parseInt(params.id);
     this.activity = await this.activitiesService.getById(id);

     const response = await this.commentsService.getAll();
     this.comments = response;
     console.log(this.comments);
   
    
   });
}

editActivityById(id: number){
  console.log(id);
}


}
