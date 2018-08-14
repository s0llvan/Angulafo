import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent }    from './index/index.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
{ path: '', component: IndexComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
	RouterModule.forRoot(
		appRoutes,
		{
enableTracing: true, // <-- debugging purposes only
}
)
	],
	exports: [
	RouterModule
	],
	providers: []
})
export class AppRoutingModule { }
