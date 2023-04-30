import { Component, OnInit } from '@angular/core';
import {HttpService, TodoTemplate} from "../service/http.service";
import {retry} from "rxjs";

@Component({
	selector: 'app-part8-http-client',
	templateUrl: './http-client.component.html',
})
export class HttpClientComponent implements OnInit {

	todoCollection: TodoTemplate[] = [];

	loading: boolean = false;

	todoTitle: string = '';

	errorMsg: string = '';

	constructor(private httpService: HttpService) { }

	ngOnInit(): void {
		this.fetchTodoCollection();
	}

	addTodo() {
		if (!this.todoTitle.trim()) {
			return;
		}

		this.httpService.addTodo({
			title: this.todoTitle,
			completed: false,
		}).subscribe(todoElement => {
			console.log('todoElement:', todoElement);
			this.todoCollection.push(todoElement);
			this.todoTitle = '';
		});
	}

	fetchTodoCollection() {
		this.loading = true;

		this.httpService.fetchTodoCollection()
			.subscribe({
				next: todoCollection => {
					// console.log('todoCollection', todoCollection);
					this.loading = false;
					this.todoCollection = todoCollection;
				},
				error: error => {
					this.errorMsg = error.message;
				},
			})

			// Старая запись
			// .subscribe(todoCollection => {
			// 	// console.log('todoCollection', todoCollection);
			// 	this.todoCollection = todoCollection;
			//
			// 	this.loading = false;
			// }, error => {
			// 		this.errorMsg = error.message;
			// 	});
	}

	removeHttp(id?: number) {
		this.httpService.removeTodo(id)
			.subscribe(() => {
				this.todoCollection = this.todoCollection.filter(item => item.id !== id);
			});
	}

	completeTodo(id: any) {
		this.httpService.completeTodo(id)
			.subscribe(todoElement => {
				// todoElement = JSON.parse(todoElement); // TODO: not work
				// this.todoCollection.find(item => item.id === todoElement.id).completed = true; // TODO: not working
				const a = this.todoCollection.find(item => item.id === todoElement.id);
				if (a) {
					a.completed = true;
				}
			})
	}
}
