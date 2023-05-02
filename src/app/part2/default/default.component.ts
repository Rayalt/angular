import { Component } from '@angular/core'; // импорт декоратора Component

@Component({
	selector: 'app-part2-default',
	templateUrl: './default.component.html',
	styleUrls: ['default.component.scss'],
}) // обязательно передаем набор свойств в декоратор мин набор опций (selector, templateUrl), иначе будут ошибки

export class DefaultComponent {} // объявляем компонент в модуле
