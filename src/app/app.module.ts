import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IndexComponent } from './components/index/index.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { ProfilComponent } from './components/profil/profil.component';
import { CategoryComponent } from './components/category/category.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';
import { ShowTopicComponent } from './components/show-topic/show-topic.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';

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
		EditTopicComponent,
		ShowTopicComponent,
		NewPostComponent,
		AdminComponent,
		AdminUserComponent,
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
