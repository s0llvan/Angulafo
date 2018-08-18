import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
	declarations: [
	AppComponent,
	PageNotFoundComponent,
	IndexComponent,
	RegisterComponent,
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	FormsModule,
	HttpClientModule
	],
	providers: [
	ApiService,
	CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
