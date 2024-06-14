import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
  formulario!: FormGroup;
  showAlerts: boolean = false;
  mensajeAlert: any = '';
  activity?: any;
  constructor(private activitiesService: ActivitiesService,private activatedRoute: ActivatedRoute){
    
      this.activity = {
        id: 0,
        name: '',
        summary: '',
        price: 0,
        date: '',
        description: '',
      }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params.id);
      const id = parseInt(params.id);
       this.activity = this.activitiesService.getById(id);
    })
  }
   async onSubmit() {
    const  post = this.formulario.value;
    const postEnviado = {...post}
    this.mensajeAlert = await this.activitiesService.addPost(postEnviado)
    this.showAlerts = true;
    setTimeout(()=>this.showAlerts = false, 800) 
    this.formulario.reset();
    console.log(this.activitiesService);

  }

  checkError(control:string, error:string){
    if (this.formulario.get(control)?.hasError(error) && this.formulario.get(control)?.touched){
      return true
    } else{
      return false
    }
}
deleteActivity(id: number): any {
 const borrado : any = this.activitiesService.deleteActivityById(id);
  return borrado;
}
}





