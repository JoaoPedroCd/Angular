import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoProdutoComponent } from './novo-produto.component';

describe('NovoProdutoComponent', () => {
  let component: NovoProdutoComponent;
  let fixture: ComponentFixture<NovoProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoProdutoComponent]
    });
    fixture = TestBed.createComponent(NovoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
