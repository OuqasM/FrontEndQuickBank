import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaclamationComponent } from './raclamation.component';

describe('RaclamationComponent', () => {
  let component: RaclamationComponent;
  let fixture: ComponentFixture<RaclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
