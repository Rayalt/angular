import {Injectable} from '@angular/core';

export interface Post2Template {
	title: string,
	text: string,
	id: number,
}

@Injectable({
	providedIn: 'root'
})

export class AllPostsService {

	allPosts: Post2Template[] = [
		{
			title: 'Частотность поисковых запросов оказалась ошибочной',
			text:
				'Банальные, но неопровержимые выводы, а также представители современных социальных резервов, ' +
				'превозмогая сложившуюся непростую экономическую ситуацию, представлены ' +
				'в исключительно положительном свете.',
			id: 11,
		},
		{
			title: 'Средства индивидуальной защиты оказались бесполезны',
			text:
				'Картельные сговоры не допускают ситуации, при которой реплицированные с зарубежных источников, ' +
				'современные исследования набирают популярность среди определенных слоев населения, а значит, ' +
				'должны быть заблокированы в рамках своих собственных рациональных ограничений.',
			id: 22,
		},
		{
			title: 'Семантический разбор внешних противодействий бодрит',
			text:
				'Кстати, сделанные на базе интернет-аналитики выводы рассмотрены ' +
				'исключительно в разрезе маркетинговых и финансовых предпосылок.',
			id: 33,
		},
		{
			title: 'Курс на социально-ориентированный национальный проект развеял последние сомнения',
			text:
				'Прежде всего, консультация с широким активом позволяет выполнить важные задания ' +
				'по разработке укрепления моральных ценностей.',
			id: 44,
		},
	];

	getById(id: number) {
		return this.allPosts.find(p => p.id === id) as Post2Template;
	}
}
