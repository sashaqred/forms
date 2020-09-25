import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceUserComponent } from './service-user/service-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDataModule } from '../form-data/form-data.module';



@NgModule({
  declarations: [ServiceFormComponent, ServiceUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormDataModule,
  ],
  exports: [ServiceFormComponent],
})
export class ServiceModule { }
