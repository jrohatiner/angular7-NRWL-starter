import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParttwoComponent } from './parttwo.component';

describe('ParttwoComponent', () => {
  let component: ParttwoComponent;
  let fixture: ComponentFixture<ParttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
