import { ConsultarCursosComponent } from './consultar-cursos/consultar-cursos.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarCursosComponent } from './atualizar-cursos/atualizar-cursos.component';


const routes: Routes = [
  { path: 'cadastrar-curso', component: CadastrarCursoComponent },
  { path: 'consultar-cursos', component: ConsultarCursosComponent },
  { path: 'atualizar-cursos/:id', component: AtualizarCursosComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    CadastrarCursoComponent,
    ConsultarCursosComponent,
    AtualizarCursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
