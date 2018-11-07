import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTextComponent } from './projects-text.component';

describe('ProjectsTextComponent', () => {
  let component: ProjectsTextComponent;
  let fixture: ComponentFixture<ProjectsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
