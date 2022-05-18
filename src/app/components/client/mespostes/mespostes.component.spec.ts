import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MespostesComponent } from './mespostes.component';

describe('MespostesComponent', () => {
  let component: MespostesComponent;
  let fixture: ComponentFixture<MespostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MespostesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MespostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
