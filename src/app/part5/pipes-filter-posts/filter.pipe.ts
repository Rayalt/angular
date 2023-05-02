import { Pipe, PipeTransform } from '@angular/core';
import { PostTemplate } from "./pipes-filter-posts.component";

@Pipe({
	name: 'filter',
	pure: false // позволяет фильтру работать до и после нажатия на кнопку добавления новых постов
})
export class FilterPipe implements PipeTransform {

	transform(allPost: PostTemplate[], search: string = '', field: keyof PostTemplate = 'title'): PostTemplate[] {
		if (!search.trim()) {
			return allPost;
		}

		return allPost.filter(post => {
			/*TODO: чтоб не было ошибки, надо писать field: keyof PostTemplate*/
			return post[field].toLowerCase().includes(search.toLowerCase());
		})
	}

}
