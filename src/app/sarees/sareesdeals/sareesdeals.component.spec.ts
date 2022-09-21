import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareesdealsComponent } from './sareesdeals.component';

describe('SareesdealsComponent', () => {
  let component: SareesdealsComponent;
  let fixture: ComponentFixture<SareesdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SareesdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SareesdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
