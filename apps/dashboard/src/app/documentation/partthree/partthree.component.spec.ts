import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartthreeComponent } from './partthree.component';

describe('PartthreeComponent', () => {
  let component: PartthreeComponent;
  let fixture: ComponentFixture<PartthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
