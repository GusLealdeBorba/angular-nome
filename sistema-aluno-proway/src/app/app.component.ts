import { Component } from '@angular/core';
import { Aluno } from './interfaces/Aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Sistema Alunos Proway';

  exibicao: string = 'lista';

  listaAlunos: Aluno[] = [
    {
      nome: 'Gustavo Leal',
      curso: 'Angular',
      matricula:  73996,
      email: 'gusferax@gmail.com',
      cadastro:  true,
      img: '/assets/images/user.png'
    },
    {
      nome: 'Georgina Liso',
      curso: 'Angular',
      matricula:  79433,
      email: 'flavi@gmail.com',
      cadastro:  false,
      img: '/assets/images/user2.png'
    },
    {
      nome: 'Rudnei Nego',
      curso: 'Angular',
      matricula:  93422,
      email: 'rudsin@gmail.com',
      cadastro:  true,
      img: '/assets/images/user3.png'
    },
    {
      nome: 'Clarice Nega',
      curso: 'Angular',
      matricula:  94002,
      email: 'clanegan@gmail.com',
      cadastro:  false,
      img: '/assets/images/user4.png'
    }
  ];

  alterarExibicao(): void {
    if (this.exibicao == 'lista') {
      this.exibicao = 'cards';
    }else {
      this.exibicao = 'lista';
    }
    // 
  }
}
