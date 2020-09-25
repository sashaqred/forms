import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlInfoComponent } from './control-info/control-info.component';



@NgModule({
  declarations: [ControlInfoComponent],
  exports: [ControlInfoComponent],
  imports: [
    CommonModule
  ]
})
export class FormDataModule { }
