import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterRestauranteComponent } from './manter-restaurante.component';

describe('ManterRestauranteComponent', () => {
  let component: ManterRestauranteComponent;
  let fixture: ComponentFixture<ManterRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
