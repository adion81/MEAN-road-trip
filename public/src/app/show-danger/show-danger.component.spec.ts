import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDangerComponent } from './show-danger.component';

describe('ShowDangerComponent', () => {
  let component: ShowDangerComponent;
  let fixture: ComponentFixture<ShowDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
