import {AbstractControl, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export interface Something {
	[key: string]: boolean
}

export class FirstValidators {
	static restrictedEmails(control: FormControl): Something | null {
		if (['v@mail.ru', 'test@mail.ru'].includes(control.value)) {
			return {restrictedEmail: true}
		}
		return null;
	}

	/*TODO: FormControl не работает*/
	static uniqEmail(control: AbstractControl): Promise<Something | null> | Observable<Something | null> {
		return new Promise(resolve => {
			setTimeout(() => {
				if (control.value === 'async@mail.ru') {
					resolve({uniqEmail: true})
				} else {
					resolve(null);
				}
			}, 2000)
		})
	}
}
