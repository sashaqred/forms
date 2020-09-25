import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'control-info',
  templateUrl: './control-info.component.html',
  styleUrls: ['./control-info.component.scss']
})
export class ControlInfoComponent {
  @Input() ac: AbstractControl;

  renderFields: Array<keyof AbstractControl> = [
    'value',
    'touched',
    'pristine',
    'enabled',
    'errors',
    'valid',
  ];
}
