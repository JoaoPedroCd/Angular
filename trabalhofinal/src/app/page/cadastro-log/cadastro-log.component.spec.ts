import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLogComponent } from './cadastro-log.component';

describe('CadastroLogComponent', () => {
  let component: CadastroLogComponent;
  let fixture: ComponentFixture<CadastroLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroLogComponent]
    });
    fixture = TestBed.createComponent(CadastroLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
