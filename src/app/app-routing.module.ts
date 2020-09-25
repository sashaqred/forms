import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessorModule } from './accessor/accessor.module';
import { AccessorFormComponent } from './accessor/accessor-form/accessor-form.component';
import { ServiceFormComponent } from './service/service-form/service-form.component';
import { ServiceModule } from './service/service.module';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AccessorModule, ServiceModule]
})
export class AppRoutingModule { }
