import {Component, OnInit} from '@angular/core';

export interface Post {
	title: string
	text: string
	id?: number
}

@Component({
	selector: 'app-part3-post-container',
	templateUrl: './post-container.component.html',
})
export class PostContainerComponent implements OnInit {

	postLength: number = 100;

	postCollection: Post[] = [
		{
			title: 'Добрая половина выводов одухотворила всех причастных',
			text:
				'Картельные сговоры не допускают ситуации, при которой ключевые особенности структуры проекта',
			id: 1,
		},
		{
			title: 'Воистину радостный звук: песнь светлого будущего',
			text:
				'Мы вынуждены отталкиваться от того, что высокое качество позиционных исследований напрямую зависит ' +
				'от кластеризации усилий. С учётом сложившейся международной обстановки, граница обучения кадров ' +
				'прекрасно подходит для реализации экспериментов, поражающих по своей масштабности и грандиозности',
			id: 2,
		},
		{
			title: 'Сложившаяся структура организации даёт нам право',
			text:
				'Кстати, акционеры крупнейших компаний могут быть описаны максимально подробно. ' +
				'Таким образом, консультация с широким активом однозначно фиксирует необходимость кластеризации ' +
				'усилий. Являясь всего лишь частью общей картины, сторонники тоталитаризма в науке и по сей день',
			id: 3,
		},
	];

	ngOnInit(): void {
		setTimeout(() => {
			console.log('Timeout');
			this.postCollection[0] = {
				title: 'Заголовок изменен!',
				text:
					'Наше дело не так однозначно, как может показаться: выбранный нами инновационный путь ' +
					'способствует подготовке и реализации первоочередных требований',
				id: 4,
			};
		}, 5000);
	}

	updatePosts(post: Post) {
		this.postCollection.unshift(post);
		console.log('Post', post);
	}

	deletePost(id: number) {
		console.log('id to remove', id);
		this.postCollection = this.postCollection.filter(item => item.id !== id);
	}

}
