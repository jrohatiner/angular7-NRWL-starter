import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material';

import { DocumentationComponent } from './documentation.component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [DocumentationComponent],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
