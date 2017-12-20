import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarPratoComponent } from './pesquisar-prato.component';

describe('PesquisarPratoComponent', () => {
  let component: PesquisarPratoComponent;
  let fixture: ComponentFixture<PesquisarPratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarPratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
