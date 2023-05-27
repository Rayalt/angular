// Модули Angular
import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

//Модули проекта
import {AppRoutingModule} from './app-routing.module';
import {ErrorPageModule} from './shared/error-page/error-page.module';
import {MenuModule} from './shared/menu/menu.module';
import {LoginModule} from './shared/login/login.module';
import {Part2Module} from './part2/part2/part2.module';
import {Part3Module} from './part3/part3/part3.module';
import {Part4Module} from './part4/part4/part4.module';
import {Part5Module} from './part5/part5/part5.module';
import {Part6Module} from './part6/part6/part6.module';
import {Part7Module} from './part7/part7/part7.module';
import {Part8Module} from './part8/part8/part8.module';
import {Part9Module} from './part9/part9/part9.module';
import {Part10Module} from './part10/part10/part10.module';
import {Part11Module} from './part11/part11/part11.module';
import {Part12Module} from './part12/part12/part12.module';
import {Part13Module} from './part13/part13/part13.module';
import {Part14Module} from './part14/part14/part14.module';

// Компоненты
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule, // сюда входит commonModule: ng модули и базовые пайпы
		AppRoutingModule,
		MenuModule,
		Part2Module,
		Part3Module,
		Part4Module,
		Part5Module,
		Part6Module,
		Part7Module,
		Part8Module,
		Part9Module,
		Part10Module,
		Part11Module,
		Part12Module,
		Part13Module,
		Part14Module,
		LoginModule,
		ErrorPageModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: !isDevMode(),
			// Register the ServiceWorker as soon as the application is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000'
		}),
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule {
}
