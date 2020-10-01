import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDataModule } from '../form-data/form-data.module';



@NgModule({
  declarations: [RegisterFormComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormDataModule,
  ],
  exports: [RegisterFormComponent],
})
export class RegisterModule { }
