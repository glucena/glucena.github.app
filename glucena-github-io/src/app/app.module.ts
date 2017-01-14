import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// cv module
import { CvModule } from './cv/cv.module';

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
    CvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
