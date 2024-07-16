import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'form-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './form-header.component.html',
  styleUrl: './form-header.component.scss'
})
export class FormHeaderComponent {

}
