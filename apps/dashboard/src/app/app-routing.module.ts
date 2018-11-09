import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';
import { DocumentationComponent} from './documentation/documentation.component';
import { GetstartedComponent} from './documentation/getstarted/getstarted.component';
import {PartoneComponent} from './documentation/partone/partone.component';
import {ParttwoComponent} from './documentation/parttwo/parttwo.component';
import {PartthreeComponent} from './documentation/partthree/partthree.component';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'getstarted', component: GetstartedComponent },
  { path: 'Partone', component: PartoneComponent },
  { path: 'parttwo', component: ParttwoComponent },
  { path: 'partthree', component: PartthreeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
