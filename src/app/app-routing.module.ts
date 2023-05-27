import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routeCollection: Routes = [];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routeCollection,  // регистрирует входящие величины для этого модуля
			{
				preloadingStrategy: PreloadAllModules, // предзагрузка lazy load
			}
		),

	],
	exports: [RouterModule], // открывает публичный api к данным, которые мы сюда передаем
})

export class AppRoutingModule {
}
