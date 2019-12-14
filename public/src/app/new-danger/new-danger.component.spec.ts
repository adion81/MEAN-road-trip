import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDangerComponent } from './new-danger.component';

describe('NewDangerComponent', () => {
  let component: NewDangerComponent;
  let fixture: ComponentFixture<NewDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
