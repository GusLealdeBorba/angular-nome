import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  @Input()
  aluno: any = {};
}
