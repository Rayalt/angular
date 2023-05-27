import {animate, group, keyframes, query, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {bounce, jello} from 'ng-animate';

export const boxAnimation = trigger('box', [
		state('start', style( {
			backgroundColor: 'rgb(13, 110, 253)',
			width: '50%',
		})),
		state('end', style({
			backgroundColor: 'rgb(220, 53, 69)',
			width: '75%',
		})),
		state('special', style({
			backgroundColor: 'rgb(255, 193, 7)',
			borderRadius: '24px',
		})),
		transition('start => end', animate(450)),
		transition('end => start', animate('1000ms ease-in-out')),

		// * <=> special работает в обе стороны
		transition('* <=> special', [
			group([
				query('span', animate(1500, style({
					fontSize: '1.5rem',
				}))),
				style({
					backgroundColor: 'rgb(25, 135, 84)',
				}),
				animate('1s', style({
					backgroundColor: 'rgb(255, 192, 203)',
				})),
				animate(750),
			]),
		]),

		// показ/скрытие эл-тов
		// void => * === :enter
		transition(':enter', [
			style({
				opacity: 0,
			}),
			animate('850ms ease-out'),
		]),
		// * => void === :leave
		transition(':leave', [
			style({
				opacity: 1,
			}),

			// sequence - последовательные анимации, group - одновременные
			group([
				animate(750, style({
					opacity: 0,
					transform: 'scale(1.2)',
				})),
				animate(300, style({
					fontWeight: 'bold',
				})),
			]),
		]),
	]);

export const boxAnimation2 = trigger('box2', [
	state('start', style( {
		backgroundColor: 'rgb(13, 110, 253)',
		width: '50%',
	})),
	state('end', style({
		backgroundColor: 'rgb(220, 53, 69)',
		width: '75%',
	})),
	state('special', style({
		backgroundColor: 'rgb(255, 193, 7)',
		borderRadius: '24px',
	})),
	transition('start => end', animate(450)),
	transition('end => start', animate('1000ms ease-in-out')),

	// * <=> special работает в обе стороны
	transition('* <=> special', [
		group([
			query('span', animate(1500, style({
				fontSize: '1.5rem',
			}))),
			style({
				backgroundColor: 'rgb(25, 135, 84)',
			}),
			animate('1s', style({
				backgroundColor: 'rgb(255, 192, 203)',
			})),
			animate(750),
		]),
	]),

	// показ/скрытие эл-тов
	// void => * === :enter
	transition(':enter', [
		animate('4s', keyframes([
			style({
				backgroundColor: 'rgb(220, 53, 69)',
				offset: 0, // отработает сразу
			}),
			style({
				backgroundColor: 'rgb(0, 0, 0)',
				offset: .2, // отработает через 20% времени
			}),
			style({
				backgroundColor: 'rgb(255, 193, 7)',
				offset: .3, // отработает через 30% времени
			}),
			style({
				backgroundColor: 'rgb(13, 110, 253)',
				offset: 1, // отработает в конце
			}),
		]))
	]),
	// * => void === :leave
	transition(':leave', [
		style({
			opacity: 1,
		}),

		// sequence - последовательные анимации, group - одновременные
		group([
			animate(750, style({
				opacity: 0,
				transform: 'scale(1.2)',
			})),
			animate(300, style({
				fontWeight: 'bold',
			})),
		]),
	]),
]);

export const boxAnimation3 = trigger('box3', [
		state('start', style( {
			backgroundColor: 'rgb(13, 110, 253)',
			width: '50%',
		})),
		state('end', style({
			backgroundColor: 'rgb(220, 53, 69)',
			width: '75%',
		})),
		state('special', style({
			backgroundColor: 'rgb(255, 193, 7)',
			borderRadius: '24px',
		})),
		transition('start => end', animate(450)),
		transition('end => start', animate('1000ms ease-in-out')),

		// * <=> special работает в обе стороны
		transition('* <=> special', [
			group([
				query('span', animate(1500, style({
					fontSize: '1.5rem',
				}))),
				style({
					backgroundColor: 'rgb(25, 135, 84)',
				}),
				animate('1s', style({
					backgroundColor: 'rgb(255, 192, 203)',
				})),
				animate(750),
			]),
		]),

		// показ/скрытие эл-тов
		// void => * === :enter
		transition(':enter', [
			style({
				opacity: 0,
			}),
			animate('850ms ease-out'),
		]),
		// * => void === :leave
		transition(':leave', [
			style({
				opacity: 1,
			}),

			// sequence - последовательные анимации, group - одновременные
			group([
				animate(750, style({
					opacity: 0,
					transform: 'scale(1.2)',
				})),
				animate(300, style({
					fontWeight: 'bold',
				})),
			]),
		]),
	]);

export const bounceAnimation =	trigger('bounce', [
		transition('void => *', useAnimation(bounce)),
		transition('* => void', useAnimation(jello, {
			params: {
				timing: 3,
				delay: .3,
			}
		})),
	]);
