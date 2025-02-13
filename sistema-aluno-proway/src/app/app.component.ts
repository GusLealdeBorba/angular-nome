import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema Aluno Proway';

  listaAlunos = [
    {
      nome: 'Gustavo Leal',
      curso: 'Angular',
      matricula:  73996,
      email: 'gusferax@gmail.com',
      cadastro:  true,
    },
    {
      nome: 'Flavia Saraiva',
      curso: 'Angular',
      matricula:  79433,
      email: 'flavi@gmail.com',
      cadastro:  true,
    },
    {
      nome: 'Rudnei Nego',
      curso: 'Angular',
      matricula:  93422,
      email: 'rudsin@gmail.com',
      cadastro:  true,
    }
  ];
}
