import {animate, style, transition, trigger} from '@angular/animations';

export const menuAnimation = trigger('menu', [
	transition(':enter', [
		style({
			opacity: 0,
		}),
		animate(
			'.3s',
			style({
				opacity: 1,
			}),
		),
	]),

	transition(':leave', [
		style({
			opacity: 1,
		}),
		animate(
			'.3s',
			style({
				opacity: 0,
			}),
		),
	]),
]);
