import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'documentation', loadChildren: './documentation/documentation.module#DocumentationModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: 'getstarted', loadChildren: './getstarted/getstarted.module#GetstartedModule' },
  { path: 'partone', loadChildren: './partone/partone.module#PartoneModule' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
