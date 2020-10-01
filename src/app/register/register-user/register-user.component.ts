import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  @Input() fgName: string;

  user = new FormGroup({
    name: new FormControl(undefined, [Validators.required]),
    nickname: new FormControl(),
    surname: new FormControl(),
  });

  constructor(public fs: FormService) { }

  ngOnInit() {
    this.fs.registerControl(this.fgName, this.user);
  }
}
