import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterPratoComponent } from './manter-prato.component';

describe('ManterPratoComponent', () => {
  let component: ManterPratoComponent;
  let fixture: ComponentFixture<ManterPratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterPratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
