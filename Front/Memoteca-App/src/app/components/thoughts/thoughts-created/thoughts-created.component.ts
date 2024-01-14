import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { thoughts } from '../thoughts';
import { ThoughtService } from '../thought.service';


@Component({
  selector: 'app-thoughts-created',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './thoughts-created.component.html',
  styleUrl: './thoughts-created.component.css'
})

export class ThoughtsCreatedComponent {

   thoughts:thoughts = {
    thought : ' ',
    author : '',
    customModel : 'modelo1'

  }
  constructor(private service: ThoughtService, private Router: Router) {}

  createdThoughts()
  {
        this.service.Post(this.thoughts).subscribe(() =>
        {
          this.Router.navigate(['/listarPensamentos'])
        });
        
  }

  CancelSend()
  {
    this.Router.navigate(['/listarPensamentos']);
  }

}
