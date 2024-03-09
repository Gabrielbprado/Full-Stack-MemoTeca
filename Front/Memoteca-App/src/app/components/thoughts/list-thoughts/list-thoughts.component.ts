import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsComponent } from '../thoughts-Cards/thoughts.component';
import { thoughts } from '../thoughts-Model/thoughts';
import { ThoughtService } from '../Services/thought.service';
import { ButtonPaginateComponent } from "../../button-paginate/button-paginate.component";
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-list-thoughts',
    standalone: true,
    templateUrl: './list-thoughts.component.html',
    styleUrl: './list-thoughts.component.css',
    imports: [RouterModule, ThoughtsComponent, ButtonPaginateComponent,CommonModule,ReactiveFormsModule,FormsModule]
})
export class ListThoughtsComponent implements OnInit{

  listThoughts:thoughts[] = []
  pag: number = 1;
  haveMoreThoughts: boolean = true;
  search: string = '';

  constructor(private service:ThoughtService) {}

  LoadMore() 
  {
   
    this.service.GetAll(++this.pag,this.search).subscribe((listThoughts) =>
    {
      this.listThoughts.push(...listThoughts);
      if(!listThoughts.length)
      {
        this.haveMoreThoughts = false;
      }
    });
    
  }

  searchThoughts()
  {
    this.haveMoreThoughts = true;
    this.pag = 1;
    this.service.GetAll(this.pag,this.search).subscribe((listThoughts) =>
    {
      this.listThoughts = listThoughts;
    
    });
  }
  
  ngOnInit() : void
  {
    
    this.service.GetAll(this.pag,this.search).subscribe((listThoughts) =>
    {
      this.listThoughts = listThoughts;
    });
  }
}
