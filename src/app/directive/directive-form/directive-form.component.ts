import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'directive-form',
  templateUrl: './directive-form.component.html',
  styleUrls: ['./directive-form.component.scss']
})
export class DirectiveFormComponent {
  form = new FormGroup({});



  friend = new FormGroup({});

  name = new FormControl('sasha', [Validators.required]);

}
