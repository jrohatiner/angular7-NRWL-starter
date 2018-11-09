import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTab, MatTabsModule } from '@angular/material';

import { GetstartedComponent } from './getstarted.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule
  ],

  declarations: [GetstartedComponent, GetstartedModule],

})
export class GetstartedModule { }
