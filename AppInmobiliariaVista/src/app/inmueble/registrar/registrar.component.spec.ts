import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInmuebleComponent } from './registrar.component';

describe('RegistrarInmuebleComponent', () => {
  let component: RegistrarInmuebleComponent;
  let fixture: ComponentFixture<RegistrarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
