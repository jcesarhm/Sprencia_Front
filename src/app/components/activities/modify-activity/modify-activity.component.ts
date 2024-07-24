import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivitiesService } from '../../../services/activities.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-modify-activity',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,NgIf, CommonModule, RouterLinkActive,RouterLink],
  templateUrl: './modify-activity.component.html',
  styleUrl: './modify-activity.component.css'
})
export class ModifyActivityComponent {
  modifyActivity!: FormGroup;

   showAlerts: boolean = false;
    mensajeAlert: any = '';
   activity : any ;
  activityId!: any;

  constructor(private activitiesService: ActivitiesService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  
  ){}

    async ngOnInit() {
    this.modifyActivity =  new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      summary: new FormControl('', Validators.required),
      prices: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      // changeDate(){
      //   this.modifyActivity.patchValue({day: new Date, month: new Date, year: new Date});
      //   console.log(this.modifyActivity.value.date);
      // }
    })
 
    this.activatedRoute.params.subscribe(async (result: any)=> {
      console.log(result);
      const id = parseInt(result.id);
      this.activity = await this.activitiesService.getById(result.id);
 
      if (this.activity){
        this.modifyActivity.patchValue(this.activity, );
        this.activityId = this.activity.id;
        
        console.log(this.activityId);
      }
    });
   
    


  }
  async onSubmit() {
    console.log(this.modifyActivity.value);
     const newActivity: any =  {
      name: this.modifyActivity.value.name,
      summary: this.modifyActivity.value.summary,
      prices: this.modifyActivity.value.prices,
      date: this.modifyActivity.value.date!,
      description: this.modifyActivity.value.description,
    };
   
     this.activitiesService.edit(this.activityId, newActivity);{
     (confirm(`¿Estás seguro de modoficar ${this.activity.name}?`))
     if (this.activity){
        const borrado : any =  await this.activitiesService.edit(this.activityId, newActivity);
         this.router.navigate(["/activities"]);
    }else{
      this.showAlerts = true;
      this.mensajeAlert = 'No se ha modificado el elemento';
      setTimeout(() => {
        this.showAlerts = false;
      }, 3000);
    }
     
    console.log(newActivity);

    

  }

 
  }

  checkError(control: string, error: string) {
    if (this.modifyActivity.get(control)?.hasError(error) && this.modifyActivity.get(control)?.touched) {
      return true;
    } else {
      return false;
    }
  }
}







