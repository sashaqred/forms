import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'accessor-form',
  templateUrl: './accessor-form.component.html',
  styleUrls: ['./accessor-form.component.scss']
})
export class AccessorFormComponent {
  form = new FormGroup({
    me: new FormControl({ name: 'Sasha', nickname: 'sashaqred' }),
    friend: new FormControl(),
  });
}
