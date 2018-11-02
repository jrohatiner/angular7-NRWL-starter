import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { ParttwoComponent } from './parttwo/parttwo.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { PartoneComponent } from './partone/partone.component';
import { PartthreeComponent } from './partthree/partthree.component';

@NgModule({
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ],
  declarations: [DocumentationComponent, GetstartedComponent, PartoneComponent, ParttwoComponent, PartthreeComponent],
  exports: [DocumentationComponent]
})
export class DocumentationModule { }
