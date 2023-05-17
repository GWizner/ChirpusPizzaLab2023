import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UniquePipe } from './unique.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    UniquePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
