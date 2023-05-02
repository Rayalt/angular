import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	DoCheck,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
	ViewEncapsulation,
} from '@angular/core';
import { Post } from '../post-container/post-container.component';


@Component({
	selector: 'app-part3-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None // делает стили компонента доступными глобально
})
export class PostComponent implements
	OnChanges,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewInit,
	AfterViewChecked,
	OnDestroy
{

	@Input() onePost!: Post;

	@ContentChild('info', {static: true}) infoRef!: ElementRef; // доступ до html элемента, переданного как ng-content

	@Output() onDelete = new EventEmitter<number>();

	deletePost() {
		this.onDelete.emit(this.onePost.id);
	}

	// Пишем хуки в порядке их появления
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges', changes);
	}

	ngOnInit() {
		// console.log(1, this.onePost, 'ngOnInit');
		// console.log(this.infoRef.nativeElement);
	}

	ngDoCheck(): void {
		// console.log(2, 'ngDoCheck', this.onePost);
	}

	ngAfterContentInit(): void {
		// console.log(3, 'ngAfterContentInit', this.onePost);
	}

	ngAfterContentChecked(): void {
		// console.log(4, 'ngAfterContentChecked', this.onePost);
	}

	ngAfterViewInit(): void {
		// console.log(5, 'ngAfterViewInit', this.onePost);
	}

	ngAfterViewChecked(): void {
		// console.log(6, 'ngAfterViewChecked', this.onePost);
	}

	ngOnDestroy(): void {
		// console.log(7, 'ngOnDestroy', this.onePost);
	}
}
