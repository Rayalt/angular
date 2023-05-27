import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AllPostsService, Post2Template} from '../all-posts/all-posts.service';
import {delay, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class Post2Resolver implements Resolve<Post2Template> {

	constructor(private allPostsService: AllPostsService) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post2Template> | Promise<Post2Template> | Post2Template {
		return of(this.allPostsService.getById(+route.params['id']))
			.pipe(delay(1500));
	}
}
