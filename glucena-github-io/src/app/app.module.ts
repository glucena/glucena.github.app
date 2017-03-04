import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { NamePositionModule } from './cv/name-position.module';
import { SummaryModule } from './cv/summary.module';


// app module
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    SummaryModule,
    NamePositionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
