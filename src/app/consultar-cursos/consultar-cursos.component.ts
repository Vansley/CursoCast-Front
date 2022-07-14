import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-cursos',
  templateUrl: './consultar-cursos.component.html',
  styleUrls: ['./consultar-cursos.component.css']
})
export class ConsultarCursosComponent implements OnInit {

//injeção de dependencia
constructor(private HttpClient: HttpClient) { }

//atributos para armazenas os dados dos cursos
curso: any[] = [];

  ngOnInit(): void {
    this.HttpClient.get(environment.apiUrl + '/cursos?descricao=' + this.formFiltro.value.descricao
    + "&dataAbertura=" + this.formFiltro.value.dataAbertura + "&dataFechamento=" +
    this.formFiltro.value.dataFechamento).subscribe
    ((data)=>{
      this.curso= data as any[];

    },
    (e)=> {
      console.log(e);
    }
    )
  }
  excluir(idCurso:number):void{
    if(window.confirm('Deseja realmente excluir o curso selecionado?')){
      this.HttpClient.delete(environment.apiUrl+"/cursos/"+idCurso,
     { responseType : 'text'})
     .subscribe(
        (data)=>{
          alert(data);
          this.ngOnInit();
        },
        (e)=>{
          alert(e.error)
          console.log(e);
        }
     )
    }
  }
  formFiltro = new FormGroup({
    //campos do formulário de consulta
    descricao: new FormControl(''),
    dataAbertura: new FormControl(''),
    dataFechamento: new FormControl('')

  });
get form(): any {
    return this.formFiltro.controls;

  }
  onSubmit(): void {

    this.HttpClient.get(environment.apiUrl + '/cursos?descricao=' + this.formFiltro.value.descricao
      + "&dataAbertura=" + this.formFiltro.value.dataAbertura + "&dataFechamento=" +
      this.formFiltro.value.dataFechamento).subscribe(

        (data) => { this.curso = data as any[]; },


        (error) => {
          console.log(error.error);
          console.log(this.curso);
        },

      )
  }
}
