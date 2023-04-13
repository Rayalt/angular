// Модули
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Компоненты
import { AppComponent } from './app.component';

import { CardComponent } from './shared/card/card.component';
import { MenuComponent } from './shared/menu/menu.component';

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
	],
	imports: [
		BrowserModule, // сюда входит commonModule: ng модули и базовые пайпы
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
	],
	providers: [
		// Тут регистрируем сервисы
		CounterService
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule { }
