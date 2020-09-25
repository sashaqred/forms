import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormService {
  control: AbstractControl;

  registerForm(control: AbstractControl) {
    this.control = control;
  }

  get(path?: string): AbstractControl {
    if (path) {
      return this.control.get(path);
    } else {
      return this.control;
    }
  }
}
