import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessorModule } from './accessor/accessor.module';
import { AccessorFormComponent } from './accessor/accessor-form/accessor-form.component';
import { ServiceFormComponent } from './service/service-form/service-form.component';
import { ServiceModule } from './service/service.module';
import { DirectiveFormComponent } from './directive/directive-form/directive-form.component';
import { DirectiveModule } from './directive/directive.module';
import { RegisterModule } from './register/register.module';
import { RegisterFormComponent } from './register/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accessor'
  },
  {
    path: 'accessor',
    component: AccessorFormComponent,
  },
  {
    path: 'service',
    component: ServiceFormComponent,
  },
  {
    path: 'directive',
    component: DirectiveFormComponent,
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AccessorModule, ServiceModule, DirectiveModule, RegisterModule]
})
export class AppRoutingModule { }
