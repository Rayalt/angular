import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, delay, map, Observable, tap, throwError} from 'rxjs';

export interface TodoTemplate {
	completed: boolean,
	title: string,
	id?: number,
}

@Injectable({providedIn: 'root'})

export class HttpService {
	constructor(private httpItem: HttpClient) {
	}

	addTodo(newTodo: TodoTemplate): Observable<TodoTemplate> {

		// альтернативная запись
		const headerCollection: HttpHeaders = new HttpHeaders({
			'CustomHeader2': Math.random().toString(),
			'NewCustomHeader': Math.random().toString(),
		});

		return this.httpItem.post<TodoTemplate>('https://jsonplaceholder.typicode.com/todos', newTodo, {
			// headers: new HttpHeaders({
			// 	'CustomHeader2': Math.random().toString(),
			// 	'NewCustomHeader': Math.random().toString(),
			// })
			headers: headerCollection,
		});
	}

	fetchTodoCollection(): Observable<TodoTemplate[]> {
		let paramCollection = new HttpParams();
		paramCollection = paramCollection.append('_limit', '4');
		paramCollection = paramCollection.append('custom', 'anything');

		return this.httpItem.get<TodoTemplate[]>('https://jsonplaceholder.typicode.com/todos', {
			// params: new HttpParams().set('_limit', '4') // задаем query параметры
			params: paramCollection,
			// observe, по умолчанию 'body'
			observe: 'response',
		})
			.pipe(
				map(response => {
					// console.log('Response:', response);
					return response.body;
				}),
				delay(2000),
				map(response => {
					// console.log('Response:', response);
					return response as TodoTemplate[];
				}),
				catchError(error => {
					console.log('Error:', error.message);
					return throwError(error);
				})
			);
	}

	removeTodo(id?: number): Observable<any> {
		return this.httpItem.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			observe: 'events',
		})
			.pipe(
				tap(event => {
					// console.log('Event:', event);
					if (event.type === HttpEventType.Sent) {
						console.log('Sent:', event);
					}
					if (event.type === HttpEventType.Response) {
						console.log('Response:', event);
					}
				})
			);
	}

	// TODO number | undefined
	completeTodo(id: number): Observable<TodoTemplate> {
		return this.httpItem.put<TodoTemplate>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			completed: true,
		}, {
			// responseType: 'json' по умолчанию
			// responseType: 'text' будет сразу передавать строку
			// responseType: 'text', // TODO not work
			responseType: 'json',
		});
	}
}
