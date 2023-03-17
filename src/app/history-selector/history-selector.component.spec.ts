import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySelectorComponent } from './history-selector.component';

describe('HistorySelectorComponent', () => {
  let component: HistorySelectorComponent;
  let fixture: ComponentFixture<HistorySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
