import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { ContentTableComponent } from './content-table/content-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TitleComponent,
    ContentTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
