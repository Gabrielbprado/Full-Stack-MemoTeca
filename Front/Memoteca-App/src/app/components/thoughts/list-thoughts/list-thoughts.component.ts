import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
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
    imports: [RouterModule ,ThoughtsComponent, ButtonPaginateComponent,CommonModule,ReactiveFormsModule,FormsModule]
})
export class ListThoughtsComponent implements OnInit{

  listThoughts:thoughts[] = []
  pag: number = 1;
  haveMoreThoughts: boolean = true;
  search: string = '';
  favorite: boolean = false;  
  MyMural: string = 'Meu Mural'

  constructor(private service:ThoughtService,private router:Router) {}

  LoadMore() 
  {
    console.log("this.pag");
    console.log(this.pag);
    console.log("this.favorite");
    console.log(this.favorite);
    

    this.service.GetAll(++this.pag,this.search,this.favorite).subscribe((listThoughts) =>
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
    this.service.GetAll(this.pag,this.search,this.favorite).subscribe((Thoughts) =>
    {
      this.listThoughts = Thoughts;
    
    });
  }

  SeeThoughts() : void
  {
    this.MyMural = 'Meus Favoritos'
   this.haveMoreThoughts = true;
    this.favorite = true;    
    this.pag = 1;
    this.service.GetAll(this.pag,this.search,this.favorite).subscribe((listThoughts) =>
    {
      this.listThoughts = listThoughts;

    });
  }
  ReloadComponent() {
    this.MyMural = 'Meu Mural';
    this.favorite = false;
    this.pag = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  
  ngOnInit() : void
  {    
    this.service.GetAll(this.pag,this.search,this.favorite).subscribe((listThoughts) =>
    {
      this.listThoughts = listThoughts;
    });
  }
}
