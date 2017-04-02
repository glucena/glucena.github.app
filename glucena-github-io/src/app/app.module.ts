import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ng-scrollreveal';

// Modules
import { NamePositionModule } from './cv/name-position.module';
import { SummaryModule } from './cv/summary.module';
import { ResumeModule } from './cv/resume.module';

// Routing
import { AppRoutingModule } from './app.routing.module';

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
    NgsRevealModule.forRoot(),
    SummaryModule,
    ResumeModule,
    NamePositionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
