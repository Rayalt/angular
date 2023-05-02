// Модули Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Модули проекта
import { AppRoutingModule } from "./app-routing.module";
import { ErrorPageModule } from "./shared/error-page/error-page.module";
import { MenuModule } from "./shared/menu/menu.module";
import { LoginModule } from "./shared/login/login.module";
import { Part2Module } from "./part2/part2/part2.module";
import { Part3Module } from "./part3/part3/part3.module";
import { Part4Module } from "./part4/part4/part4.module";
import { Part5Module } from "./part5/part5/part5.module";
import { Part6Module } from "./part6/part6/part6.module";
import { Part7Module } from "./part7/part7/part7.module";
import { Part8Module } from "./part8/part8/part8.module";
import { Part9Module } from "./part9/part9/part9.module";
import { Part10Module } from "./part10/part10/part10.module";


// Компоненты
import { AppComponent } from './app.component';

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
		LoginModule,
		ErrorPageModule,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
