import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [//TODO: Decalaraciones, componentes, directivas, pipe
    AppComponent
  ],
  imports: [ // TODO: Solo de importan modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
