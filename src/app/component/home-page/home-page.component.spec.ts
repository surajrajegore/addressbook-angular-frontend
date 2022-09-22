import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopmePageComponent } from './hopme-page.component';

describe('HopmePageComponent', () => {
  let component: HopmePageComponent;
  let fixture: ComponentFixture<HopmePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopmePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
