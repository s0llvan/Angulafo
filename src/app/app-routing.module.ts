import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }    from './index/index.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { RegisterComponent }    from './register/register.component';

const appRoutes: Routes = [
{ path: '', component: IndexComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
	RouterModule.forRoot(
		appRoutes,
		{
enableTracing: false, // <-- debugging purposes only
}
)
	],
	exports: [
	RouterModule
	],
	providers: []
})
export class AppRoutingModule { }
