import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLaHuertaTiendaComponent } from './modal-la-huerta-tienda.component';

describe('ModalLaHuertaTiendaComponent', () => {
  let component: ModalLaHuertaTiendaComponent;
  let fixture: ComponentFixture<ModalLaHuertaTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLaHuertaTiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLaHuertaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
