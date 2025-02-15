import { Component, Input } from '@angular/core';
import { Aluno } from '../../interfaces/Aluno';

@Component({
  selector: 'app-student',
  standalone: false,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  @Input()
  aluno! : Aluno;


  textoGrande: string = '35px';
  textoMedio: string = '25px';
  textoPequeno: string = '15px';
}
