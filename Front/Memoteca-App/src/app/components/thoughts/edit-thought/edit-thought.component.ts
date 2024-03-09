import { thoughts } from '../thoughts-Model/thoughts';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThoughtService } from '../Services/thought.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-thought',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent {

 

  formulario!: FormGroup;


  
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
) { }

ngOnInit() : void
{
  const id = this.route.snapshot.paramMap.get("id");
  this.service.GetId(parseInt(id!)).subscribe((thoughts) =>
  {
    this.formulario = this.formBuilder.group({
      id : thoughts.id,
      thought: [thoughts.thought, [Validators.required]],
      author: [thoughts.author , [Validators.required]],
      customModel: [thoughts.customModel, [Validators.required]],
      favorite: [thoughts.favorite]
   
  });

  });

}

EditThoughts()
{
 
  this.service.Put(this.formulario.value).subscribe(() =>
  {
    this.router.navigate(['/listarPensamentos']);
  });

}

CancelSend()
{
  this.router.navigate(['/listarPensamentos']);

}

VerifyButton() : string
{
  if(this.formulario.valid)
  {
    return 'botao'
  }
  return 'botao__desabilitado'
}

}
