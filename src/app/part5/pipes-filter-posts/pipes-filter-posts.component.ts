import {Component, ElementRef, Input, OnInit} from '@angular/core';

export interface PostTemplate {
	title: string,
	text: string,
	tags: string,
}

@Component({
	selector: 'app-part5-pipes-filter-posts',
	templateUrl: './pipes-filter-posts.component.html',
})
export class PipesFilterPostsComponent implements OnInit {

	@Input() search: string = '';
	@Input() searchParameter: keyof PostTemplate = 'title';
	@Input('searchField') searchField!: ElementRef;
	/*TODO: чтоб не было ошибки, надо писать searchParameter: keyof PostTemplate*/

	allPost: PostTemplate[] = [
		{
			title: 'Реализация намеченных плановых заданий стала доступной ширнармассам',
			text:
				'В частности, граница обучения кадров в значительной степени ' +
				'обусловливает важность анализа существующих паттернов поведения.',
			tags: 'новости, экономика'
		},
		{
			title: 'Мелочь, а приятно: зима близко',
			text:
				'Но ключевые особенности структуры проекта будут ' +
				'объективно рассмотрены соответствующими инстанциями.',
			tags: 'новости, наука'
		},
		{
			title: 'Нашу победу сопровождал ласковый перезвон вертикали власти',
			text:
				'А также некоторые особенности внутренней политики формируют глобальную экономическую сеть ' +
				'и при этом — заблокированы в рамках своих собственных рациональных ограничений.',
			tags: 'новости, техника'
		},
	];

	constructor() {
	}

	ngOnInit(): void {
	}

	addNewPost() {
		this.allPost.unshift({
			title: 'Очевидцы сообщают, что слышали звон колоколов',
			text:
				'Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы ' +
				'и по сей день остаются уделом либералов, которые жаждут быть заблокированы ' +
				'в рамках своих собственных рациональных ограничений.',
			tags: 'акция',
		});
	}

	focusSearch() {
		this.searchField.nativeElement.focus();
		//todo делать фокус полю
	}

}
