import {Component} from '@angular/core';

@Component({
	selector: 'app-part2-directives',
	templateUrl: './directives.component.html',
})
export class DirectivesComponent {

	backgroundToggle: boolean = false;
	toggle: boolean = false;
	toggle2: any = false;

	arr2 = [1, 1, 2, 3, 5, 8, 13];

	objNews = [
		{
			title: 'Post 1',
			author: 'Vasya Pupkin',
			comments: [
				{
					name: 'Pupa',
					text: 'Lupa',
				},
				{
					name: 'Lupa',
					text: 'Pupa',
				},
			]
		},
		{
			title: 'Post 2',
			author: 'Vasya Pupkin 2',
			comments: [
				{
					name: 'Pupa 2',
					text: 'Lupa 2',
				},
				{
					name: 'Lupa 2',
					text: 'Pupa 2',
				},
			]
		}
	];

}
