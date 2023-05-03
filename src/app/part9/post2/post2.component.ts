import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AllPostsService, Post2Template} from "../all-posts/all-posts.service";

@Component({
	selector: 'app-part9-post2',
	templateUrl: './post2.component.html',
})
export class Post2Component implements OnInit {

	post2!: Post2Template;

	// lastIdx: number = this.allPostsService.allPosts[this.allPostsService.allPosts.length -1].id;

	constructor(
		private routeService: ActivatedRoute,
		private someRouter: Router,
		// private allPostsService: AllPostsService,
	) {}

	ngOnInit(): void {
		// this.post2 = this.routeService.snapshot.data['post2'];

		this.routeService.data.subscribe(data => {
			this.post2 = data['post2'];
		})

		// this.routeService.params.subscribe((someParam: Params) => {
		// 	console.log('someParam', someParam);
		// 	this.post2 = this.allPostsService.getById(+someParam['id']);
		// });
	}

	loadLastPost() {
		// todo че такое then
		this.someRouter.navigate(['/part9', 44]);
	}
}
