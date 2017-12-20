import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarRestauranteComponent } from './pesquisar-restaurante.component';

describe('PesquisarRestauranteComponent', () => {
  let component: PesquisarRestauranteComponent;
  let fixture: ComponentFixture<PesquisarRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
