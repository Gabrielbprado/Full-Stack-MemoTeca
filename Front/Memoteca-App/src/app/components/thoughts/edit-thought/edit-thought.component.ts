import { thoughts } from '../thoughts';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThoughtService } from '../thought.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.css'
})
export class EditThoughtComponent {

  thought : thoughts = 
  {
    id: 0,
    thought: '',
    author: '',
    customModel: ''
  }
  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
) { }

ngOnInit() : void
{
  const id = this.route.snapshot.paramMap.get("id");
  this.service.GetId(parseInt(id!)).subscribe((thoughts) =>
  {
    this.thought = thoughts 
  });
}

EditThoughts()
{
  this.service.Put(this.thought).subscribe(() =>
  {
    this.router.navigate(['/listarPensamentos']);
  });
}

CancelSend()
{
  this.router.navigate(['/listarPensamentos']);

}

}
