import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-paginate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-paginate.component.html',
  styleUrl: './button-paginate.component.css'
})
export class ButtonPaginateComponent {

  @Input() haveMorThoughts: boolean = false;

}
