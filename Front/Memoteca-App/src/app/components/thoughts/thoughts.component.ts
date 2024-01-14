import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { thoughts } from './thoughts';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-thoughts',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './thoughts.component.html',
  styleUrl: './thoughts.component.css'
})
export class ThoughtsComponent {

  

  @Input() thoughts:thoughts = {
    id: 1,
    thought: 'I love Angular',
    author: 'Nay',
    customModel: 'modelo3'
}

CheckCharacter() :string {
  if(this.thoughts.thought.length>=256)
    {
      return 'pensamento-g'
    }
    
      return 'pensamento-p'
    

}


}
