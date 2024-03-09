import { ThoughtService } from './../Services/thought.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { thoughts } from '../thoughts-Model/thoughts';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-thoughts',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './thoughts.component.html',
  styleUrl: './thoughts.component.css'
})
export class ThoughtsComponent {

  constructor(private http: HttpClient,private service:ThoughtService) { }
  

  @Input() thoughts:thoughts = {
    id: 1,
    thought: 'I love Angular',
    author: 'Nay',
    customModel: 'modelo3',
    favorite: false
  }

CheckCharacter() :string {
  if(this.thoughts.thought.length>=256)
    {
      return 'pensamento-g'
    }
    
      return 'pensamento-p'
}

FavoriteAction() : string
{
  if(this.thoughts.favorite)
  {
    return 'icone-favorito-ativo.png'
  }
  return 'icone-favorito-inativo.png'
}

FavoriteThoughts()
{
  this.thoughts.favorite = !this.thoughts.favorite;
  this.service.FavoriteThoughts(this.thoughts).subscribe((thoughtss) =>
  {
   
    
  });
}


}
