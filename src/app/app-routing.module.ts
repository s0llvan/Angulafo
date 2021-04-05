import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AuthGuard } from './services/auth-guard.service';
import { CategoryComponent } from './components/category/category.component';
import { NewTopicComponent } from './components/new-topic/new-topic.component';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';
import { ShowTopicComponent } from './components/show-topic/show-topic.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';

const appRoutes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'profil', component: ProfilComponent, canActivate: [AuthGuard] },
	// Categories
	{ path: 'categories/:id/new-topic', component: NewTopicComponent, canActivate: [AuthGuard] },
	{ path: 'categories/:id', component: CategoryComponent },
	// Topics
	{ path: 'topics/:id/edit', component: EditTopicComponent, canActivate: [AuthGuard] },
	{ path: 'topics/:id', component: ShowTopicComponent },
	// Posts
	{ path: 'topics/:id/new-post', component: NewPostComponent, canActivate: [AuthGuard] },
	// Authentification
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	// Admin
	{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
	{ path: 'admin/users/:id', component: AdminUserComponent, canActivate: [AuthGuard] },
	// Errors
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{
    enableTracing: false,
    relativeLinkResolution: 'legacy'
}
			)
		],
		exports: [
			RouterModule
		],
		providers: []
	})
	export class AppRoutingModule { }
	