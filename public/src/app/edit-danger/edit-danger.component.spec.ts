import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDangerComponent } from './edit-danger.component';

describe('EditDangerComponent', () => {
  let component: EditDangerComponent;
  let fixture: ComponentFixture<EditDangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
