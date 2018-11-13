import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModule } from '@nrwl/nx';
import { MaterialModule } from '@workshop/material';
import { UiLoginModule } from '@workshop/ui-login';

import { GetstartedComponent} from './documentation/getstarted/getstarted.component';
import {PartoneComponent} from './documentation/partone/partone.component';
import {ParttwoComponent} from './documentation/parttwo/parttwo.component';
import {PartthreeComponent} from './documentation/partthree/partthree.component';
import { DocumentationComponent} from './documentation/documentation.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiToolbarModule } from '@workshop/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent,
    GetstartedComponent,
    PartoneComponent,
    ParttwoComponent,
    PartthreeComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    UiLoginModule,
    UiToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
