import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCursosComponent } from './atualizar-cursos.component';

describe('AtualizarCursosComponent', () => {
  let component: AtualizarCursosComponent;
  let fixture: ComponentFixture<AtualizarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
