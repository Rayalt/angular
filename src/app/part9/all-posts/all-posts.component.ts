import {Component, OnInit} from '@angular/core';
import {AllPostsService} from './all-posts.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
	selector: 'app-part9-all-posts',
	templateUrl: './all-posts.component.html',
})
export class AllPostsComponent implements OnInit {

	showIds: boolean = false;

	constructor(
		public postsService: AllPostsService,
		private routeActive: ActivatedRoute,
		private router: Router,
	) {
	}

	ngOnInit(): void {
		this.routeActive.queryParams.subscribe((someParam: Params) => {
			console.log('someParam', someParam);
			this.showIds = !!someParam?.['showIds'];
		});

		this.routeActive.fragment.subscribe(fragment => {
			console.log('Fragment', fragment);
		});
	}

	showIdsProgram() {
		this.router.navigate(['/part9'], {
			queryParams: {
				showIds: true,
			},
			fragment: 'program-fragment'
		});
	}
}
