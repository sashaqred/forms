import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'accessor-user',
  templateUrl: './accessor-user.component.html',
  styleUrls: ['./accessor-user.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AccessorUserComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AccessorUserComponent),
      multi: true
    }
  ]
})
export class AccessorUserComponent implements ControlValueAccessor, Validator {
  user = new FormGroup({
    name: new FormControl(undefined, [Validators.required]),
    nickname: new FormControl(),
    surname: new FormControl(),
  });

  destroy$ = new Subject();

  writeValue(obj: any): void {
    this.user.patchValue(obj ?? {});
  }

  registerOnChange(fn: any): void {
    this.user.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.user.disable() : this.user.enable();
  }

  validate(control: AbstractControl): ValidationErrors {
    if (this.user.valid) {
      return null;
    }

    const error: Record<string, string> = {};
    if (this.user.get('name').invalid) {
      error.name = 'Name is invalid';
    }
    if (this.user.get('nickname').invalid) {
      error.nickname = 'Nickname is invalid';
    }
    if (this.user.get('surname').invalid) {
      error.surname = 'Surname is invalid';
    }
    return error;
  }

  registerOnValidatorChange?(fn: () => void): void {}
}
