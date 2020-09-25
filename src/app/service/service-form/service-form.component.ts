import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
  providers: [FormService],
})
export class ServiceFormComponent {
  form = new FormGroup({
    me: new FormGroup({
      name: new FormControl('Sasha', [Validators.required]),
      nickname: new FormControl('sashaqred'),
      surname: new FormControl(),
    }),
    friend: new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      nickname: new FormControl(),
      surname: new FormControl(),
    }),
  });

  constructor(private fs: FormService) {
    this.fs.registerForm(this.form)
  }
}
