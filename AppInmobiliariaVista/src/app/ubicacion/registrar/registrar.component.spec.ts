import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUbicacionComponent } from './registrar.component';

describe('RegistrarUbicacionComponent', () => {
  let component: RegistrarUbicacionComponent;
  let fixture: ComponentFixture<RegistrarUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
