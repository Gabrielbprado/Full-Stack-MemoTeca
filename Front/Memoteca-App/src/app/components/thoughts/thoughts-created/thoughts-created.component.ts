import { CommonModule } from '@angular/common';
import { routes } from './../../../app.routes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { thoughts } from '../thoughts-Model/thoughts';
import { ThoughtService } from '../Services/thought.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-thoughts-created',
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: './thoughts-created.component.html',
  styleUrl: './thoughts-created.component.css'
})

export class ThoughtsCreatedComponent implements OnInit {



  formulario!: FormGroup;
  constructor(private service: ThoughtService, private Router: Router,private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      thought: ['', [Validators.required]],
      author: ['' , [Validators.required]],
      customModel: ['modelo1', [Validators.required]],

    });
  }

  createdThoughts()
  {
    if(this.formulario.valid)
    {
      this.service.Post(this.formulario.value).subscribe(() =>
      {
        this.Router.navigate(['/listarPensamentos'])
      });

    }
        
  }

  CancelSend()
  {
    this.Router.navigate(['/listarPensamentos']);
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
