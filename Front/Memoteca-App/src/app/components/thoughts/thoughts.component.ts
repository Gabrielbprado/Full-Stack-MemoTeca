import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thoughts.component.html',
  styleUrl: './thoughts.component.css'
})
export class ThoughtsComponent {

  

  @Input() thoughts = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
}

CheckCharacter() :string {
  if(this.thoughts.conteudo.length>=256)
    {
      return 'pensamento-g'
    }
    
      return 'pensamento-p'
    

}


}
