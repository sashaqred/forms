import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessorFormComponent } from './accessor-form/accessor-form.component';
import { AccessorUserComponent } from './accessor-user/accessor-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDataModule } from '../form-data/form-data.module';



@NgModule({
  declarations: [AccessorFormComponent, AccessorUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormDataModule,
  ],
  exports: [AccessorFormComponent],
})
export class AccessorModule { }
