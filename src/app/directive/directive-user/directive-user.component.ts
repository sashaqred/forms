import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'directive-user',
  templateUrl: './directive-user.component.html',
  styleUrls: ['./directive-user.component.scss']
})
export class DirectiveUserComponent implements OnInit {
  @Input() userName: string;

  name = new FormControl('sasha', [Validators.required]);
  nickname = new FormControl();
  surname = new FormControl();
  user = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}
