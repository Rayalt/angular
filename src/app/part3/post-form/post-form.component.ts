import {Component, ElementRef, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from '../post-container/post-container.component';

@Component({
	selector: 'app-part3-post-form',
	templateUrl: './post-form.component.html',
})
export class PostFormComponent implements OnInit {

	@Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

	// Следим за инпутом inputRef
	@ViewChild('titleInput', {static: false}) inputRef!: ElementRef; // {static: false} после 9 версии можно не писать

	addedTitle = '';
	addedText = '';

	constructor() {}

	addPost() {
		if (this.addedTitle.trim() && this.addedText.trim()) {
			const post: Post = {
				title: this.addedTitle,
				text: this.addedText,
			}

			this.onAdd.emit(post);

			console.log('New Post: ', post);

			this.addedTitle = this.addedText = '';
		}
	}

	focusTitle() {
		// Вешаем фокус на inputRef
		this.inputRef.nativeElement.focus();
	}

	ngOnInit() {}
}
