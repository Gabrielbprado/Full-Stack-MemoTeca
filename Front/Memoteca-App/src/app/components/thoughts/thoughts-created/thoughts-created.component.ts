import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-thoughts-created',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './thoughts-created.component.html',
  styleUrl: './thoughts-created.component.css'
})

export class ThoughtsCreatedComponent {

  thoughts = {
    id : '1',
    content : 'Learning Angular',
    author : 'dev',
    modelo : 'modelo 1'

  }

  createdThoughts()
  {
    alert("Thougths Created");
  }

  CancelSend()
  {
    
  }

}
