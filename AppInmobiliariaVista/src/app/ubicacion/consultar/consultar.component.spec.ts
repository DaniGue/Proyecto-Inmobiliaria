import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarUbicacionComponent } from './consultar.component';

describe('ConsultarUbicacionComponent', () => {
  let component: ConsultarUbicacionComponent;
  let fixture: ComponentFixture<ConsultarUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
