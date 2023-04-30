// Модули
import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Компоненты
import { AppComponent } from './app.component';

import { CardComponent } from './shared/card/card.component';
import { MenuComponent } from './shared/menu/menu.component';
// import { MenuPrimeComponent } from "./shared/menu-prime/menu-prime.component";

// import { MenuModule } from "primeng/menu";
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { InterpolationComponent } from './part2/interpolation/interpolation.component';
import { DefaultComponent } from './part2/default/default.component';
import { OnlyTsComponent } from './part2/only-ts/only-ts.component';
import { OneWayBindingComponent } from './part2/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './part2/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './part2/directives/directives.component';
import { PipesComponent } from './part2/pipes/pipes.component';

import { PostFormComponent } from './part3/post-form/post-form.component';
import { PostComponent } from './part3/post/post.component';
import { PostContainerComponent } from './part3/post-container/post-container.component';

import { StyleDirective } from './part4/directives/style.directive';
import { DirectivesContentComponent } from './part4/directives-content/directives-content.component';
import { DirectiveStructureComponent } from './part4/directive-structure/directive-structure.component';
import { IfNotDirective } from './part4/directives/if-not.directive';

import { PipesDetailsComponent } from './part5/pipes-details/pipes-details.component';
import { PipesCreateComponent } from './part5/pipes-create/pipes-create.component';
import { MultByPipe } from './part5/pipes-create/mult-by.pipe';
import { ExMarksPipe } from './part5/pipes-create/ex-marks.pipe';
import { PipesFilterPostsComponent } from './part5/pipes-filter-posts/pipes-filter-posts.component';
import { FilterPipe } from './part5/pipes-filter-posts/filter.pipe';
import { PipeAsyncComponent } from './part5/pipe-async/pipe-async.component';

import { ServiceCreateComponent } from './part6/service-create/service-create.component';
import { CounterService } from './part6/service-create/counter-service';
import { CounterComponent } from './part6/counter/counter.component';

import { FormComponent } from './part7/form/form.component';
import { OwnNgModelComponent } from './part7/own-ng-model/own-ng-model.component';
import { SwitchComponent } from './part7/switch/switch.component';
import {ButtonModule} from "primeng/button";
import { HttpClientComponent } from './part8/http-client/http-client.component';
import { Part2Component } from './part2/part2/part2.component';
import { Part3Component } from './part3/part3/part3.component';
import { Part4Component } from './part4/part4/part4.component';
import { Part5Component } from './part5/part5/part5.component';
import { Part6Component } from './part6/part6/part6.component';
import { Part7Component } from './part7/part7/part7.component';
import { Part8Component } from './part8/part8/part8.component';
import { HeaderSectionComponent } from './shared/header-section/header-section.component';
import * as http from "http";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./part8/interceptor/auth.interceptor";

import {AppRoutingModule} from "./app-routing.module";
import { Part9Component } from './part9/part9/part9.component';
import { NavigationComponent } from './part9/navigation/navigation.component';
import { Post2Component } from './part9/post2/post2.component';
import { AllPostsComponent } from './part9/all-posts/all-posts.component';
import { NestedPagesComponent } from './part9/nested-pages/nested-pages.component';
import { NestedComponent } from './part9/nested/nested.component';
import { ErrorPageComponent } from './part9/error-page/error-page.component';
import { LoginComponent } from './part9/login/login.component';


const INTERCEPTOR_PROVIDER: Provider = {
	provide: HTTP_INTERCEPTORS,
	useClass: AuthInterceptor,
	multi: true, // для добавления интерсепторов поочередно, чтоб не перезаписали друг друга
};

@NgModule({
	declarations: [
		AppComponent,
		DefaultComponent, // объявляем компонент в модуле
		OnlyTsComponent,
		InterpolationComponent,
		OneWayBindingComponent,
		TwoWayBindingComponent,
		DirectivesComponent,
		PipesComponent,
		PostFormComponent,
		PostComponent,
		PostContainerComponent,
		StyleDirective,
		DirectivesContentComponent,
		DirectiveStructureComponent,
		IfNotDirective,
		PipesDetailsComponent,
		CardComponent,
		PipesCreateComponent,
		MultByPipe,
		ExMarksPipe,
		PipesFilterPostsComponent,
		FilterPipe,
		PipeAsyncComponent,
		ServiceCreateComponent,
		CounterComponent,
		MenuComponent,
		FormComponent,
		OwnNgModelComponent,
		SwitchComponent,
		// MenuPrimeComponent,
		HttpClientComponent,
		Part2Component,
		Part3Component,
		Part4Component,
		Part5Component,
		Part6Component,
		Part7Component,
		Part8Component,
		HeaderSectionComponent,
  Part9Component,
  NavigationComponent,
  Post2Component,
  AllPostsComponent,
  NestedPagesComponent,
  NestedComponent,
  ErrorPageComponent,
  LoginComponent,
	],
	imports: [
		BrowserModule, // сюда входит commonModule: ng модули и базовые пайпы
		// BrowserAnimationsModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		// MenuModule,
		ButtonModule,
		HttpClientModule, // модуль для работы c http
		AppRoutingModule,
	],
	providers: [
		// Тут регистрируем сервисы
		CounterService,
		INTERCEPTOR_PROVIDER,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
