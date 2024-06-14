import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NgIf } from '@angular/common';
import { ActivitiesService } from '../../../services/activities.service';
@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf, RouterLink, RouterOutlet],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.css'
})
export class CreateActivityComponent {

  formulario!: FormGroup;
  // showAlerts: boolean = false;
  // mensajeAlert: any = '';
  activity : any ;
  constructor(private activitiesService: ActivitiesService){
    
   
   
  }

//   ngOnInit(): void {
//     this.formulario = new FormGroup({
//       id: new FormControl(),
//       name: new FormControl('', Validators.required),
//       summary: new FormControl('', Validators.required),
//       price: new FormControl('', Validators.required),
//       date: new FormControl('', Validators.required),
//       description: new FormControl('', Validators.required),
//     });
//   }
   onSubmit() {
     const  post = this.formulario.value;
     const postEnviado = {...post}
     this.activity = this.activitiesService.addPost( postEnviado)
     console.log(this.activity);
      // this.mensajeAlert = this.activitiesService.addPost(postEnviado)
//      this.showAlerts = true;
//      setTimeout(()=>this.showAlerts = false, 800) 
//     this.formulario.reset();
//      console.log(this.activitiesService);

  }

   checkError(control:string, error:string){
     if (this.formulario.get(control)?.hasError(error) && this.formulario.get(control)?.touched){
      return true
     } else{
       return false
     }
 }

}
