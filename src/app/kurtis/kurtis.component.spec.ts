import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtisComponent } from './kurtis.component';

describe('KurthiesComponent', () => {
  let component: KurtisComponent;
  let fixture: ComponentFixture<KurtisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurtisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
