import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarInmuebleComponent } from './consultar.component';

describe('ConsultarInmuebleComponent', () => {
  let component: ConsultarInmuebleComponent;
  let fixture: ComponentFixture<ConsultarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
