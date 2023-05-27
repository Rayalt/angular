import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-part9-navigation',
	templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

	constructor(private router: Router) {
	}

	ngOnInit(): void {
	}

	goToPostsPage() {
		this.router.navigate(['/part3']).then(r => '/part9');
	}
}
