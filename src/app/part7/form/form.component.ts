import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {FirstValidators} from "../validators/first.validators";

type cityTemplate = {
	[key: string]: string;
}
// TODO можно вместо as keyof object писать

@Component({
	selector: 'app-part7-form',
	templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

	form!: FormGroup;
	email!: FormControl;
	password!: FormControl;
	address!: FormGroup;

	@ViewChild('skillInput') skillInput!: ElementRef;

	ngOnInit(): void {
		this.email = new FormControl('', [
			Validators.email,
			Validators.required,
			FirstValidators.restrictedEmails,
		], [FirstValidators.uniqEmail]);

		this.password = new FormControl('', [
			Validators.required,
			Validators.minLength(8),
		]);

		this.address = new FormGroup({
			country: new FormControl('ru'),
			city: new FormControl('', [
				Validators.required,
			]),
		});

		this.form = new FormGroup({
			email: this.email,
			password: this.password,
			address: this.address,
			skills: new FormArray([]),
		});
	}

	submit() {
		if (this.form.valid) {
			console.log('Form submitted: ', this.form);

			const formData = {...this.form.value};

			console.log('Form Data:', formData);

			this.form.reset();
			this.skillInput.nativeElement.remove();
		}
	}

	get skills() {
		return this.form.get('skills');
	}

	setCapital() {
		const cityMap = {
			ru: 'Москва',
			ua: 'Киев',
			by: 'Минск'
		}

		const cityKey = this.address.get('country')?.value as keyof typeof cityMap;

		const city = cityMap[cityKey];

		this.form.patchValue({address: {city}});
	}

	addSkills() {
		const control = new FormControl('', Validators.required);

		// (<FormArray>this.form.get('skills')).push(control);

		(this.form.get('skills') as FormArray).push(control);
		console.log(this.form.get('skills'));
	}

	getControls() {
		return (this.form.get('skills') as FormArray).controls;
	}

	deleteInput() {
		console.log(this.skillInput.nativeElement);
		// this.skillInput.nativeElement.remove();
	}
}
