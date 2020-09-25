import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveFormComponent } from './directive-form/directive-form.component';
import { DirectiveUserComponent } from './directive-user/directive-user.component';
import { FcNameDirective } from './fc-name.directive';
import { FgNameDirective } from './fg-name.directive';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DirectiveFormComponent, DirectiveUserComponent, FcNameDirective, FgNameDirective],
  exports: [DirectiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class DirectiveModule { }
