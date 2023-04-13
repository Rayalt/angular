import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
	selector: 'app-shared-card',
	templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

	@Input() cardClass: string = '';
	@Input() cardHeaderClass: string = '';

	@ContentChild('body') cardBody: TemplateRef<any> | undefined;
	@ContentChild('header') cardHeader: TemplateRef<any> | undefined;
	@ContentChild('icon') cardIcon: TemplateRef<any> | undefined;
	@ContentChild('footer') cardFooter: TemplateRef<any> | undefined;

	public templateContext: any = {};

	constructor() { }

	ngOnInit(): void {
	}

}
