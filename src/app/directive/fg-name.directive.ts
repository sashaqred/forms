import { ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import {FcNameDirective } from './fc-name.directive';

@Directive({
  selector: '[fgName]'
})
export class FgNameDirective {
  @Input('fgName') name: string;
  @Input() formGroup: FormGroup;

  @ContentChildren(FgNameDirective, {descendants: true}) private formGroups: QueryList<FgNameDirective>;
  @ContentChildren(FcNameDirective, {descendants: true}) private formControls: QueryList<FcNameDirective>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.formGroups.toArray().forEach((fg) => {
      this.formGroup.registerControl(fg.name, fg.formGroup);
    });


    this.formControls.toArray().forEach((fg) => {
      this.formGroup.registerControl(fg.name, fg.formControl);
    });

    console.log(this.name, this.formGroup)

    setTimeout(() => {
      this.formGroup.updateValueAndValidity();
    })
  }

}
