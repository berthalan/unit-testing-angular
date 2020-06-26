import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './component/example.component';
import { ExampleRouteModule } from './example.route.module';
import {TableModule} from 'primeng';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    ExampleRouteModule,
    TableModule,
    ReactiveFormsModule
  ],
  exports: [
    ExampleComponent
  ],
  providers: []
})
export class ExampleModule { }
