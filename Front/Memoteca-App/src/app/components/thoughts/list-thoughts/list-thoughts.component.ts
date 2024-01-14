import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsComponent } from '../thoughts.component';
import { CommonModule } from '@angular/common';
import { thoughts } from '../thoughts';
import { ThoughtService } from '../thought.service';


@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [CommonModule,RouterModule,ThoughtsComponent],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {

  listThoughts:thoughts[] = []

  constructor(private service:ThoughtService) {}

  
  ngOnInit() : void
  {
    
    this.service.GetAll().subscribe((listThoughts) =>
    {
      this.listThoughts = listThoughts;
    });
  }
}
