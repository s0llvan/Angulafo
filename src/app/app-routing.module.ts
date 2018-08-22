import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }    from './index/index.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { RegisterComponent }    from './register/register.component';
import { LoginComponent }    from './login/login.component';
import { ProfilComponent }    from './profil/profil.component';
import { AuthGuard }    from './auth-guard.service';

const appRoutes: Routes = [
{ path: '', component: IndexComponent },
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
