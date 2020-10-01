import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers: [FormService],
})
export class RegisterFormComponent {
  form = new FormGroup({});

  constructor(private fs: FormService) {
    this.fs.registerForm(this.form)
  }
}
