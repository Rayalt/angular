import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardModule} from '../../shared/card/card.module';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {Part8Component} from './part8.component';
import {HttpClientComponent} from '../http-client/http-client.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../interceptor/auth.interceptor';
import {HeaderSectionModule} from '../../shared/header-section/header-section.module';

const routeChildCollection: Routes = [
	{
		path: 'part8',
		component: Part8Component,
	},
];

const INTERCEPTOR_PROVIDER: Provider = {
	provide: HTTP_INTERCEPTORS,
	useClass: AuthInterceptor,
	multi: true, // для добавления интерсепторов поочередно, чтоб не перезаписали друг друга
};

@NgModule({
	declarations: [
		HttpClientComponent,
		Part8Component,
	],
	imports: [
		CommonModule,
		CardModule,
		FormsModule,
		HttpClientModule, // модуль для работы c http
		HeaderSectionModule,
		RouterModule.forChild(routeChildCollection),
	],
	providers: [
		// Тут регистрируем сервисы
		INTERCEPTOR_PROVIDER,
	],
	exports: [
		RouterModule,
	],
})

export class Part8Module {
}
