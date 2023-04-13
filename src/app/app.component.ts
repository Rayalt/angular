import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

	pageBody: any;

	ngOnInit() {
		this.pageBody = document.body;
	}

	openMenu() {
		this.pageBody.classList.add('open-nav');
	}

	closeMenu() {
		this.pageBody.classList.remove('open-nav');
	}
}
