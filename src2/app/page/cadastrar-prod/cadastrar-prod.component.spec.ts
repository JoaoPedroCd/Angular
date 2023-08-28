import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProdComponent } from './cadastrar-prod.component';

describe('CadastrarProdComponent', () => {
  let component: CadastrarProdComponent;
  let fixture: ComponentFixture<CadastrarProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarProdComponent]
    });
    fixture = TestBed.createComponent(CadastrarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
