import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";

@Component({
	selector: 'app-shared-menu-prime',
	templateUrl: './menu-prime.component.html',
})
export class MenuPrimeComponent implements OnInit {

	items!: MenuItem[];

	// constructor (private messageService: MessageService) {}

	ngOnInit() {
		// this.items = [{
		// 	label: 'Options',
		// 	items: [{
		// 		label: 'Update',
		// 		icon: 'pi pi-refresh',
		// 	},
		// 		{
		// 			label: 'Delete',
		// 			icon: 'pi pi-times',
		// 		}
		// 	]},
		// 	{
		// 		label: 'Navigate',
		// 		items: [{
		// 			label: 'Angular',
		// 			icon: 'pi pi-external-link',
		// 			url: 'http://angular.io'
		// 		},
		// 			{
		// 				label: 'Router',
		// 				icon: 'pi pi-upload',
		// 				routerLink: '/fileupload'
		// 			}
		// 		]}
		// ];
	}

}
