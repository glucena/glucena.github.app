import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgsRevealModule } from 'ng-scrollreveal';
import { AngularFireModule } from 'angularfire2';

// Modules
import { NamePositionModule } from './cv/name-position.module';
import { SummaryModule } from './cv/summary.module';
import { ResumeModule } from './cv/resume.module';
import { FooterModule } from './cv/footer.module';
import { ContactsModule } from './cv/contacts.module';
import { DetailedCvModule } from './cv/detailed-cv.module';

// Routing
import { AppRoutingModule } from './app.routing.module';

// app module
import { AppComponent } from './app.component';

// environment
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    NgsRevealModule.forRoot(),
    SummaryModule,
    ResumeModule,
    NamePositionModule,
    FooterModule,
    ContactsModule,
    DetailedCvModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
