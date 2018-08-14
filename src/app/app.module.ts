import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';

@NgModule({
	declarations: [
	AppComponent,
	PageNotFoundComponent,
	IndexComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
