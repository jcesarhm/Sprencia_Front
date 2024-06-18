import { Component, OnInit, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { ActivitiesService } from '../../../services/activities.service';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf, RouterLink, RouterOutlet, ],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.css'
})
export class CreateActivityComponent {

  form!: FormGroup;
  router=inject(Router)
   showAlerts: boolean = false;
    mensajeAlert: any = '';
   activity : any ;
  constructor(private activitiesService: ActivitiesService,
    
  ){ }

      ngOnInit() {
    this.form =  new FormGroup({
      name: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      prices: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    }, []);
  }
       async onSubmit() {
    console.log(this.form.value);
     const newActivity: any =  {
      name: this.form.value.name!,
      summary: this.form.value.summary!,
      prices: this.form.value.prices!,
      date: this.form.value.dates!,
      description: this.form.value.description!,
    };
      this.activitiesService.addPost(newActivity)
      console.log(newActivity);
     this.router.navigateByUrl("/activities");

  }

  checkError(control: string, error: string) {
    if (this.form.get(control)?.hasError(error) && this.form.get(control)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}

