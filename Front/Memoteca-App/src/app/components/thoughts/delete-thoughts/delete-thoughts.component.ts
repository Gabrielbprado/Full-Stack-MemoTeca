import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Component } from '@angular/core';
import { thoughts } from '../thoughts-Model/thoughts';
import { ThoughtService } from '../Services/thought.service';

@Component({
  selector: 'app-delete-thoughts',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './delete-thoughts.component.html',
  styleUrl: './delete-thoughts.component.css'
})
export class DeleteThoughtsComponent {

  thought: thoughts = {
    id: 0,
    thought: '',
    author: '',
    customModel: ''
  }

 

  cancelar()
  {
    this.Router.navigate(['/listarPensamentos'])
  }

  constructor(private service: ThoughtService,private Router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.GetId(parseInt(id!)).subscribe((thought) =>
    {
      this.thought = thought;
    });
  }

  excluirPensamento()
  {
    if(this.thought.id)
    {
      this.service.Delete(this.thought.id).subscribe(() =>
      {
        this.Router.navigate(['/delete-pensamento']);
      });
    }
  }

}
