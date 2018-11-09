import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationExampleComponent } from './table-pagination-example.component';

describe('TablePaginationExampleComponent', () => {
  let component: TablePaginationExampleComponent;
  let fixture: ComponentFixture<TablePaginationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePaginationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
