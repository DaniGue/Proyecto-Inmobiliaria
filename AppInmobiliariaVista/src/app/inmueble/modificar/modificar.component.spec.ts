import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarInmuebleComponent } from './modificar.component';

describe('ModificarInmuebleComponent', () => {
  let component: ModificarInmuebleComponent;
  let fixture: ComponentFixture<ModificarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
