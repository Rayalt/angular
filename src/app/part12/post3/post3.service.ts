import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root',
})

export class Post3Service {
	constructor(private http: HttpClient) {
	}

	create(post3: any): Observable<any>	 {
		return this.http.post(``, post3);
	}

	fetch(): Observable<any[]> {
		return this.http.get<any[]>(``);
	}

	remove(id: number): Observable<any> {
		return this.http.delete<void>(`${id}`);
	}
}
