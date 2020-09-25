import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceUserComponent } from './service-user/service-user.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ServiceFormComponent, ServiceUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ServiceFormComponent],
})
export class ServiceModule { }
