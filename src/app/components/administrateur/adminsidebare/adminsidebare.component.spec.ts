import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsidebareComponent } from './adminsidebare.component';

describe('AdminsidebareComponent', () => {
  let component: AdminsidebareComponent;
  let fixture: ComponentFixture<AdminsidebareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsidebareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsidebareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
