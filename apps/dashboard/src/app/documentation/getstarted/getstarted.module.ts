import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetstartedRoutingModule } from './getstarted-routing.module';
import { GetstartedComponent } from './getstarted.component';

@NgModule({
  imports: [
    CommonModule,
    GetstartedRoutingModule
  ],

  declarations: [GetstartedComponent],

})
export class GetstartedModule { }
