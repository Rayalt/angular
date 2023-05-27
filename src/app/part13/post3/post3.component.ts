import {Component, OnInit} from '@angular/core';
import {Post3Service} from './post3.service';

@Component({
	template: `Post3 Component`,
	selector: 'app-part13-post3',
})

export class Post3Component implements OnInit {
	post3Collection: any = [];
	message: string = '';

	constructor(private service: Post3Service) {

	}

	ngOnInit() {
		// this.service.fetch().subscribe(p => {
		// 	this.post3Collection = p;
		// });
		this.service.fetchPromise().then(p => {
			this.post3Collection = p;
		});
	}

	// add(title: string) {
	// 	const post3 = {title};
	// 	this.service.create(post3).subscribe(() => {
	// 		this.post3Collection.push(post3);
	// 	}, err => this.message = err);
	// } // устаревшая запись

	add(title: string) {
		const post3 = {title};

		this.service.create(post3).subscribe({
			next: this.post3Collection.push(post3),
			error: error => {
				this.message = error.message;
			},
		});
	}

	delete(id: number) {
		if (window.confirm('Are you sure?')) {
			this.service.remove(id).subscribe();
		}
	}
}
