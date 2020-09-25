import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[fcName]'
})
export class FcNameDirective {
  @Input('fcName') name: string;
  @Input() formControl: FormControl;
}
