import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HomeRoutingModule } from '../home-routing.module';
import { HomeComponent } from '../home.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class DocumentationComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }
}
