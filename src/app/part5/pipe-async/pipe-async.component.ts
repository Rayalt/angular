import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
	selector: 'app-part5-pipe-async',
	templateUrl: './pipe-async.component.html',
})
export class PipeAsyncComponent implements OnInit {
	prom: Promise<string> = new Promise<string>(resolve => {
		setTimeout(() => {
			resolve('Promise Resolved')
		}, 4000)
	})

	date$: Observable<Date> = new Observable<Date>(obs => {
		setInterval(() => {
			obs.next(new Date())
		}, 1000);
	})

	// Более длинный путь
	date!: Date;

	ngOnInit(): void {
		this.date$.subscribe(date => {
			this.date = date;
		})
	}

}
