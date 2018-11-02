import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartoneComponent } from './partone.component';

const routes: Routes = [
  { path: 'getstarted', loadChildren: './getstarted/getstarted.module#GetstartedModule' },
  { path: 'partone', loadChildren: './partone/partone.module#PartoneModule' },
  {path:'', component: PartoneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartoneRoutingModule { }
