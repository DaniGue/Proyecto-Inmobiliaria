import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarUbicacionComponent } from './modificar.component';

describe('ModificarUbicacionComponent', () => {
  let component: ModificarUbicacionComponent;
  let fixture: ComponentFixture<ModificarUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
