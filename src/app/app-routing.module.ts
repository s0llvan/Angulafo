import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }    from './index/index.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { RegisterComponent }    from './register/register.component';
import { LoginComponent }    from './login/login.component';
import { ProfilComponent }    from './profil/profil.component';
import { AuthGuard }    from './auth-guard.service';
import { CategoryComponent } from './category/category.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { ShowTopicComponent } from './show-topic/show-topic.component';

const appRoutes: Routes = [
{ path: '', component: IndexComponent },
{ path: 'categories/:id/new-topic', component: NewTopicComponent, canActivate: [AuthGuard] },
{ path: 'categories/:id', component: CategoryComponent },
{ path: 'topics/:id/edit', component: EditTopicComponent, canActivate: [AuthGuard] },
{ path: 'topics/:id', component: ShowTopicComponent },
{ path: 'profil', component: ProfilComponent, canActivate: [AuthGuard] },
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
	RouterModule.forRoot(
		appRoutes,
		{
			enableTracing: false,
		}
		)
	],
	exports: [
	RouterModule
	],
	providers: []
})
export class AppRoutingModule { }
