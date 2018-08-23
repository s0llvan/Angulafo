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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { ProfilComponent } from './profil/profil.component';
import { CategoryComponent } from './category/category.component';
import { NewTopicComponent } from './new-topic/new-topic.component';

@NgModule({
	declarations: [
	AppComponent,
	PageNotFoundComponent,
	IndexComponent,
	RegisterComponent,
	LoginComponent,
	ProfilComponent,
	CategoryComponent,
	NewTopicComponent,
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	FormsModule,
	HttpClientModule
	],
	providers: [
	ApiService,
	AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
