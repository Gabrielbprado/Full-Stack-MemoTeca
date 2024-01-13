import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsComponent } from '../thoughts.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-thoughts',
  standalone: true,
  imports: [CommonModule,RouterModule,ThoughtsComponent],
  templateUrl: './list-thoughts.component.html',
  styleUrl: './list-thoughts.component.css'
})
export class ListThoughtsComponent {

  listThoughts = [
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3'
  },
  {
    conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
    autoria: '',
    modelo: 'modelo1'
},
  ]
}
