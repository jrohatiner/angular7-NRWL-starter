import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartoneComponent } from './partone.component';

describe('PartoneComponent', () => {
  let component: PartoneComponent;
  let fixture: ComponentFixture<PartoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
