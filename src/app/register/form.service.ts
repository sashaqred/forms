import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormService {
  control: FormGroup;

  registerForm(control: FormGroup) {
    this.control = control;
  }

  registerControl(name: string, control: AbstractControl) {
    this.control.registerControl(name, control);
  }
}
